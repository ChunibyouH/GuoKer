$(function(){
	
	//最近与一周切换
	var hbtnFlge=false;
	$(".header-nav-btn").click(function(){
		if(!hbtnFlge){
			$(".header-nav-ul").addClass("display_b");
			hbtnFlge=true;
		}else{
			$(".header-nav-ul").removeClass("display_b");
			hbtnFlge=false;
		}
	});
	
	
	//返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$("#back-Top").fadeIn(500);
		}else{
			$("#back-Top").fadeOut(500);
		}
	});
	
	$("#back-Top").click(function(){
		$('body,html').animate({scrollTop:0},1000);
	});
	
	//小组图片放大
	$(".list-img .list-MinImg").click(function(e){
		$(this).parent().find(".list-MinImg").hide();
		var iurl=$(this).attr("src");
		
		var a=$(this).siblings(".list-BigImg");
		a.show();
		a.find("img").attr({src:iurl});
//		$(this).parents().find(".list-BigImg").show();
//		$(this).parents().find("img").attr({src:iurl});
//		e.stopPropagation();
	});
	$(".list-BigImg img").click(function(){
		
		$(this).parents().find(".list-MinImg").show();
		$(this).parents(".list-BigImg").hide();
//		$(this).parents().find(".list-MinImg").show();
		
//		$(this).siblings("img").show();
//		a.find()
	});
	
	
	
	//帖子回复举报
	$(".tie-comment-list-main").hover(function(){
		$(this).find(".report").show();
	},function(){
		$(this).find(".report").hide();
	});
	
	
	
	//帖子右边 ad
	var tieAdImgIndex=1;
	tieAdImg();
	function adImgfun(){
		$(".ad-imgcon a").hide();
		$(".ad-imgcon a").eq(tieAdImgIndex).animate({opacity:"show"},800);
			
		$(".ad-lb-con i").removeClass("ad-lb-bg");
		$(".ad-lb-con i").eq(tieAdImgIndex).addClass("ad-lb-bg");
	}
	function tieAdImg(){
		setInterval(function(){
			adImgfun();
			tieAdImgIndex++;
			if(tieAdImgIndex==3){
				tieAdImgIndex=0;
			}
		},3000);
	}
	$(".ad-lb-con i").hover(function(){
		tieAdImgIndex=$(this).index();
		adImgfun();
		tieAdImgIndex++;
		if(tieAdImgIndex==3){
			tieAdImgIndex=0;
		}
	},function(){
	});
	
	
	///帖子用户名焦点显示信息
	$(".tie-comment-list-main-username").hover(function(e){
//		$(".name-card").removeClass("display_none");
		
		var zb=$(this).offset();//当前元素在页面中的坐标
		var x=zb.left;
		var y=zb.top;
		
		var cardy=$(".name-card").height();//显示的卡片高度
		
		var sby=e.clientY;//鼠标在窗口中Y坐标位置
		var winy=$(window).height();//窗口高度
		
		winy=winy/2;//窗口的一半
		if(sby>=winy){
			y=(y-10)-cardy;
		}else{
			y=y+30;
		}
		$(".name-card").fadeIn(500).css({ position: "absolute", left: x+"px", top: y+"px" });
		
	},function(){
//		$(".name-card").addClass("display_none");
//		$(".name-card")
//		
//		$(".name-card").fadeOut(500);
	});
	
	$("body").click(function(){
		$(".name-card").fadeOut(500);
	});
	$(".name-card").mouseleave(function(){
		$(".name-card").fadeOut(500);
	});
});