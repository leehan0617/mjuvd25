var projectFlag = false;
var projectFlag2 = false;
var memberFlag = false;
var memberFlag2 = false;

$(function() {
	$('#project_arrow').on('click' , function() {
		if(projectFlag) {
			$('.project_category').hide();
		} else {
			$('.project_category').show();
		}
		projectFlag = !projectFlag;
	});

	$('#project_arrow2').on('click' , function() {
		if(projectFlag2) {
			$('.project_category2').hide();
		} else {
			$('.project_category2').show();
		}
		projectFlag2 = !projectFlag2;
	});

	$('#member_arrow').on('click' , function() {
		if(memberFlag) {
			$('.member_div').hide();
		} else {
			$('.member_div').show();
		}

		memberFlag = !memberFlag;
	});

	$('#member_arrow2').on('click' , function() {
		if(memberFlag2) {
			$('.member_div2').hide();
		} else {
			$('.member_div2').show();
		}

		memberFlag2 = !memberFlag2;
	});

	$('.vimeo_link').on('click' , function() {
		location.href = "http://www.naver.com";
	});

	$('.project_category2 , .project_category , .member_div , .member_div2').hide();
})