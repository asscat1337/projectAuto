<?php

require_once 'connect.php';

$sql1 = mysqli_query($link,"SELECT `users_id` FROM `user` ORDER by `users_id` DESC LIMIT 1");

$res = mysqli_num_rows($sql1);

if($_FILES['document']['error']==0){
    $uploadname=basename($_FILES['document']['name']);
    $destination = "../files/".basename($_FILES['document']['name']);
    move_uploaded_file($_FILES['document']['tmp_name'],$destination);
    mysqli_query($link,"INSERT into `files` (`id`,`filename`,`path`) VALUES (NULL,'$uploadname','$destination')");
    echo "Ok";
}else{
    echo 'error';
}


?>