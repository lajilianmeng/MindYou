$(function(){
	var li=$(".box_bottom_xuan1 li");
	li.click(function(){
		$(this).addClass("xuan1_color")
		.siblings().removeClass("xuan1_color")
		
		var index=li.index(this);
		alert(index)
		$(".box_bottom_xuan>div").eq(index).show().siblings().hide()
	})
	
	
})

