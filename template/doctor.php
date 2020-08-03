<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

    <div class="doctor__content">
        <div class="information__patient">
            <?php
                require_once '../php/connect.php';
                $sql = mysqli_query($link,"SELECT * FROM `status`");
                $row = mysqli_fetch_array($sql);
                echo "<select class=status>";
                echo "<option selected=true disabled=disabled>Выберите статус</option>";
                do{
                    echo "<option id=".$row['id'].">".$row['status']."</option>";
                }
                while($row=mysqli_fetch_array($sql));
                echo "</select>";
           ?>
        </div>
        <form  method="post" enctype="multipart/form-data" class="forms">
                <input type="button" value="Отправить" class="btnConfirm">
       </form>
    </div>
    <script src="/js/doctor.js"></script>
</body>
</html>