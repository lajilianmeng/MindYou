/*商品详情页面的轮播图*/
$(function(){
	layui.use(['carousel', 'form'], function(){
		  var carousel = layui.carousel
		  ,form = layui.form;

			//常规轮播
		  carousel.render({
		    elem: '#test1'
		    ,arrow: 'always'
		    ,width:'560px'
		    ,height:'560px'
		    ,interval:4000
		  });
	});
})


/*商品详情页面左侧轮播图固定不动*/
$(function(){ 
		//获取要定位元素距离浏览器顶部的距离
		var navH1 = $("#lunbo").offset().top;  
		var navH2 =$("#Goods_price").offset().top;
		/* console.log("navH="+navH);        */
		//滚动条事件       
		$(window).scroll(function(){            
			//获取滚动条的滑动距离           
			var scroH1 = $(this).scrollTop();  
			/* console.log("scroH="+scroH);        */    
			//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
			if(scroH1>=navH1 && scroH1+580<=navH2){
				$("#lunbo").css({"position":"fixed","top":100});
			}else{ 
				$("#lunbo").css({"position":"relative","top":0});
			}   
		})  
	});


$(function(){
	var li=$(".box2_ul li");
	li.click(function(){
		$(this).addClass("box2_back")
		.siblings().removeClass("box2_back");
	})
	
	var li01=$(".box3_ul li");
	li01.click(function(){
		$(this).addClass("box3_back")
		.siblings().removeClass("box3_back");
	})
	
	var li02=$(".box4_ul li");
	li02.click(function(){
		$(this).addClass("box4_back")
		.siblings().removeClass("box4_back");
	})
	
})
