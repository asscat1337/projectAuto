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

    // if($path=="" && $status ==""){
    //     die();
    // }
}else{
    return false;
}

$sql = mysqli_query($link,"INSERT into `arhive`(`archive_id`,`fio`,`date`,`telephone`,`filename`,`path`,`status`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status')");
var_dump("INSERT into `archive`(`archive_id`,`fio`,`data`,`telephone`,`filename`,`path`,`status`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status')");

if($status == 1){
    $body = file_get_contents("https://sms.ru/sms/send?api_id=02F05BD2-89CE-4A9A-C66A-963A71D5DEFB&to=7".$tel."&msg=".urlencode("УРа,вы здоровы")."&json=1");
    $json = json_decode($body);
    print_r($json);
}
if($status==2 || $status==3){
    $body = file_get_contents("https://sms.ru/sms/send?api_id=02F05BD2-89CE-4A9A-C66A-963A71D5DEFB&to=7".$tel."&msg=".urlencode("Вам следует пройти к врачу")."&json=1");
    $json = json_decode($body);
    print_r($json); 
}


?>