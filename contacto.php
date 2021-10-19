<?php require 'PHPMailer/PHPMailerAutoload.php';?>
<?php
function Redirect_to($New_Location)
{header("Location:" . $New_Location);
    exit;
}

// call the contact() function if contact_btn is clicked
if (isset($_POST['contact_btn'])) {
    contact();
}

function contact()
{
    if (isset($_POST["contact_btn"])) {

        $name = $_POST["nombre"];
        $email = $_POST["mail"];
        $phone = $_POST["telefono"];
        $message = $_POST["mensaje"];

        // Email Functionality

        date_default_timezone_set('Etc/UTC');

        $mail = new PHPMailer();

        $mail->setFrom($_POST['mail']);
        $mail->addAddress('guidomsejas@gmail.com');

        // The subject of the message.
        $mail->Subject = 'Mensaje recibido de un cliente! ' . $name;

        $message = '<html><body>';

        $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';

        $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['nombre']) . "</td></tr>";

        $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['mail']) . "</td></tr>";

        $message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['telefono']) . "</td></tr>";

        $message .= "<tr><td><strong>Message</strong> </td><td>" . strip_tags($_POST['mensaje']) . "</td></tr>";

        $message .= "</table>";
        $message .= "</body></html>";

        $mail->Body = $message;

        $mail->isHTML(true);

        if ($mail->send()) {
            Redirect_to("index.html");
        } else {
            Redirect_to("contacto.html");
        }

    } //Ending of Submit Button If-Condition

}