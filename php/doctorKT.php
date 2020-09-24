<?php
require_once 'connect.php';
$sql = mysqli_query($link,"SELECT * from `user` WHERE `checked`=0 ORDER BY `users_id` DESC LIMIT 1");
$row = mysqli_fetch_array($sql);
    if($row !==null){
        $json = array("fio"=>$row['fio'],"date"=>$row['date'],"telephone"=>$row['telephone']);
        echo json_encode($json);
        // echo "<div class=echo data-id=$row[users_id]>
        //     <div class=fio>$row[fio]</div>
        //     <div class=date>$row[date]</div>
        //     <div class=telephone>$row[telephone]</div>
        //     <form  method=post enctype=multipart/form-data class=forms>
        //     <select class=status>
        //         <option selected=true disabled=disabled>Выберите статус</option>
        //         <option>Здоров</option>
        //         <option>Covid<optiom>
        //         <option>Приемный покой</option>
        //     </select>
        //         <input type=file name=document class=files></input>
        //         <input type=button value=Отправить class=btnConfirm>
        //     </form>
        // </div>";
                mysqli_query($link,"UPDATE `user` SET `checked`=1 WHERE `users_id`=$row[users_id]");
}else{
echo "0";
}


?>