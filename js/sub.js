var projectFlag = true;
var memberFlag = true;

$(function() {
	$('#project_arrow').on('click' , function() {
		if(projectFlag) {
			$('.project_category').hide();
		} else {
			$('.project_category').show();
		}
		projectFlag = !projectFlag;
	})

	$('#member_arrow').on('click' , function() {
		if(memberFlag) {
			$('.member_div').hide();
		} else {
			$('.member_div').show();
		}

		memberFlag = !memberFlag;
	});
})