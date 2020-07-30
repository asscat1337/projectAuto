<?php
require_once 'connect.php';



$sql = mysqli_query($link,"SELECT * from `user` LEFT JOIN  `files` ON `user`.`users_id` = `files`.`id`   ORDER by `users_id` DESC LIMIT 1");

while($row = mysqli_fetch_assoc($sql)){
    //$file = file_get_contents($row['path']);
    $array = array('fio'=>$row['fio'],'date'=>$row['date'],'telephone'=>$row['telephone'],'path'=>$row['path'],'filename'=>$row['filename']);
    echo json_encode($array);
}


?>