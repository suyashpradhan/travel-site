<?php 
    session_start();
    require_once 'googleAPI/src/Google/autoload.php';
    $gClient = new Google_Client();
    $gClient->setClientId("833652808547-0jmklvi33aa9rkd0poj0qcqvp3che0hk.apps.googleusercontent.com");
    $gClient->setClientSecret("rcGc8epVf73HaDROeswspeXw");
    $gClient->setApplicationName("CPI Login");
    $gClient->addScope("https://www.googleapis.com/auth/plus.login","https://www.googleapis.com/auth/userinfo.email");
?>