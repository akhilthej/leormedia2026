<?php
// ContactSubmissions.php

// Enable CORS and set headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "config_email.php";

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit();
}

try {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    // Check if JSON is valid
    if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Invalid JSON data"]);
        exit();
    }

    // Honeypot validation
    if (!empty($data->honeypot)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Bot detected"]);
        exit();
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
        echo json_encode([
            "success" => false,
            "error" => "Missing required fields: " . implode(', ', $missing_fields)
        ]);
        exit();
    }

    // Validate email
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Invalid email format"]);
        exit();
    }

    // Sanitize and prepare data for email
    $name = strip_tags(trim($data->name));
    $email = strip_tags(trim($data->email));
    $phone = strip_tags(trim($data->phone));
    $subject = strip_tags(trim($data->subject));
    $message = strip_tags(trim($data->message));

    // Send Email Notification
    $email_to = "leormedia@gmail.com";
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
        <hr>
        <p>This email was sent from the contact form on leormedia.com</p>
    ";

    // We suppress the output of smtp_mailer to avoid breaking the JSON response
    ob_start();
    smtp_mailer($email_to, $email_subject, $email_body);
    ob_end_clean();

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Contact form submitted successfully"
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Server error: " . $e->getMessage()
    ]);
}
?>