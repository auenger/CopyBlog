var reallyDocumentTitle = document.title
document.addEventListener("visibilitychange", function() {
	document.title = document.hidden ? "你妹的，快回来！" : reallyDocumentTitle;
});
window.onscroll=function(){
	if($(window).scrollTop() > 50) {
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
	var mySchedule = new Schedule({
		el: '#schedule-box',
		//date: '2018-9-20',
		clickCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextMonthCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextYeayCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevMonthCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevYearCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		}
	});
});
