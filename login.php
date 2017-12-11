<?php 
$link = mysqli_connect('localhost', 'root', '123456', 'php');
if (!$link){
    echo"<script>alert('数据库连接失败！')</script>";
}
else {
    if (isset($_POST['submit'])){
        $query = "select * from userinfo where id = '{$_POST['username']}' and password = '{$_POST['password']}'";
        $result = mysqli_query($link, $query);
        if (mysqli_num_rows($result) == 1){
             header("Location:index.html");
        }
        else{
            echo"<script>alert('账号密码错误!');parent.location.href='login.html'; </script>";
        }
    }
}
?>