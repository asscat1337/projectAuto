<?php
session_start();
if(!$_COOKIE){
    header('Location:auth/authPage.php');
}
var_dump($_SESSION);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACKT Pacient System / ГКБ №13 г. Уфа</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>