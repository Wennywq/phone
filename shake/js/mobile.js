$(function() {
	//预加载
	$("#loading-mask").hide();
	$("#loading").hide();
})
$(window).load(function() {
	//播放/暂停音乐
	$(".music-icon").click(function() {
		var audio = document.getElementById('music1');
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		$(this).toggleClass("rotate");
		$(this).toggleClass("music-shift");
	})

	//內容高度
	$(".box").css({
		'height': $(".box-bg").height() + "px"
	});
	//成功弹窗
	//$(".mask").fadeIn(200)
	//$(".success-pop").show(200);
	//$(".success-pop").addClass("zoomindown");
	//时间未到弹窗
	//$(".mask").fadeIn(200)
	//$(".nostart-pop").show(200);
	//$(".nostart-pop").addClass("bounceindown");
	//我的礼包弹窗
	$(".twocode-btn").on("click",function(){
	$(".success-pop").removeClass("zoomindown");
	$(".success-pop").hide(200);
    $(".twocode-pop").show(200);	
	$(".twocode-pop").addClass("bounceindown");	
	})
	//关闭弹窗
	$(".close-btn1").on("click",function(){
	$(".mask").fadeOut(200);
	$(".success-pop").hide(200);
	$(".twocode-pop").hide(200);
	$(".success-pop").removeClass("zoomindown");
	$(".twocode-pop").removeClass("bounceindown");
	})
})