<?php
session_start();
?>
    <h1>Новые</h1>
    <div class="doctor__content">
    </div>
    <table class="table__result">
        <h1>Список обслуженных пациентов</h1>
       <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Номер телефона</th>
       </tr>
       <?php
        require './php/connect.php';

        $sql = mysqli_query($link,"SELECT * from `arhive`");
        while($row = mysqli_fetch_assoc($sql)){
            echo "<tr data-id=$row[archive_id]><td>$row[fio]</td><td>$row[date]</td><td>$row[telephone]</td><td><button class=dowload><a href=$row[path]>Скачать файл</a></button></td><td>$row[filename]</td></tr>";
        }
        ?>
       </table>
    <script src="./js/doctor.js"></script>