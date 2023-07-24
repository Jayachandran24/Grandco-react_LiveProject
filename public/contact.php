<?php

// $servernmae = "localhost";
// $username = "Grandco_React";
// $password = "gjrl!y+E,BfX";
// $dbname = "grandco_contact_form";
$servernmae = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn= new mysqli ($servernmae,$username,$password,$dbname);

if($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
}
echo "connection successfull";
    
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $ipaddress = $_SERVER['REMOTE_ADDR'];
 Echo "Your IP Address is " . $ipaddress;

    $Name = $_POST['name'];
    $Emails = $_POST['email'];
    $Subject = $_POST['subject'];
    $Message = $_POST['message'];

    echo "Name: " . $Name . '<br>';
    echo "Email: " . $Emails . '<br>';
    echo "Subject: " . $Subject . '<br>';
    echo "Message: " . $Message . '<br>';
    echo "Ipaddr : " . $ipaddress . '<br>';
    
    if(!empty($Name) && !empty($Emails) && !empty($Subject) && !empty($Message) && !empty($ipaddress) ) {
        $sql = "insert into grandco(name,email,subject,message,ipaddr) values('$Name','$Emails','$Subject','$Message','$ipaddress')";
        if (mysqli_query($conn, $sql)) {
            echo 'successfull';
            // Insertion successful, redirect to the home page
            // header('Location: http://localhost:3000/#/Contact'); // Replace 'index.php' with the actual URL of your home page
            exit(); // Make sure to exit the script after the redirect
        } else {
            echo 'Error';
        }

    }
   

    // // configure
    // $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
    // $errorMessage = 'There was an error while submitting the form. Please try again later';

    // // Let's send the email
    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\Exception;

    // require 'vendor/phpmailer/phpmailer/src/Exception.php';
    // require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
    // require 'vendor/phpmailer/phpmailer/src/SMTP.php';

    // $mail = new PHPMailer(true);
    // try {
    //     // Server settings
    //     $mail->SMTPDebug = 0;
    //     $mail->isSMTP();
    //     $mail->Host =$HOST;   
    //     $mail->SMTPAuth = true; 
    //     $mail->Username = $MAILID ;
    //     $mail->Password =$PASSWORD;
    //     $mail->SMTPSecure = 'ssl';
    //     $mail->Port = $PORT;

    //     // Recipients
    //     $mail->setFrom($Emails);
    //     $mail->addAddress($Emails);

    //     // Content
    //     $mail->isHTML(true);
    //     $mail->Subject = $Subject;
    //     $mail->Body = "
    //     <p><b>Name :</b> " . $Name . "</p>
    //     <p><b>Email :</b> " . $Emails . "</p>
    //     <p><b>Message :</b> " . $Message . " </p>";

    //     // $mail->send();

        
    //     // $_SESSION['messege'] = $okMessage;

    //     // echo 'Contact form successfully submitted. Thank you, I will get back to you soon!';
    //     // header('Location: index.php');
        
    // } 
    // // catch (Exception $e) {
    // //     echo 'There was an error while submitting the form. Please try again later';
        
    // // }
?>


