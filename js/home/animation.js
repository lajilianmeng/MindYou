/*首页轮播图的js*/
	layui.use('carousel', function(){
	  var carousel = layui.carousel;
	  //建造实例
	  carousel.render({
	    elem: '#test1'
	    ,width: '100%' //设置容器宽度
	    ,arrow: 'hover' //悬停的时候显示
	    ,anim: 'updown' //切换动画方式
	   ,height:'100%'	//设置高度
	  });
	});
	

//无缝滚动
(function() {
    var $next = $('.Seckill_next'),
    $prev = $('.Seckill_prev'),
    $ul = $('.Seckill_show ul'),
    $li = $('.Seckill_show ul li'),
    $wrap = $('.Seckill_wrap'),
    clickTime = 0,
    timer = null,
    index = 0;
    var jg=217;
    $next.click(function() {
        if (new Date() - clickTime > 500) {
            clickTime = new Date();
            index++;
            $ul.stop().animate({
                marginLeft: -jg * index + 'px'
            },
            50,
            function() {
                if (index == 5) {
                    $ul.css('marginLeft', 0);
                    index = 0;
                }
            });
        }
    });

    $prev.click(function() {
        if (new Date() - clickTime > 500) {
            clickTime = new Date();
            if (index == 0) {
                $ul.css('marginLeft', -jg * 4 + 'px');
                index = 5;
            };
            index--;
            $ul.stop().animate({
                marginLeft: index * -jg + 'px'
            },
            500);
        }
    });

    $wrap.hover(function() {
        clearInterval(timer);
    },
    function() {
        auto();
    });

    auto();
    function auto() {
        timer = setInterval(function() {
            index++;
            $ul.stop().animate({
                marginLeft: -jg * index + 'px'
            },
            500,
            function() {
                if (index == 5) {
                    $ul.css('marginLeft', 0);
                    index = 0;
                }
            });
        },
        5000);
    }
})();

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
	
//固定头部div，当头部div随着滚轮移动了一定距离的时候固定到顶部去
	$(function(){ 
		//获取要定位元素距离浏览器顶部的距离
		var navH = $("#Mind_head").offset().top;   
		/* console.log("navH="+navH);        */
		//滚动条事件       
		$(window).scroll(function(){            
			//获取滚动条的滑动距离           
			var scroH = $(this).scrollTop();  
			/* console.log("scroH="+scroH);        */    
			//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
			if(scroH>=navH){
				$("#Mind_head").css({"position":"sticky","top":0});
			}else if(scroH<navH){ 
				$("#Mind_head").css({"position":"static"});
			}   
		})  
	});

