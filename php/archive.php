<?php

require_once 'connect.php';

$inputJSON = file_get_contents('php://input');
if($inputJSON !== null){
    $result = json_decode($inputJSON,true);
    //$res = json_encode($result);
    $arr = array_values($result);
    $fio = $result['usersInfo']['fio'];
    $date = $result['usersInfo']['date'];
    $tel = $result['usersInfo']['telephone'];
    $filename = $result['path']['filename'];
    $path = $result['path']['path'];
    $status = $result['selectedData']['status'];
    $procentCovid = $result['procentCovid']['procent'];
    // if($path=="" && $status ==""){
    //     die();
    // }
}else{
    return false;
}
$sql = mysqli_query($link,"INSERT into `arhive`(`archive_id`,`fio`,`date`,`telephone`,`filename`,`path`,`status`,`checked`,`procent`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status',0,$procentCovid)");
var_dump("INSERT into `archive`(`archive_id`,`fio`,`data`,`telephone`,`filename`,`path`,`status`,`checked`,`procent`) 
VALUES (NULL,'$fio','$date','$tel','$filename','$path','$status',0,$procentCovid)");

if($status =="Здоров"){
    $body = file_get_contents("https://sms.ru/sms/send?api_id=02F05BD2-89CE-4A9A-C66A-963A71D5DEFB&to=7".$tel."&msg=".urlencode("УРа,вы здоровы")."&json=1");
    $json = json_decode($body);
    print_r($json);
}
if($status=="Covid"){
    $body = file_get_contents("https://sms.ru/sms/send?api_id=02F05BD2-89CE-4A9A-C66A-963A71D5DEFB&to=7".$tel."&msg=".urlencode("Вам следует пройти к врачу")."&json=1");
    $json = json_decode($body);
    print_r($json); 
}

// $sql2 = mysqli_fetch_assoc(mysqli_query($link,"SELECT * from `user` WHERE `checked`=0 ORDER BY `users_id` DESC LIMIT 1"));
// $sql3 = mysqli_query($link,"UPDATE `user` SET `checked`=1 WHERE `users_id`=$sql2[users_id]");
//var_dump("UPDATE `user` SET `checked`=1 WHERE `users_id`=$sql2[users_id]");
?>