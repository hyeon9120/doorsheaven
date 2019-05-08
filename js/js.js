$(document).ready(function () {


	$(".desk_gnb_text, .desk_gnb_btn").hover(function () {
		$(".all_sub_menu").stop().slideDown(200)
	}, function () {});
	$(".gnb").mouseleave(function () {
		$(".all_sub_menu").stop().slideUp(200);
	});


	$(".mobile_gnb_btn").click(function () {
		$(".mobile_hide_menu").css('right', '0');
	});

	$(".mobile_hide_icon").click(function () {
		$(".mobile_hide_menu").css('right', '-100%');
	});


	$("#pop_btn").click(function () {

		var popUrl = '../html/login_window_popup_02.html';
		var popOption = "width=920px, height=950px, resizable=no, location=no, top=100px, left=500px,  scrollbars=no"

		window.open(popUrl, "상세 결제 내역", popOption);

	});
	$("#pop_btn_01").click(function () {

		var popUrl = '../html/login_window_popup_01.html';
		var popOption = "width=950px, height=950px, resizable=no, location=no, top=100px, left=500px,  scrollbars=no"

		window.open(popUrl, "상세 결제 내역", popOption);

	});

	var icon_onoff = 1;
	$("#icon_first").off().on('click', function () {
		if (icon_onoff) {
			$("#icon_first").css('background', '#919191')
				.css('transform', 'rotate(45deg)');
			$(".ms").css('bottom', '120px');
			$(".hd").css('bottom', '60px');
			icon_onoff = 0;
		} else {
			$("#icon_first").css('background', '#FFCE0C')
				.css('transform', 'rotate(0)');
			$(".ms").css('bottom', '0');
			$(".hd").css('bottom', '0');
			icon_onoff = 1;
		}
	});

});
