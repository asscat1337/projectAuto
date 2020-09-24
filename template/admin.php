<?php
session_start();
?>
<body>
    <h1>Панель администратора</h1>
    <div class="container">
        <form action="" method="post" class="form">
        <h1>Форма добавления пользователя</h1>
            <input type="text" name="fio" class=fio>
            <input type="text" name="login" class="login">
            <input type="password" name="pass" class="pass">
            <select name="" id="" class="selected">
                <option selected=true disabled=disabled>Выберите статус</option>
                <option>Врач кт</option>
                <option>Врач пульмонолог</option>
                <option>Ренген лаборант</option>
                <option>Приемный покой</option>
                <option>Оператор</option>
            </select>
            <input type="submit" value="Отправить" class="btn">
        </form>
    </div>

    <?php
    require ('./php/connect.php');
    $sql = mysqli_query($link,"SELECT * from `doctors`");

    echo "<table class=table__result>";
    echo "<th>ФИО</th>";
    echo "<th>Логин</th>";
    while($row = mysqli_fetch_assoc($sql)){
        echo "<tr><td>$row[Fio]</td><td>$row[login]</td></tr>";
    }
    ?>

<script src="/js/admin.js"></script>