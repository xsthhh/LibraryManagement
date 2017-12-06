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
        $("#progressbar").css("width","50%");
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
    });

    $("#second-stepback").click(function(){
        //step 1 组件
        $(".select-style").show();
        $("#tip-1").show();
        $("#first-step").show();
        //step 2 组件
        $("#progressbar").css("width","25%");
        // codebar - step 2
    	$("#codebar-1").hide();
   		$("#codebar-2").hide();
    	$("#codebar-3").hide();
   		$("#codebar-4").hide();
   		$("#tip-2").hide();
   		$("#second-stepback").hide();
   		$("#second-step").hide();    
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
        $(".my-table").hide();
        $("#tip-3").hide();
        $("#third-stepback").hide();
        $("#third-step").hide(); 
    });

    $("#third-step").click(function(){
        //step 3 组件
    	$(".my-table").hide();
        $("#tip-3").hide();
        $("#third-stepback").hide();
        $("#third-step").hide();   
   		//step 4 组件
   		$("#progressbar").css("width","100%");
        $("#tip-4").show();
        $("#forth-step").show();
    });
}