var reallyDocumentTitle = document.title
document.addEventListener("visibilitychange", function() {
	document.title = document.hidden ? "你妹的，死回来！" : reallyDocumentTitle;
});
window.onscroll=function(){
	if($(window).scrollTop() > 80) {
		$('.navbar-default').addClass('on');
		$('.navbar-brand').addClass('is');
		$('.navBar').addClass('up');
	} else {
		$('.navbar-default').removeClass('on');
		$('.navbar-brand').removeClass('is');
		$('.navBar').removeClass('up');
	}
}
$(document).ready(function(){
	$(".yx-rotaion").yx_rotaion({auto:true});
});
