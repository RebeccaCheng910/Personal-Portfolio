<?php 
if(isset($_POST['submit'])){

    $to = "rebeccacheng910@hotmail.com"; // this is your Email address
    $from = "From: Rebecca Cheng";
    
    $name = $_POST['your_name'];
    $email = $_POST['your-email'];
    $message = $_POST['your-message'];

    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    
    $body1 = "From: $name\n E-Mail: $email\n Message:\n $message";
    $body2 = "Here is a copy of your message: \n \n From: $name\n E-Mail: $email\n Message:\n $message";

    if (mail ($to, $subject, $body1, $from) && mail ($email, $subject2, $body2, $from)) { 
        echo '<p>Contact form successfully submitted. Thank you, I will get back to you soon!</p>';
    } else { 
        echo 'There was an error while submitting the form. Please try again later</p>'; 
    }
}
?>