<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>图书馆-个人中心</title>
<meta name="description" content="图书馆">
<meta name="keywords" content="图书馆">
<link rel="stylesheet" href="css/home.css">
<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">

<script type="text/javascript"  src="lib/jquery/jquery.js"></script>
<script type="text/javascript"  src="lib/bootstrap/js/bootstrap.js"></script>
<script type="text/javascript"  src="js/homepage.js"></script>


</head>
<body>
<!-- 导航栏 -->
<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
    	
    	<div class="nav navbar-nav">
       		<a class="navbar-brand" href="#"><img class="home-logo" src="img/logo.png"></a>
    	</div>
    	<div class="nav navbar-nav">
    		<a class="navbar-brand" href="#">
    			<div class="home-head-china-div"><font class="home-head-china">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</font></div>
    			<font class="home-head-english">HOMEPAGE</font>
    		</a>
    	</div>
    	<div class="nav navbar-nav">
    		<a class="navbar-brand" href="#">
    			<div class="home-head-china-div"><font class="home-head-china">个人信息</font></div>
    			<font class="home-head-english">PERSONAL</font>
    		</a>
    	</div>
    	<div class="nav navbar-nav">
    		<a class="navbar-brand" href="#">
    			<div class="home-head-china-div"><font class="home-head-china">资&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源</font></div>
    			<font class="home-head-english">RESOURCES</font>
    		</a>
    	</div>
    	<div class="nav navbar-nav">
    		<a class="navbar-brand" href="#">
    			<div class="home-head-china-div"><font class="home-head-china">概&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;况</font></div>
    			<div><font class="home-head-english">OVERVIEW</font></div>
    		</a>
    	</div>
    	<div class="nav navbar-nav">
    		<a class="navbar-brand" href="#">
    			<div class="home-head-china-div"><font class="home-head-china">服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</font></div>
    			<font class="home-head-english">SERVICES</font>
    		</a>
    	</div>

		<div class="nav navbar-nav head-login">
    	<div class="home-head-search">
        	<form action="" id="head-search-title-form">
         		<input type="text" id="head-search-text"  name="query" placeholder="站内搜索" maxlength="50" />
         		<input type="submit" id="head-search-i" name="" value="&nbsp;" >
         		<a href="" class="head-search-a"><i class="fa fa-search"></i></a>
        	</form> 
    	</div>
        <div class="head-login-way">
            <a href="#" class="head-weixin"><img src="img/wechat.png">
            </a>
            <a href="" class="head-weibo"><img src="img/weibo.png">
            </a>
            <a href="" class="head-else">其他</a>

        </div>
        </div>

    	<div class="nav navbar-nav home-mylibrary">
    			<div class="head-mylibrary-china head-mylibrary-width-full">我的图书馆</div>
    			<div class="head-mylibrary-english head-mylibrary-width-full">MY LIBRARY</font>
<<<<<<< HEAD:home.html
    			<div class="head-hello-login head-mylibrary-width-full" id="login-btn" onclick="window.location.href='login.html'">您好，请登录！</div>
=======
    			<div class="head-hello-login head-mylibrary-width-full">您好，请登录！
 <?php
  session_start();
  //if(echo $_SESSION['username']=='2015210405039')
  	echo $_SESSION['username']
  ?>
    			</div>
    			<!-- <div class="head-secret-query head-mylibrary-width-full">
    				<div class="head-forget-secret head-mylibrary-width-full" id="register-btn">账号注册</div>
    				<div class="head-query-num head-mylibrary-width-full" id="login-btn" onclick="window.location.href='login.html'">账号登录</div>
    			</div> -->
>>>>>>> ca96dea3f668f7a1cef1352740359c992266c1b1:home.php
    	</div>
    </div>
</nav>

<div class="home-serach">
	<div class="search-items">
		<button class="search-books search-items-common">找图书</button>
		<button class="search-news search-items-common">找期刊</button>
		<button class="search-com search-items-common">综合检索</button>
		<button class="search-scholar search-items-common">检索学术</button>
	</div>
	<div>
		<form action="" class="search-input">
			<input type="text"  name="query" placeholder="输入关键字"  />
			<input type="submit" class="search-input-select" name="" value="检索" >
		</form> 
	</div>
</div>



<div class="home-center">
	<div class="container">
		<div class="carousel slide" id="slidershow">
			<ol class="carousel-indicators">
				<li class="active" data-target="#slidershow" data-slide-to="0"></li>
				<li data-target="#slidershow" data-slide-to="1"></li>
				<li data-target="#slidershow" data-slide-to="2"></li>    
			</ol>
			<div class="carousel-inner">
				<div class="item active">
					<img src="img/light.png" alt="" class="carousel-img"/>      
				</div>    
				<div class="item">
					<img src="img/climb.jpg" alt="" class="carousel-img"/>      
				</div>  
				<div class="item">
					<img src="img/book.png" alt="" class="carousel-img"/>      
				</div>   
			</div>
			<a href="#slidershow" data-slide="prev" class="" role="button"></a> 
		</div>
	</div>
	<div class="home-center-right">
	
		<ul class="home-group1_2">
			<li class="color1">
				<A href="borrow.html" target="_blank">
					<img src="img/bro.jpg" class="carousel-fun">
				</A>
			</li>

			<li class="color2">
				<A href="renew.html" target="_blank">
					<img src="img/re.jpg" class="carousel-fun">
				</A>
			</li>

			<li class="color3">
				<A href="return.html" target="_blank">
					<img src="img/back.png" class="carousel-fun">
				</A>
			</li>

			<li class="color4">
				<A href="rule.html" target="_blank">
					<img src="img/guide.jpg" class="carousel-fun">
				</A>
			</li>

		</ul>
	</div>
</div>
<div class="home-bottom">
	<div class="group5_2 buttom-content" >
		<div class="title5_2 buttom-title" >相关网站</div>
		<ul class="divs5_2" >

			<li  id="0_xg"><a id="0_a_divs5"   href="http://lib.hznu.edu.cn/" target="_blank">杭州师范大学图书馆</a></li>
			<li  id="1_xg"><a id="1_a_divs5"   href="" target="_blank">浙江网络图书馆</a></li>
			<li  id="2_xg"><a id="2_a_divs5"   href="" target="_blank">浙江大学图书馆</a></li>
			<li  id="3_xg"><a id="3_a_divs5"   href="" target="_blank">浙江古籍保护网</a></li>
			<li  id="4_xg"><a id="4_a_divs5"   href="" target="_blank">浙江工业大学图书馆</a></li>
			<li  id="5_xg"><a id="5_a_divs5"   href="">浙江省图书馆学会</a></li>

		</ul>
	</div>

	<div class="group5_3 buttom-content"  id="group5_3_div">
		<div class="title5_3 buttom-title"  >友情链接</div>
		<ul class="divs5_3"  >
			<li><a href="http://lib.hznu.edu.cn/" target="_blank">杭州师范大学图书馆</a></li>
			<li><a href="http://www.nlc.cn/" target="_blank">国家图书馆</a></li>
			<li><a href="http://www.ndlib.cn/" target="_blank">国家数字图书馆推广工程</a></li>
			<li><a href="http://www.ndcnc.gov.cn/" target="_blank">全国文化信息资源共享工程</a></li>
			<li><a href="http://www.goethe.de/ins/cn/zh/pek.html" target="_blank">歌德学院北京分院</a></li>
			<li><a href="http://ndzyjs.zjlib.cn:8040/nlcdemo/index.html" target="_blank">网络书香资源检索平台</a></li>
		</ul>
	</div>
	<div class="group5_4 buttom-content">
		<div class="title5_4 buttom-title">联系我们</div>
		<ul class="divs5_4">

			<li><a >投诉建议：xxxxxxxx</a></li> 
			<li><a href="mailto:directorch@vip.sina.com">馆长信箱：xxxxx@xxxx</a></li>
			<li><a href="http://www.zjlib.cn/yibanwt/index.htm?cid=y" target="_blank">咨询电话：xxxxxxxxx（服务时间详见电话咨询）</a></li>
			<li><a href="mailto:zjdh@zjlib.cn">咨询信箱：xxxx@xxxxxxx</a></li>
			<li><a >语音服务：xxxxxxxxx（24小时）</a></li>
		</ul>
	</div>
</div>
</body>
</html>