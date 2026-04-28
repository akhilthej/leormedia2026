<?php
include('smtp/PHPMailerAutoload.php');

function smtp_mailer($to, $subject, $msg)
{
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = "smtp.hostinger.com";
    $mail->Port = "465";
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "mail@leormedia.com";
    $mail->Password = 'ilovemotherA1!';
    $mail->SetFrom("mail@leormedia.com");
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => false
        )
    );

    if (!$mail->Send()) {
        echo json_encode(array("status" => "error", "message" => $mail->ErrorInfo));
    }
    else {
        echo json_encode(array("status" => "success", "message" => "Email sent successfully"));
    }
}
?>