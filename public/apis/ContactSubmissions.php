<?php
// contactus.php

// Enable CORS and set headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "./includes/db_config.php";
include "./includes/config_email.php";


class ContactForm
{
    private $conn;
    private $table_name = "contact_submissions";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Create new contact submission
    public function create()
    {
        try {
            // Get JSON input
            $json = file_get_contents('php://input');
            $data = json_decode($json);

            // Log received data for debugging
            error_log("Received data: " . print_r($data, true));

            // Check if JSON is valid
            if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid JSON data: " . json_last_error_msg()]);
            }

            // Honeypot validation
            if (!empty($data->honeypot)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Bot detected"]);
            }

            // Validate required fields
            $required_fields = ['name', 'email', 'phone', 'subject', 'message'];
            $missing_fields = [];

            foreach ($required_fields as $field) {
                if (empty($data->$field)) {
                    $missing_fields[] = $field;
                }
            }

            if (!empty($missing_fields)) {
                http_response_code(400);
                return json_encode([
                    "success" => false,
                    "error" => "Missing required fields: " . implode(', ', $missing_fields)
                ]);
            }

            // Validate email
            if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid email format"]);
            }

            // Sanitize data
            $name = $this->conn->real_escape_string(trim($data->name));
            $email = $this->conn->real_escape_string(trim($data->email));
            $phone = $this->conn->real_escape_string(trim($data->phone));
            $subject = $this->conn->real_escape_string(trim($data->subject));
            $message = $this->conn->real_escape_string(trim($data->message));

            // Check if table exists, if not create it
            $this->createTableIfNotExists();

            $query = "INSERT INTO " . $this->table_name . " 
                     (name, email, phone, subject, message, submission_date, status) 
                     VALUES (?, ?, ?, ?, ?, NOW(), 'new')";

            // Use prepared statement to prevent SQL injection
            $stmt = $this->conn->prepare($query);
            if (!$stmt) {
                throw new Exception("Prepare failed: " . $this->conn->error);
            }

            $stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);

            if ($stmt->execute()) {
                $insert_id = $stmt->insert_id;
                $stmt->close();

                // Send Email Notification
                $email_to = "business@sslscm.com";
                $email_subject = "New Contact Form Submission: " . $subject;
                $email_body = "
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> $name</p>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Phone:</strong> $phone</p>
                    <p><strong>Subject:</strong> $subject</p>
                    <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
                    <hr>
                    <p>This email was sent from the contact form on shivamshippingandlogistics-scm.com</p>
                ";

                // We suppress the output of smtp_mailer to avoid breaking the JSON response
                ob_start();
                smtp_mailer($email_to, $email_subject, $email_body);
                ob_end_clean();

                http_response_code(201);
                return json_encode([
                    "success" => true,
                    "message" => "Contact form submitted successfully",
                    "id" => $insert_id
                ]);
            }
            else {
                $error = $stmt->error;
                $stmt->close();
                throw new Exception("Execute failed: " . $error);
            }

        }
        catch (Exception $e) {
            http_response_code(500);
            return json_encode([
                "success" => false,
                "error" => "Unable to submit form: " . $e->getMessage()
            ]);
        }
    }

    // Create table if it doesn't exist
    private function createTableIfNotExists()
    {
        $query = "CREATE TABLE IF NOT EXISTS " . $this->table_name . " (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            submission_date DATETIME NOT NULL,
            status ENUM('new', 'read', 'replied', 'converted') DEFAULT 'new',
            updated_date DATETIME NULL,
            INDEX idx_email (email),
            INDEX idx_status (status),
            INDEX idx_submission_date (submission_date)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

        if (!$this->conn->query($query)) {
            throw new Exception("Table creation failed: " . $this->conn->error);
        }
    }

    // Get all submissions (for admin)
    public function read()
    {
        try {
            $query = "SELECT * FROM " . $this->table_name . " ORDER BY submission_date DESC";
            $result = $this->conn->query($query);

            if (!$result) {
                throw new Exception("Query failed: " . $this->conn->error);
            }

            $submissions = [];
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $submissions[] = $row;
                }
            }

            return json_encode(["success" => true, "data" => $submissions]);

        }
        catch (Exception $e) {
            http_response_code(500);
            return json_encode(["success" => false, "error" => $e->getMessage()]);
        }
    }

    // Get single submission
    public function readSingle($id)
    {
        try {
            if (!is_numeric($id)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid ID"]);
            }

            $id = $this->conn->real_escape_string($id);
            $query = "SELECT * FROM " . $this->table_name . " WHERE id = '$id' LIMIT 1";
            $result = $this->conn->query($query);

            if (!$result) {
                throw new Exception("Query failed: " . $this->conn->error);
            }

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                return json_encode(["success" => true, "data" => $row]);
            }
            else {
                http_response_code(404);
                return json_encode(["success" => false, "error" => "Submission not found"]);
            }

        }
        catch (Exception $e) {
            http_response_code(500);
            return json_encode(["success" => false, "error" => $e->getMessage()]);
        }
    }

    // Update submission status
    public function update($id)
    {
        try {
            if (!is_numeric($id)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid ID"]);
            }

            $json = file_get_contents('php://input');
            $data = json_decode($json);

            if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid JSON data"]);
            }

            if (empty($data->status)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Status is required"]);
            }

            $id = $this->conn->real_escape_string($id);
            $status = $this->conn->real_escape_string(trim($data->status));

            // Validate status - FIXED: Added 'converted' to valid statuses
            $valid_statuses = ['new', 'read', 'replied', 'converted'];
            if (!in_array($status, $valid_statuses)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid status. Must be one of: " . implode(', ', $valid_statuses)]);
            }

            $query = "UPDATE " . $this->table_name . " 
                     SET status = ?, updated_date = NOW() 
                     WHERE id = ?";

            $stmt = $this->conn->prepare($query);
            if (!$stmt) {
                throw new Exception("Prepare failed: " . $this->conn->error);
            }

            $stmt->bind_param("si", $status, $id);

            if ($stmt->execute()) {
                $affected_rows = $stmt->affected_rows;
                $stmt->close();

                if ($affected_rows > 0) {
                    return json_encode(["success" => true, "message" => "Submission updated successfully"]);
                }
                else {
                    http_response_code(404);
                    return json_encode(["success" => false, "error" => "Submission not found"]);
                }
            }
            else {
                $error = $stmt->error;
                $stmt->close();
                throw new Exception("Execute failed: " . $error);
            }

        }
        catch (Exception $e) {
            http_response_code(500);
            return json_encode(["success" => false, "error" => $e->getMessage()]);
        }
    }

    // Delete submission
    public function delete($id)
    {
        try {
            if (!is_numeric($id)) {
                http_response_code(400);
                return json_encode(["success" => false, "error" => "Invalid ID"]);
            }

            $id = $this->conn->real_escape_string($id);
            $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

            $stmt = $this->conn->prepare($query);
            if (!$stmt) {
                throw new Exception("Prepare failed: " . $this->conn->error);
            }

            $stmt->bind_param("i", $id);

            if ($stmt->execute()) {
                $affected_rows = $stmt->affected_rows;
                $stmt->close();

                if ($affected_rows > 0) {
                    return json_encode(["success" => true, "message" => "Submission deleted successfully"]);
                }
                else {
                    http_response_code(404);
                    return json_encode(["success" => false, "error" => "Submission not found"]);
                }
            }
            else {
                $error = $stmt->error;
                $stmt->close();
                throw new Exception("Execute failed: " . $error);
            }

        }
        catch (Exception $e) {
            http_response_code(500);
            return json_encode(["success" => false, "error" => $e->getMessage()]);
        }
    }
}

// Main execution
try {
    // Create contact form instance
    $contact = new ContactForm($conn);

    // Get request method
    $method = $_SERVER['REQUEST_METHOD'];

    // Extract ID from URL if present
    $id = null;
    $path = $_SERVER['REQUEST_URI'];

    // Check for ID in URL path
    if (preg_match('/\/(\d+)$/', $path, $matches)) {
        $id = $matches[1];
    }
    // Check for ID in query string
    elseif (isset($_GET['id']) && is_numeric($_GET['id'])) {
        $id = $_GET['id'];
    }

    // Route requests
    switch ($method) {
        case 'POST':
            echo $contact->create();
            break;

        case 'GET':
            if ($id) {
                echo $contact->readSingle($id);
            }
            else {
                echo $contact->read();
            }
            break;

        case 'PUT':
            if ($id) {
                echo $contact->update($id);
            }
            else {
                http_response_code(400);
                echo json_encode(["success" => false, "error" => "ID is required"]);
            }
            break;

        case 'DELETE':
            if ($id) {
                echo $contact->delete($id);
            }
            else {
                http_response_code(400);
                echo json_encode(["success" => false, "error" => "ID is required"]);
            }
            break;

        default:
            http_response_code(405);
            echo json_encode(["success" => false, "error" => "Method not allowed"]);
            break;
    }

}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Server error: " . $e->getMessage()]);
}
finally {
    // Close connection
    if (isset($conn)) {
        $conn->close();
    }
}
?>