<?php

require_once "config.php";
$loginURL = $gClient->createAuthURL();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Google+Sans:400|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons">
</head>

<body style="background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 5%,
    rgb(0, 0, 0) 100%
  ),
  url('../img/login.jpg');
  height: 100vh;">
    <nav>
        <div class="navigation gutter">
            <a href="#" class="navigation--logo fromLeft">Tourizto<span style="color: #e74315">.</span></a>
            <!-- <a href="#" class="navigation--menu fromRight">
                        <img src="img/menu-button.png" alt="">
                    </a> -->
            <ul class="navigation--list">
                <li><a href="#">Home</a></li>

            </ul>
        </div>
    </nav>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-form">
                    <div class="social_login">
                        <a href="#" class="social_login--wrap _facebook"><i
                                class="fab fa-facebook-f social_login--icons "></i>
                            Continue
                            with
                            Facebook</a>
                        <button type="button" onclick="window.location='<?php echo $loginURL; ?>'" class="social_login--wrap _google" >
                            <img src="https://img.icons8.com/color/20/000000/google-logo.png"
                                class="social_login--icons">Continue
                            with
                            Google</button>
                    </div>
                    <div class="or">
                        <hr class="bar" />
                        <span>OR</span>
                        <hr class="bar" />
                    </div>
                    <a href="#" class="__signup"><i class="far fa-envelope"></i> Sign up
                        with Email</a>
                    <hr class="_gap">
                    <span class="sign_up">Already have a Tourizto account?</span><a href="#" class="sign_up--link">Sign
                        in</a>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/7fdc918442.js"></script>
</body>

</html>