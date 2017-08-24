
var personTimerId;
window.onload = function() {
	intervalPlay(1);
};

	
google.maps.event.addDomListener(window, 'load', initialize);

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
function animate_image(i, param_id, div_id){

		var id = param_id + i;
		
		var img_src = '../img/' + id + '.jpg';
		var img_div = document.getElementById(div_id);
		
		img_div.src = img_src;
		fadeIn(img_div, 400);
	
}
/**
 * 작성일 : 2017.03.07
 * 함수명 : intervalPlay
 * 작성자 : 송하람
 * 설명 : 타이머 - 돌아가면서 이미지를 뿌린다.
 */
function intervalPlay(start_num) {
	i = start_num;
	
	animate_image(i++, 'person', 'portfolio_img2');
	personTimerId = setInterval(function() {
		//사람사진 돌아가면서
		  if(i < 11){
		      //반복할 실행문
			  animate_image(i, 'person', 'portfolio_img2');
			  i++;
		  }
		  else {
			  i = 1;
		  }
		  
	}, 1800);
}

/**
 * 작성일 : 2017.03.07
 * 함수명 : stop_interval
 * 작성자 : 송하람
 * 설명 :  중지하고 mouse over한 시점부터 다시 시작
 */
function stop_interval(elm_id, type){
	var end;
	var param_id;
	//사람의 숫자
	if (type == 0 ) {
		param_id = 'person';
	}
	var id_num = elm_id.replace(/[^0-9]/g,"");
	clearInterval(personTimerId); 
	
	intervalPlay(id_num);
}
