<?php

require_once 'connect.php';

$data = [];
$sql = mysqli_query($link,"SELECT * FROM `arhive` ORDER BY `archive_id` DESC LIMIT 1");
$row = mysqli_fetch_array($sql);
    if($row['status']=="Приемный покой" && $row['checked']==0){
        mysqli_query($link,"UPDATE `arhive` SET `checked`=1 WHERE `archive_id`=$row[archive_id]");
        $back = "
        <div class=echo>
             <div class=fio>$row[fio]</div>
             <div class=date>$row[date]</date>
             <div class=telephone>$row[telephone]</div>
             <button class=btnUpload><a dowload href=$row[path]>Загрузить файл</a></button>
        </div>";
        echo $back;
    }else{
        echo "0";
    }
?>