<?php include('template/header.php');?>
<?php include('template/menu.php');?>
<?php
    if($_SESSION['position']=="Ренген лаборант"){
        include('template/laborant.php');
    } if($_SESSION['position']=="Врач кт"){
        include('template/doctor.php');
    }
    if($_SESSION['position']=="Врач пульмонолог"){
        include('template/doctorPulmo.php');
    }
    if($_SESSION['position']=="admin"){
        include('template/admin.php');
    }
    if($_SESSION['position']=="Оператор"){
        include('template/op.php');
    }
    if($_SESSION['position']=="Приемный покой"){
        include('template/priemOtd.php');
    }
?>
<?php include('template/footer.php');