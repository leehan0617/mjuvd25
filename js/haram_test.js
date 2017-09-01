
var personTimerId;
var portfolioTimerId;

var person_end_num = 29;

var workArr = ["illurstrator1", "illurstrator2", "illurstrator3", "editorial1", "editorial2", "editorial3", "brand1", "brand2", "brand3", "ux1", "ux2", "ux3"];
var classNumArr = {"illurstrator": 0, "editorial": 3, "brand": 6, "ux":9};

window.onload = function() {
//	intervalPlay01(1, person_end_num, 'person');
	intervalPlay02(0);

	var se = document.getElementsByClassName('slideEvent');
	
	for(var i= 0; i < se.length; i++) {
		var  idx = i;
		(function() {
			se[idx].onmouseover = function() {
				var idx = this.id.replace(/[a-z]/gi, "");
				var param_id = this.id.replace(/[0-9]/g,"");
				
				//각 사진의 갯수를 여기서 넣어줬다.
				var end = person_end_num;
				mouse_over(idx, "person");
			},
			se[idx].onmouseout = function() {
				var idx2 = this.id.replace(/[a-z]/gi, "");
				var param_id = this.id.replace(/[0-9]/g,"");
				
				//각 사진의 갯수를 여기서 넣어줬다.
				var end = person_end_num;
				mouse_out(idx2, end , param_id);
			}
		})();
	}
	
	var se2 = document.getElementsByClassName('slideEvent2');
	for(var j= 0; j < se2.length; j++) {
		var  idx2 = j;
		(function() {
			se2[idx2].onmouseover = function() {
				var number = classNumArr[this.id];
//				stop_interval02(number);
				
				port_mouse_over(number);
			}
			, se2[idx2].onmouseout = function() {
				var number = classNumArr[this.id];
				stop_interval02(number);
			}
		})();
	}
	
	var se3 = document.getElementsByClassName('slideEvent3');
	for(var j= 0; j < se3.length; j++) {
		var idx3 = j;
		var stop_num;
		(function() {
			se3[idx3].onmouseover = function() {
				for(var z = 0; z < workArr.length; z++) {
					if (this.id == workArr[z]) {
						stop_num = z;
						break;
					}
				}
				stop_interval02(stop_num);
			}
		})();
	}
	
};

google.maps.event.addDomListener(window, 'load', initialize);
/**
 * 작성일 : 2017.08.24
 * 함수명 : initialize
 * 작성자 : 송하람
 * 설명 : 구글맵연동관련 소스
 */
function initialize() {
    var mapLocation = new google.maps.LatLng('37.5764834', '127.00144539999997'); // 지도에서 가운데로 위치할 위도와 경도
    var markLocation = new google.maps.LatLng('37.5764834', '127.00144539999997'); // 마커가 위치할 위도와 경도
     
    var mapOptions = {
      center: mapLocation, // 지도에서 가운데로 위치할 위도와 경도(변수)
      zoom: 18, // 지도 zoom단계
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), // id: map-canvas, body에 있는 div태그의 id와 같아야 함
        mapOptions);
     
    var size_x = 60; // 마커로 사용할 이미지의 가로 크기
    var size_y = 60; // 마커로 사용할 이미지의 세로 크기
     
    // 마커로 사용할 이미지 주소
    var image = new google.maps.MarkerImage( 'http://www.larva.re.kr/home/img/boximage3.png',
                        new google.maps.Size(size_x, size_y),
                        '',
                        '',
                        new google.maps.Size(size_x, size_y));
     
    var marker;
    marker = new google.maps.Marker({
           position: markLocation, // 마커가 위치할 위도와 경도(변수)
           map: map,
           title: '홍익대 대학로 아트센터' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
    });
 
    google.maps.event.addListener(marker, "click", function() {
    	infowindow.open(map,marker);
    });
}


//javascript - fadein,fadeout
function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "inline-block";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}
/**
 * 작성일 : 2017.08.24
 * 함수명 : animate_image
 * 작성자 : 송하람
 * 설명 : 이미지가 나타나는 함수
 */
function animate_image(param_id, div_id, color){
	var nodes = document.getElementById(param_id).parentNode.parentNode.parentNode.querySelectorAll("ul > li > span");
	for(var i = 0; i < nodes.length; i++) {
		nodes[i].style.color = "black";
	}
	
	document.getElementById(param_id).style.color = color;
	var img_src = '../img/' + param_id + '.jpg';
	var img_div = document.getElementById(div_id);
	
	img_div.src = img_src;
	fadeIn(img_div, 400);
}
/**
 * 작성일 : 2017.08.24
 * 함수명 : intervalPlay01
 * 작성자 : 송하람
 * 설명 : 타이머 - 돌아가면서 이미지를 뿌린다. - 사람
 */
function intervalPlay01(start_num, end_num, img_type) {
	var i = start_num;
	var div_id = img_type + "_img";
	var img_id = img_type + (i++) + "";
	
	//사진 돌아가면서
	animate_image(img_id, div_id, '#ff3333');
	
	personTimerId = setInterval(function() {
      //반복할 실행문
	  if (i == end_num) {
		  img_id  = img_type + (i);
		  i = 1;
	  }
	  else {
		  img_id  = img_type + (i++);
	  }
	  
	  animate_image(img_id, div_id, '#ff3333');
		  
	}, 5000);
	
}
/**
 * 작성일 : 2017.08.24
 * 함수명 : mouse_over
 * 작성자 : 송하람
 * 설명 : mouseover시 호출되는 함수
 *
 */
function mouse_over(id_num, param_id){
	clearInterval(personTimerId); 
	var i = id_num;
	var div_id = "person_img";
	var img_id = "person" + (i++) + "";
	
	//사진 돌아가면서
	animate_image(img_id, div_id, '#ff3333');
}
/**
 * 작성일 : 2017.08.24
 * 함수명 : intervalPlay01
 * 작성자 : 송하람
 * 설명 : 타이머 - 돌아가면서 이미지를 뿌린다. - 사람
 *
 */
function mouse_out(id_num, end_num, param_id){
	var i = id_num*1+1;
	var div_id = "person_img";
	var img_id = param_id + (i++) + "";
	
	//사진 돌아가면서
	animate_image(img_id, div_id, '#ff3333');
	
	personTimerId = setInterval(function() {
      //반복할 실행문
	  if (i == end_num) {
		  img_id  = param_id + (i);
		  i = 1;
	  }
	  else {
		  img_id  = param_id + (i++);
	  }
	  
	  animate_image(img_id, div_id, '#ff3333');
		  
	}, 1800);
}


/**
 * 작성일 : 2017.08.25
 * 함수명 : intervalPlay02
 * 작성자 : 송하람
 * 설명 : 타이머 - 돌아가면서 이미지를 뿌린다. - 작품
 */
function intervalPlay02(start_num) {
	var i = start_num;
	var div_id = "port_img";
	var img_id = workArr[i++] + "";
	var end_num = workArr.length;
	
	//사진 돌아가면서
	animate_image(img_id, div_id, '#0099ff');
	play_work(img_id);
	
	portfolioTimerId = setInterval(function() {
	  //반복할 실행문
		  if (i == (end_num-1)) {
			  img_id  = workArr[i];
			  i = 0;
		  }
		  else {
			  img_id  = workArr[i++];
		  }
	  
		
		play_work(img_id);
		animate_image(img_id, div_id, '#0099ff');
		  
	}, 1800);
	
}
/**
 * 작성일 : 2017.08.25
 * 함수명 : port_mouse_over
 * 작성자 : 송하람
 * 설명 : 마우스오버시 동작 - 작품
 */
function port_mouse_over(start_num){
	var i = start_num;
	var div_id = "port_img";
	var img_id = workArr[i++] + "";
	var end_num = workArr.length;
	
	//사진 돌아가면서
	animate_image(img_id, div_id, '#0099ff');
	play_work(img_id);
}
/**
 * 작성일 : 2017.08.25
 * 함수명 : port_mouse_out
 * 작성자 : 송하람
 * 설명 : 마우스뗄때 동작 - 작품
 */
function port_mouse_out(){
	
}
/**
 * 작성일 : 2017.08.25
 * 함수명 : play_work
 * 작성자 : 송하람
 * 설명 : 포트폴리오 이벤트 
 */
function play_work(img_id) {
	var img_id2 = img_id.replace(/[0-9]/g,"");
	var nodes = document.getElementById(img_id2).parentNode.querySelectorAll(".mouse_over1");
	for(var j = 0; j < nodes.length; j++) {
		 nodes[j].style.color = "black";
	}
	
	var list_nodes = document.querySelectorAll("#port_list ul");
	for(var j = 0; j < list_nodes.length; j++) {
		list_nodes[j].style.display = "none";
	}
	img_id2 = img_id.replace(/[0-9]/g,"");
	var list_id = img_id2 + "_ul";
	var list = document.getElementById(list_id);
	list.style.display="block";
	
	document.getElementById(img_id2).style.color = '#0099ff';
}

/**
 * 작성일 : 2017.08.24
 * 함수명 : stop_interval01
 * 작성자 : 송하람
 * 설명 :  중지하고 mouse over한 시점부터 다시 시작-사람
 */
function stop_interval01(id_num, end, param_id){
	clearInterval(personTimerId); 
	intervalPlay01(id_num, end, param_id);
}

/**
 * 작성일 : 2017.08.24
 * 함수명 : stop_interval02
 * 작성자 : 송하람
 * 설명 :  중지하고 mouse over한 시점부터 다시 시작-작품
 */
function stop_interval02 (id_num) {
	clearInterval(portfolioTimerId); 
	intervalPlay02(id_num);
}
