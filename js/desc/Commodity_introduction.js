/*商品介绍页面的js文件*/


//固定头部div，当头部div随着滚轮移动了一定距离的时候固定到顶部去
	$(function(){
		//获取要定位元素距离浏览器顶部的距离
		var navH = $("#Mind_Crumbs").offset().top;   
		/* console.log("navH="+navH);        */
		//滚动条事件       
		$(window).scroll(function(){            
			//获取滚动条的滑动距离           
			var scroH = $(this).scrollTop();  
			/* console.log("scroH="+scroH);        */    
			//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
			if(scroH>=navH){
				$("#Mind_Crumbs").css({"position":"sticky","top":0});
			}else if(scroH<navH){ 
				$("#Mind_Crumbs").css({"position":"static"});
			}   
		})  
	});
	
	
//导航栏处选项卡切换1
$(function(){
	var dh_li=$(".Crumbs_daohang ul li");
	dh_li.click(function(){
		$(this).addClass("daohang_color").siblings().removeClass("daohang_color")
		
		var index=dh_li.index(this);
		$(".Desc_box>div").eq(index).show().siblings().hide()
	})
})


//评论选项卡切换
$(function(){
	var dh_li_button=$(".box_three_div1 ul li button");
	
	dh_li_button.click(function(){
		$(this).addClass("button_color")
		.parent().siblings().children().removeClass("button_color")
		
		var index=dh_li_button.index(this);
		$(".box_three_div2>div").eq(index).show().siblings().hide()
	})
})


//商品下的评分
	layui.use(['rate'], function() {
		var rate = layui.rate;
		//只读
		rate.render({
			elem: '.test9',
			value: 4,
			readonly: true
		});
	});


//商品评论区的图片展示
$(function(){
		
	$(".tm-m-photos").commentImg({
			activeClass: 'tm-current', //缩略图当前状态class,默认'current'     
			nextButton: '.tm-m-photo-viewer-navright', //向后翻页按钮，默认'.next'    
			prevButton: '.tm-m-photo-viewer-navleft', //向前翻页按钮，默认'.prev'    
			imgNavBox: '.tm-m-photos-thumb', //缩略图容器，默认'.photos-thumb'    
			imgViewBox: '.tm-m-photo-viewer' //浏览图容器，默认'.photo-viewer' 
	});
	
})


