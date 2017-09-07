window.addEventListener('scroll', function(e) {
	var top = (33+ (window.scrollY || document.documentElement.scrollTop));
	document.getElementById("fixed_header").style.marginTop = top.toString()+"px";
});

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
