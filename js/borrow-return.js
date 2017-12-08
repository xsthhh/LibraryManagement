$(init)
function init() {
	// progressbar
	// $("#progressbar").css("width","70%");

	//select - step 1
    // $(".select-style").hide();

    // codebar - step 2
    $("#codebar-1").hide();
    $("#codebar-2").hide();
    $("#codebar-3").hide();
    $("#codebar-4").hide();
    //table - step 3
    $(".my-table").hide();

    // tips
    // $("#tip-1").hide();
    $("#tip-2").hide();
    $("#tip-3").hide();
    $("#tip-4").hide();
    //buttons
    // $("#first-step").hide();
    $("#second-stepback").hide();
    $("#second-step").hide();
    $("#third-stepback").hide();
    $("#third-step").hide();
    $("#forth-step").hide();

    $("#first-step").click(function(){
        //step 1 组件
        $(".select-style").hide();
        $("#tip-1").hide();
        $("#first-step").hide();
        //step 2 组件
        // borrow
        $("#progressbar").css("width","50%");
        $("#progressbar").text("Step 2 : 输入图书条形码");
        $("#next-step").text("Next Step : 确认借阅图书");
        // return
        $("#progressbar-return").css("width","50%");
        $("#progressbar-return").text("Step 2 : 输入图书条形码");
        $("#next-step-return").text("Next Step : 确认归还图书");
        //renew
        $("#progressbar-renew").css("width","50%");
        $("#progressbar-renew").text("Step 2 : 输入图书条形码");
        $("#next-step-renew").text("Next Step : 确认续借图书");
        // codebar - step 2
         //获取step1中选择项
        var index = $('option:selected', '#selectbar').index(); 
        if(index == 0)
    	   $("#codebar-1").show();
    	if(index == 1) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    	}
    	else if(index == 2) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    		$("#codebar-3").show();
    	}
    	else if(index == 3) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    	    $("#codebar-3").show();
   		    $("#codebar-4").show();
    	}
   		
   		$("#tip-2").show();
   		$("#second-stepback").show();
   		$("#second-step").show();   

        $("#tip_num").show(); 
    });

    $("#second-stepback").click(function(){
        //step 1 组件
        $(".select-style").show();
        $("#tip-1").show();
        $("#first-step").show();
        //step 2 组件
        $("#progressbar").css("width","25%");
        $("#progressbar").text("Step 1 : 选择借阅数量");
        $("#next-step").text("Next Step : 输入图书条形码");
         // return
        $("#progressbar-return").css("width","25%");
        $("#progressbar-return").text("Step 1 : 选择归还数量");
        $("#next-step-return").text("Next Step : 输入图书条形码");
        //renew
        $("#progressbar-renew").css("width","25%");
        $("#progressbar-renew").text("Step 1 : 选择续借数量");
        $("#next-step-renew").text("Next Step : 输入图书条形码");

        // codebar - step 2
    	$("#codebar-1").hide();
   		$("#codebar-2").hide();
    	$("#codebar-3").hide();
   		$("#codebar-4").hide();
   		$("#tip-2").hide();
   		$("#second-stepback").hide();
   		$("#second-step").hide(); 
        //使文本框中值清空
        $("#codebar-input-1").val("");
        $("#book_name1").hide();
        $("#codebar-input-2").val("");
        $("#book_name2").hide();
        $("#codebar-input-3").val("");
        $("#book_name3").hide();
        $("#codebar-input-4").val("");  
        $("#book_name4").hide();  

        $("#tip_num").show();
    });

    $("#second-step").click(function(){
        //step 2 组件
        // codebar - step 2
    	$("#codebar-1").hide();
   		$("#codebar-2").hide();
    	$("#codebar-3").hide();
   		$("#codebar-4").hide();
   		$("#tip-2").hide();
   		$("#second-stepback").hide();
   		$("#second-step").hide();   
   		//step 3 组件
   		$("#progressbar").css("width","75%");
        $("#progressbar").text("Step 3 : 确认借阅图书");
        $("#next-step").text("Next Step : 完成借阅！");
         // return
        $("#progressbar-return").css("width","75%");
        $("#progressbar-return").text("Step 3 : 确认归还图书");
        $("#next-step-return").text("Next Step : 完成还书！");
        //renew
        $("#progressbar-renew").css("width","75%");
        $("#progressbar-renew").text("Step 3 : 确认续借图书");
        $("#next-step-renew").text("Next Step : 完成续借！");
        $(".my-table").show();
        //table
       var index = $('option:selected', '#selectbar').index(); 
        if(index == 0)
    	   $("#msg-1").show();
    	    $("#msg-2").hide();
    	    $("#msg-3").hide();
   		    $("#msg-4").hide();
    	if(index == 1) {
    		$("#msg-1").show();
    		$("#msg-2").show();
    		$("#msg-3").hide();
   		    $("#msg-4").hide();
    	}
    	else if(index == 2) {
    		$("#msg-1").show();
    		$("#msg-2").show();
    		$("#msg-3").show();
    		$("#msg-4").hide();
    	}
    	else if(index == 3) {
    		$("#msg-1").show();
    		$("#msg-2").show();
    	    $("#msg-3").show();
   		    $("#msg-4").show();
    	}

        $("#tip-3").show();
        $("#third-stepback").show();
        $("#third-step").show();
        $("#tip_num").show();
    });

    $("#third-stepback").click(function(){
        //step 2 组件
        // codebar - step 2
        var index = $('option:selected', '#selectbar').index(); 
        if(index == 0)
    	   $("#codebar-1").show();
    	    $("#codebar-2").hide();
    	    $("#codebar-3").hide();
   		    $("#codebar-4").hide();
    	if(index == 1) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    		$("#codebar-3").hide();
   		    $("#codebar-4").hide();
    	}
    	else if(index == 2) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    		$("#codebar-3").show();
    		$("#codebar-4").hide();
    	}
    	else if(index == 3) {
    		$("#codebar-1").show();
    		$("#codebar-2").show();
    	    $("#codebar-3").show();
   		    $("#codebar-4").show();
    	}
   		$("#tip-2").show();
   		$("#second-stepback").show();
   		$("#second-step").show();  
   		//step 3 组件
   		$("#progressbar").css("width","50%");
        $("#progressbar").text("Step 2 : 输入图书条形码");
        $("#next-step").text("Next Step : 确认借阅图书");
         // return
        $("#progressbar-return").css("width","50%");
        $("#progressbar-return").text("Step 2 : 输入图书条形码");
        $("#next-step-return").text("Next Step : 确认归还图书");
        //renew
        $("#progressbar-renew").css("width","50%");
        $("#progressbar-renew").text("Step 2 : 输入图书条形码");
        $("#next-step-renew").text("Next Step : 确认续借图书");

        $(".my-table").hide();
        $("#tip-3").hide();
        $("#third-stepback").hide();
        $("#third-step").hide(); 
        $("#tip_num").show();
    });

    $("#third-step").click(function(){
        //step 3 组件
    	$(".my-table").hide();
        $("#tip-3").hide();
        $("#third-stepback").hide();
        $("#third-step").hide();   
   		//step 4 组件
   		$("#progressbar").css("width","100%");
        $("#progressbar").text("Step 4 : 完成借阅！");
        $("#next-step").text("");
         // return
        $("#progressbar-return").css("width","100%");
        $("#progressbar-return").text("Step 4 : 完成还书！");
        $("#next-step-return").text("");
        //renew
        $("#progressbar-renew").css("width","100%");
        $("#progressbar-renew").text("Step 4 : 完成续借！");
        $("#next-step-renew").text("");
        $("#tip-4").show();
        $("#forth-step").show();
        $("#tip_num").hide();
    });

    //输入正确的条形编码后出现书名和作者提示 
    $("#book_name1").hide();
    $("#book_name2").hide();
    $("#book_name3").hide();
    $("#book_name4").hide();
    $("#codebar-input-1").bind('input propertychange',function() {
         if($(this).val()=="978-7-115-43978-9") {
            $("#book_name1").show();
         }
         else {
            $("#book_name1").hide();
         }
    });
    $("#codebar-input-2").bind('input propertychange',function() {
         if($(this).val()=="978-7-115-43978-9") {
            $("#book_name2").show();
         }
         else {
            $("#book_name2").hide();
         }
    });
    $("#codebar-input-3").bind('input propertychange',function() {
         if($(this).val()=="978-7-115-43978-9") {
            $("#book_name3").show();
         }
         else {
            $("#book_name3").hide();
         }
    });
    $("#codebar-input-4").bind('input propertychange',function() {
         if($(this).val()=="978-7-115-43978-9") {
            $("#book_name4").show();
         }
         else {
            $("#book_name4").hide();
         }
    });
}