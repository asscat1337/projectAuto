<?php

require_once 'connect.php';
$inputJSON = file_get_contents('php://input');

if($inputJSON !== null){
    $result = json_decode($inputJSON,true);
    //$res = json_encode($result);
    $arr = array_values($result);
    $fio = $arr[0];
    $date = $arr[1];
    $tel = $arr[2];
}else{
    return false;
}

    $sql = mysqli_query($link,"INSERT into `user`(`users_id`,fio,`date`,`telephone`,`checked`) VALUES(NULL,'".$fio."','".$date."','".$tel."',0)");

?>