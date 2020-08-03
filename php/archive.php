<?php

require_once 'connect.php';

$inputJSON = file_get_contents('php://input');
if($inputJSON !== null){
    $result = json_decode($inputJSON,true);
    //$res = json_encode($result);
    $arr = array_values($result);
    $fio = $result['data']['fio'];
    $date = $result['data']['date'];
    $tel = $result['data']['telephone'];
    $filename = $result['path']['filename'];
    $path = $result['path']['path'];
    $status = $result['selectedData']['status'];
}else{
    return false;
}

$sql = mysqli_query($link,"INSERT into `arhive`(`archive_id`,`fio`,`date`,`telephone`,`filename`,`path`,`status`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status')");
var_dump("INSERT into `archive`(`archive_id`,`fio`,`data`,`telephone`,`filename`,`path`,`status`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status')");


?>