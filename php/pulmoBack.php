<?php

require_once 'connect.php';


$sql = mysqli_query($link,"SELECT * FROM `arhive` ORDER BY `archive_id` DESC LIMIT 1");

while($row = mysqli_fetch_assoc($sql)){
    $array = array('fio'=>$row['fio'],'telephone'=>$row['telephone'],'date'=>$row['date']);
    echo json_encode($array);
}


?>