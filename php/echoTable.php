<?php

require 'connect.php';

$sql = mysqli_query($link,"SELECT * from `user` WHERE `checked`=1 ORDER BY `users_id` DESC LIMIT 1");
$data = []; 
while($row = mysqli_fetch_assoc($sql)){
$data[] = array_values($row);
$res = json_encode($data);
}
echo $res;


?>