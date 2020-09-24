<?php
require_once 'connect.php';

$inputJSON = file_get_contents('php://input');
if($inputJSON !==null){
    $json = json_decode($inputJSON,true);
    $arr = array_values($json);
    $pass = md5(htmlspecialchars(trim($arr[0])));
    $login = htmlspecialchars(trim($arr[1]));
    $fio = htmlspecialchars(trim($arr[2]));
    $pos = htmlspecialchars(trim($arr[3]));
}

$sql = mysqli_query($link,"SELECT `login`,`password` from `doctors` WHERE `login`='$login'");
$row = mysqli_fetch_assoc($sql);
    if($row['login']==$login){
        $array = array('status'=>'Данный пользователь уже существует в системе');
        echo json_encode($array,JSON_UNESCAPED_UNICODE);
        die();
    }else{
        $array = array('status'=>'Пользователь добавлен в систему');
        echo json_encode($array,JSON_UNESCAPED_UNICODE);  
    }

if($pass == "" && $login=="" && $fio==""){
    die();
}else{
    mysqli_query($link,"INSERT INTO `doctors`(`doctor_id`, `Fio`, `login`, `password`, `position`) VALUES(NULL,'".$fio."','".$login."','".$pass."','".$pos."')");

}
