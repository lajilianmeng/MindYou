/*商品评论下的js文件*/

/*评论下的图片点击js效果代码开始*/
(function($){
	$.fn.commentImg = function(options){
		var defaults = {
			activeClass: 'current',
        	nextButton: '.next',
        	prevButton: '.prev',
			imgNavBox:'.photos-thumb',
			imgViewBox:'.photo-viewer'
		};
		var opts = $.extend({},defaults, options);

		this.each(function(){
			var _this =$(this),
				imgNav =_this.find(opts.imgNavBox).children(),
				imgViewBox =_this.find(opts.imgViewBox),
				prevBtn = _this.find(opts.prevButton),
				nextBtn = _this.find(opts.nextButton),
				src = '',
				img = new Image();
				
			function setViewImg(viewSrc){
				img.src = viewSrc;
	            img.onload = function () {
	                var imageWidth = img.width;
	                var imageHeight = img.height;	                
	                imgViewBox.show(0,function(){
	                	$(this).css({ "width": imageWidth, "height": imageHeight }).find("img").attr('src', src);
	                });					
	            }	            
			}
			
			imgNav.on("click",function(){
				$(this).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);			
				if($(this).hasClass(opts.activeClass)){
					src = $(this).attr('data-src');	
		            setViewImg(src);
				}else{
					imgViewBox.css({ "width": 0, "height": 0 }).hide();
				}
			});
			
			imgViewBox.on("click",function(){
				imgNav.removeClass(opts.activeClass);			
				$(this).css({ "width": 0, "height": 0 }).hide();
			});
			
			prevBtn.hover(function () {				
	            var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));	            
	            if (index < 1) {
	                $(this).css({"cursor":"default"}).children().hide();	      
	            } else {
	                $(this).css({"cursor":"pointer"}).children().show();
	            }
	        }, function () {
	            $(this).css({"cursor":"default"}).children().hide();
	        });	
	        
	        nextBtn.hover(function () {
	            var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));	            
	            if (index >= imgNav.length - 1) {
	                $(this).css({"cursor":"default"}).children().hide();		                
	            } else {
	                $(this).css({"cursor":"pointer"}).children().show();
	            }
	        }, function () {
	            $(this).css({"cursor":"default"}).children().hide();
	        });
	        
	        prevBtn.on("click",function (e) {
	        	e.stopPropagation();
	            var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));            	            
	            if (index > 0) {
	            	index--;
	            	imgNav.eq(index).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);
                	src = imgNav.eq(index).attr('data-src');	
		            setViewImg(src);
	            }            
	            if (index <= 0) {	          
	                $(this).css({"cursor":"default"}).children().hide();
	            }
	        });
	        
	        nextBtn.on("click",function (e) {
	        	e.stopPropagation();
	            var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));
	            if (index < imgNav.length - 1) {
	            	index++;
	            	imgNav.eq(index).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);
	            	src = imgNav.eq(index).attr('data-src');	
		            setViewImg(src);	
	    		}
	            if (index >= imgNav.length - 1) {
	                $(this).css({"cursor":"default"}).children().hide();
	            }
	        })
		})
	}
})(jQuery);

/*评论下的图片点击js效果代码结束*/


/*评论下的输入框的js代码开始*/
$(function(){
	$(".btn_send").on('click',function(){
		var now = time()
		//获取评论信息
		var text_send = $("#text_send").val();
		if(text_send == ""){
			return false;
		}
		var html;
		html = '<div class="col-md-12 col-sm-12 col-xl-12 one cont">'+
					'<div class="col-md-2 col-sm-2 col-xl-12 one img">'+
						'<img src="../img/desc/timg.jpg" class="img001">'+
					'</div>'+
					'<div class="col-md-10 col-sm-10 col-xl-12 one content">'+
					'<div class="comment-right">'+
						'<h4>匿名</h4>'+
						'<div class="comment-content-header three">'+
							'<span><i class="glyphicon glyphicon-time two"></i>'+now+'</span>&nbsp;&nbsp;&nbsp;&nbsp;'+
							'<span><i class="glyphicon glyphicon-map-marker two"></i>北京</span>'+
						'</div>'+
						'<p class="tent">'+text_send+'</p>'+
						'<div class="comment-content-footer">'+
							'<div class="row">'+
								'<div class="col-md-12 col-sm-12 col-xl-12 three">'+
									'<span><i class="glyphicon glyphicon-globe two"></i> 谷歌</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="reply-list three">'+
							
						'</div>'+
						'<div class="col-md-12 col-sm-12 col-xl-12 content_text one three">'+
							'<textarea class="col-md-10 col-sm-10 col-xl-10 con_back" id="con_back" placeholder="回复买家"></textarea>'+
							' <button type="button" class="layui-btn layui-btn-sm layui-btn-normal btn_back">提交</button>'+
						'</div>'+
					'</div>'+
				'</div>';
		$(".tent_info").append(html);
		$(".text_send").val("");
	})
	
	$(".content_text").show();
	$(".tent_info").on('click','.btn_back',function(){
		
		var back_time = time()
	
		
		//获取评论信息
		var con_back = $(this).parent().parent().parent().find("#con_back").val();
		if(con_back == ""){
			return false;
		}
		var html_back;
		html_back = '<div class="reply">'+
						'<div class="three">'+
							'<a class="replyname">匿名</a>:<span >@brother</span><span>'+back_time+'</span>'+
						'</div>'+
					'</div>'+
					'<p><span>'+con_back+'</span></p>';
		$(this).parent().parent().parent().find(".reply-list").append(html_back);
		$(this).parent().parent().parent().find("#con_back").val("");
	})
	
	//评论提交
	function time(){
		function time(s) {
		    return s < 10 ? '0' + s: s;
		}
		var myDate = new Date();
		//获取当前年
		var year=myDate.getFullYear();
		//获取当前月
		var month=myDate.getMonth()+1;
		//获取当前日
		var date=myDate.getDate(); 
		var h=myDate.getHours();       //获取当前小时数(0-23)
		var m=myDate.getMinutes();     //获取当前分钟数(0-59)
		var s=myDate.getSeconds();  
		return year+'-'+time(month)+"-"+time(date)+" "+time(h)+':'+time(m)+":"+time(s);
	}
	
})

/*评论下的输入框的js代码结束*/