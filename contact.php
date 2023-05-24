<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['subject'];

if ($name != NULL && $email != NULL && $message != NULL) {
    $to = "sderacy@gmail.com";
    $subject = "Stirfry Reviews! - " . $name;
    
    $txt = " From "
        . $email . ": \r\n" . $message;
    
    $headers = "From: sderacy@stirfryreviews.com" . "\r\n";

    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:index.html");
?>
