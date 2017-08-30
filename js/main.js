/* main.js */

//상단 헤더 고정
window.addEventListener('scroll', function(e) {
	var top = (33+ (window.scrollY || document.documentElement.scrollTop));
	document.getElementById("fixed_header").style.marginTop = top.toString()+"px";
});