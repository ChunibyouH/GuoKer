$(function(){
	
	
	//帮助文字轮播
	var indexHelp=0;
	function helpShowNone(){
		setInterval(function(){		
			helpText();
			indexHelp++;
			if(indexHelp==3){
				indexHelp=0;
			}
		},5000);
	}
	helpShowNone();
	function helpText(){
		$(".ask-help ul li").hide();
		$(".ask-help ul li").eq(indexHelp).show();
	}
	$(".ask-help-ud .ask-help-up").click(function(){
		indexHelp--;
		if(indexHelp==-1){
			indexHelp=2;
		}
		helpText();
	});
	$(".ask-help-ud .ask-help-down").click(function(){
		indexHelp++;
		if(indexHelp==3){
			indexHelp=0;
		}
		helpText();
	});
	
	$(".ask-time-tab a").click(function(){
		var index=$(this).index();
		if(index==0){
			$(this).parent().parent().parent().find("ul").addClass("display_none");
			$(this).parent().parent().parent().find("ul").eq(index).removeClass("display_none");
			$(this).parent().find("a").removeClass("ask-time-dq");
			$(this).addClass("ask-time-dq");
		}else{
			$(this).parent().parent().parent().find("ul").addClass("display_none");
			$(this).parent().parent().parent().find("ul").eq(index).removeClass("display_none");
			$(this).parent().find("a").removeClass("ask-time-dq");
			$(this).addClass("ask-time-dq");
		}
	});
	
	
});
