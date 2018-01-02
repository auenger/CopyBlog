var reallyDocumentTitle = document.title
const copyText = () => {
	return ['',
		'著作权归作者所有。',
		'商业转载请联系作者获得授权，非商业转载请注明出处。',
		'作者：Auenger',
		'链接：' + location.href,
		'来源：ImCoders.Net',
		''
	].join('\n')
}
// 拼接成html
const buildText = content => {
	return content + copyText()
}

// 拼接成html
const buildHtml = content => {
	return content + copyText()
}

document.addEventListener('copy', e => {
	if(!window.getSelection) return
	const content = window.getSelection().toString()
	e.clipboardData.setData('text/plain', buildText(content))
	e.clipboardData.setData('text/html', buildHtml(content))
	e.preventDefault()
})
document.addEventListener("visibilitychange", function() {
	document.title = document.hidden ? "你妹的，快回来！" : reallyDocumentTitle;
});
window.onscroll = function() {
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
$(document).ready(function() {
	$(".yx-rotaion").yx_rotaion({
		auto: true
	});
	var mySchedule = new Schedule({
		el: '#schedule-box',
		//date: '2018-9-20',
		clickCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextMonthCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextYeayCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevMonthCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevYearCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		}
	});
});
var dic = new Array();

function test(tnum) {
	if(dic.hasOwnProperty(tnum)) {
		layer.close(dic[tnum]);
		layerui_article(tnum);
	} else {
		layerui_article(tnum);
	}
}

function layerui_article(tnum) {
	layer.open({
		type: 2 //此处以iframe举例
			,
		title: '<i class="fa fa-paperclip"></i>  测试一下  很多很多',
		area: [$(window).width() / 2 + 'px', $(window).height() + 'px'],
		shade: 0,
		maxmin: true
			//      ,offset: [ //为了演示，随机坐标
			//        Math.random()*($(window).height()-300)
			//        ,Math.random()*($(window).width()-390)
			//      ] 
			,
		content: 'http://blog.csdn.net/wangdaoyin2010/article/details/70840680',
		end: function() {
				delete dic[tnum]
			}

			//      ,btn: ['继续弹出', '全部关闭'] //只是为了演示
			//      ,yes: function(){
			//        $(that).click(); 
			//      }
			//      ,btn2: function(){
			//        layer.closeAll();
			//      }
			//      
			,
		zIndex: layer.zIndex //重点1
			,
		success: function(layero, index) {
			dic[tnum] = index;
			layer.setTop(layero); //重点2
		}
	});
}