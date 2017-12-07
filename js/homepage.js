/**
* 
* @authors Your Name (you@example.org)
* @date    2017-12-05 21:22:51
* @version $Id$
*/


//搜索tab切换
$(init)
function init() {
	// $(".search-books").click(function) {
	// 	$(".search-books").css("background-color", "#c6341a");
	// 	$(".search-new").css("background-color", "none");
	// 	$(".search-com").css("background-color", "none");
	// 	$(".search-scholar").css("background-color", "none");
	// }

	$(".search-books").click(function() {
		$(".search-items-common").css("background", "transparent");
		$(".search-books").css("background-color", "#c6341a");
	});
	$(".search-news").click(function() {
		$(".search-items-common").css("background", "transparent");
		$(".search-news").css("background-color", "#c6341a");
		//$("button").css("background-color", "#c6341a");
	});
	$(".search-com").click(function() {
		$(".search-items-common").css("background", "transparent");
		$(".search-com").css("background-color", "#c6341a");
	});
	$(".search-scholar").click(function() {
		$(".search-items-common").css("background", "transparent");
		$(".search-scholar").css("background-color", "#c6341a");
	});

}

