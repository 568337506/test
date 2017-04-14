(function  () {
	
	
	//吸顶：
	 $(window).scroll(function  () {
	 	var top = $(document).scrollTop()
	 	console.log(top)
	 	if (top>50) {
	 		$("header").addClass("class")
	 }else{
	 	$("header").removeClass("class")
	 }
	 	});
	 	//下拉表单：
	$("li").mousemove(function  () {
		$(this).children(".dropbox").slideDown()
	});
	$("li").mouseleave(function  () {
		$(this).children(".dropbox").slideUp()
		
	})
	//轮播图：
	var $imgLis = $(".unit li");
	var $unit = $(".unit");
	var $circleLis = $(".circles ol li");
	$(".rightbtn").click(rightbtnhandler);
	var index = 0;
	function rightbtnhandler () {
		if ($unit.is(":animated"))return;
		index++;
		$unit.animate({"left":-1200 * index},200,function  () {
			if (index >= $unit.children("ul").children("li").length) {
				index = 0;
				$unit.css("left",0);
			} 
		});
		changCircle();
			
		
	}
	$(".leftbtn").click(function  () {
		if ($unit.is(":animated"))return;
		index--;
		if (index < 0) {
			index = $unit.children("ul").children("li").length-1;
			$unit.css("left",-1200 * (index));
		}
		$unit.animate({"left": -1200 * index},200);
		changCircle();
	})
	//加时间 自动播放：
	var  $Carousel = $("#Carousel")
     var time = setInterval(rightbtnhandler,3000);
     $Carousel.mouseenter(function  () {
     	clearInterval(time)
     })
     $Carousel.mouseleave(function  () {
     	time = setInterval(rightbtnhandler,3000)
     })
     
		function changCircle () {
			var n = index <= $unit.children("ul").children("li").length-1 ? index : 0;
			$circleLis.eq(n).addClass("cur").siblings().removeClass("cur");
		}	
		$circleLis.click(function  () {
			index = $(this).index();
			$unit.animate({"left": -1200 * index},300);
			changCircle()
		})
	
	//回顶部：
	$return = $(".return")
	$return.click(function  () {
		if (top >0) {
			top = 0;
		}
	})
	//放大镜：
	var smallPic = document.getElementById("smallPic");
	var zoom = document.getElementById("zoom");
	var bigPic = document.getElementById("bigPic");
	smallPic.onmouseover = function  () {
		zoom.style.display = "block"
		bigPic.style.display = "block"
	};
	smallPic.onmouseout = function  () {
		zoom.style.display = "none"
		bigPic.style.display = "none"
	};
	smallPic.onmousemove = function  (event) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		var x = event.clientX - (getAllLeft(smallPic) - scrollLeft) - 17;
		var y = event.clientY - (getAllTop(smallPic) - scrollTop) - 17;
		if (x < 0) {
			x = 0;
		}else if (x > 33) {
			x = 33
		}
		if (y < 0) {
			y = 0;
		}else if (y > 33) {
			y = 33;
		}
		console.log(x , y)
		zoom.style.left = x + 'px';
		zoom.style.top = y + 'px';
		var rate = 400/70;
		bigPic.style.backgroundPosition = -x * rate + "px " + -y * rate + "px";
	}
	function getAllLeft (obj) {
		var allLeft = obj.offsetLeft;
		var currentObj = obj;
		while (currentObj = currentObj.offsetParent){
			allLeft += currentObj.offsetLeft
		}
		return allLeft;
	}
	function getAllTop (obj) {
		var allTop = obj.offsetTop
		var currentObj = obj;
		while (currentObj = currentObj.offsetParent){
			allTop += currentObj.offsetTop;
		}
		return allTop;
	}
	
	
	//购物车：

})()
 