<h1>Панель оператора</h1>
    <?php
        require_once('./php/connect.php');
        $sql = mysqli_query($link,"SELECT * from `arhive`");
        echo "<table class=table__result>";
        echo "<th>ФИО</th>";
        echo "<th>Дата рождения</th>";
        while($row = mysqli_fetch_assoc($sql)){
            echo "<tr><td>$row[fio]</td><td>$row[date]</td></tr>";
        }
        echo "</table>";
    ?>
<script src="/js/op.js"></script>