<?php
session_id($_SESSION['position']);
if(!session_id($_SESSION['login'])=="Ренген лаборант"){
    header("Location:/auth/authPage.php");
}

?>
    <section class="content">
        <div class="form">
            <h1>Принять нового пациента</h1>
            <form class="forms" method="post" enctype="multipart/form-data">
                <input type="text" name="FIO1" placeholder="ФИО полностью" class="FIO" required>
                <input type="date" name="date1" placeholder="Дата рождения" class="dates" required>
                <div class="telephoneCheck">
                    <input type="tel" placeholder="Мобильный телефон" name="tel1" class="tele" required>
                </div>
                <input type="submit" value="Добавить" class="btnOK">
            </form>
        </div>
    </section>
    <script src="./js/main.js"></script>
<?php include ('template/footer.php');?>