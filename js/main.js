
/**
 * 작성일 : 2017.09.11
 * 설명 : 동영상 재생 버튼
 */
/*
window.onload = function() {
	var video = document.getElementById('header-video');
	video.addEventListener('click' , function(){
		this.play();
	});
}
*/

/**
 * 작성일 : 2017.09.11
 * 설명 : 헤더 고정 
 */

window.addEventListener('scroll', function(e) {
	var top = (33+ (window.scrollY || document.documentElement.scrollTop));
	document.getElementById("fixed_header").style.marginTop = top.toString()+"px";
});

/**
 * 작성일 : 2017.09.11
 * 설명 : 부드럽게 스크롤  
 */
function runScroll(aa) {
	var agent = navigator.userAgent.toLowerCase();
	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){
		scrollTo(document.documentElement,document.getElementById(aa).offsetTop, 600);
	}else{
		scrollTo(document.body,document.getElementById(aa).offsetTop, 600);
	}
}

function scrollTo(element, to, duration) {
	  if (duration <= 0) return;
	  var difference = to - element.scrollTop;
	  var perTick = difference / duration * 10;
	  setTimeout(function() {
	    element.scrollTop = element.scrollTop + perTick;
	    if (element.scrollTop == to) return;
	    scrollTo(element, to, duration - 10);
	  }, 10);
}

