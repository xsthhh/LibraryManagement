<?php 
session_start();  //开启session
$link = mysqli_connect('localhost', 'root', '123456', 'php');
if (!$link){
    echo"<script>alert('数据库连接失败！')</script>";
}
else {
    if (isset($_POST['submit'])){
        $query = "select id,password,name from userinfo where id = '{$_POST['username']}' and password = '{$_POST['password']}'";
        $result = mysqli_query($link, $query);
        $Row = mysql_fetch_array($result);
        echo $Row['id'];
        $_SESSION['username'] = $Row['id'];
        if (mysqli_num_rows($result) == 1){
            // header("Location:index.html");
             $url = "home.php" ;
//     echo " <script language = 'javascript' type = 'text/javascript'>";
//     echo "localStorage.setItem(\"username\",'$username'); ";
// //    echo "alert(localStorage.getItem('username'));";
//     echo "window.location.href = '$url';";
//     echo " </script > ";
   // echo "<script>parent.location.href = '$url';</script>";
        }
        else{
             $url = "index.html" ;
            echo "<script>parent.location.href = '$url';</script>";
           // echo"<script>alert('账号密码错误!');parent.location.href='login.html'; </script>";
        }
    }
}
?>