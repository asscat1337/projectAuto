<?php

require_once 'connect.php';
$inputJSON = file_get_contents('php://input');
$dateAdded = date("d.m.y");
if($inputJSON !== null){
    $result = json_decode($inputJSON,true);
    //$res = json_encode($result);
    $arr = array_values($result);
    $fio = $arr[0];
    $date = $arr[1];
    $tel = $arr[2];
    if($fio=="" && $date=="" && $tel==""){
        die();
    }
}else{
    return false;
}

    $sql = mysqli_query($link,"INSERT into `user`(`users_id`,fio,`date`,`telephone`,`checked`,`dateAdded`) VALUES(NULL,'".$fio."','".$date."','".$tel."',0,'".$dateAdded."')");
    var_dump("INSERT into `user`(`users_id`,fio,`date`,`telephone`,`checked`,`dateAdded`) VALUES(NULL,'".$fio."','".$date."','".$tel."',0,'".$dateAdded."')");

?>