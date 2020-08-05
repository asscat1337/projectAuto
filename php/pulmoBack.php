<?php

require_once 'connect.php';


$sql = mysqli_query($link,"SELECT * FROM `arhive` ORDER BY `archive_id` DESC LIMIT 1");
while($row = mysqli_fetch_assoc($sql)){
    if($row['status']==3 || $row['status']==2 && $row['status']){
        $array = array('fio'=>$row['fio'],'telephone'=>$row['telephone'],'date'=>$row['date'],'filename'=>$row['filename'],'path'=>$row['path'],'status'=>$row['status']);
        echo json_encode($array);
    }
    else if($row['status']==1){
        $array = array('status'=>$row['status']);
        echo json_encode($array);
    }
}


?>