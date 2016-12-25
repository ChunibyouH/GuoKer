$(function(){
	
	$(".nav_home_menu").hover(function(){
//		alert(1);
		$(this).find(".nav_home_menuList").slideDown(200);
	},function(){
//		alert(2);
		$(this).find(".nav_home_menuList").slideUp(200);
	});
	
	var flagImg=1;
	var lastImg=0;
	var endImg=false;
	function focusImg(){//轮播图
		setInterval(function(){
			if(endImg){
				return;
			}
			$(".focus_img a").eq(lastImg).addClass("dsplay_none");
			$(".focus_title li").eq(lastImg).addClass("dsplay_none");
			$(".focus_tge li").eq(lastImg).removeClass("the_tge_bg");
			
			$(".focus_img a").eq(flagImg).removeClass("dsplay_none");
			$(".focus_title li").eq(flagImg).removeClass("dsplay_none");
			$(".focus_tge li").eq(flagImg).addClass("the_tge_bg");
			flagImg++;
			if(flagImg==5){
				flagImg=0;
			}
			lastImg=flagImg-1;
			if(lastImg==-1){
				lastImg=4;
			}
		},3000);
	}
	focusImg();
	
	$(".focus_tge li").hover(function(){
		endImg=true;
		flagImg=$(this).index();
		
			$(".focus_img a").eq(lastImg).addClass("dsplay_none");
			$(".focus_title li").eq(lastImg).addClass("dsplay_none");
			$(".focus_tge li").eq(lastImg).removeClass("the_tge_bg");
			
			$(".focus_img a").eq(flagImg).removeClass("dsplay_none");
			$(".focus_title li").eq(flagImg).removeClass("dsplay_none");
			$(".focus_tge li").eq(flagImg).addClass("the_tge_bg");
		lastImg=flagImg;
	},function(){
		endImg=false;
	});
	$(".focus_img").hover(function(){
		endImg=true;
	},function(){
		endImg=false;
	});
	
});
