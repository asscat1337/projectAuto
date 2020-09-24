<div class="priem__content">
<table class="table__result">
    <h1>Список обслуженных пациентов</h1>
       <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Номер телефона</th>
        <th>Статус пациента</th>
       </tr>
       <?php
        require './php/connect.php';

        $sql = mysqli_query($link,"SELECT * from `arhive` WHERE `status`='Приемный покой'");
        while($row = mysqli_fetch_assoc($sql)){
            echo "<tr data-id=$row[archive_id]><td>$row[fio]</td><td>$row[date]</td><td>$row[telephone]</td><td>$row[status]</td></tr>";
        }
        ?>
    </table>
</div>
<script src="./js/priemOtd.js"></script>