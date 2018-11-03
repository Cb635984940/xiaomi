//轮播图
var img = document.querySelectorAll(".big-img>div");
var btn1 = document.querySelectorAll(".banner_img .btn")
var big = document.querySelector(".big-img")

var yuan = document.querySelectorAll(".yuanbox>li")

var n = 0;
btn1[0].onclick = function() {
	lbmove();
	n--;
}
btn1[1].onclick = function() {
	lbmove();
	n++;
}
yuan.forEach(function(val, ele) {
	val.onmouseenter = function() {
		n = ele;
		lbmove();
	}
})
var time3 = setInterval(function() {
	lbmove();
	n++;
}, 2000);
big.addEventListener("mousemove", function() {
	clearInterval(time3)
})
big.addEventListener("mouseout", function() {
	time3 = setInterval(function() {
		lbmove();
		n++;
	}, 2000);
});

function lbmove() {
	if(n > img.length - 1) {
		n = 0;
	}
	if(n < 0) {
		n = img.length - 1
	};
	img.forEach(function(val, ele) {
		val.style.opacity = 0;
		yuan[ele].style.background = "hsla(0,0%,100%,.4)";
	});
	img[n].style.opacity = 1;
	yuan[n].style.background = "#FFFFFF";
}

//选项卡
$(function() {
	$(".list-2 a").mouseenter(function() {
		$(".list-3 ul:nth-child(2)").css("display","block").siblings().css("display","none")
	||
		$(".list-3 ul:nth-child(2)").css("display","none").siblings().css("display","block");
	}) 
})

//顶部
var hea = document.querySelector(".ht")
var bian = document.querySelector(".tz")
window.onscroll = function() {
	var top = document.body.scrollTop;
	if(top > 740) {
		hea.style.top = 0;
		bian.style.display = "block"
		setTimeout(function() {
			hea.style.transition = "all 0s"
		}, 1000);
	} else {
		hea.style.top = "-100px";
		bian.style.display = "none";
		setTimeout(function() {
			hea.style.transition = "all 1s"
		}, 30)
	};
};

//跳转
let flag = true;

$(".tz>div").click(function() {
	flag = false;
	let index = $(".tz>div").index(this);
	$(".tz>div").eq(index).css("background", "yellow").siblings().css("background", "red")
	let nus = $(".bigbox>div").eq(index).offset().top;
	$("html,body").animate({
		scrollTop: nus,
	}, 500, function() {
		flag = true;
	})

})

$(window).scroll(function() {
	if(flag) {
		let scrll = $(window).scrollTop();
		for(let i = 0; i < (".tz>div").length; i++) {
			let min = $(".bigbox>div").eq(i).offset().top;
			let max = $(".bigbox>div").eq(i).outerHeight() + min;
			if(scrll >= min && scrll < max) {
				$(".tz>div").eq(i).css("background", "yellow").siblings().css("background", "red")
			}
		}

	}
})
//秒杀
let m = 1;
$(function(){
	$(".mslb").animate({

	   marginLeft:-m * 194 + "px"
	},1000)
})
	

 




//let ms = document.querySelector(".mslb");
//console.log(ms)
//
//let m = 0;
//setInterval(function() {
//	//	ms[0].forEach(function(val,index){
//
//	ms.style.marginLeft = -m * 194 + "px"
//
//	ms.style.marginLeft = 0;
//	m++;
//}, 1200)

//定时器
let time2 = new Date(2018, 10, 4, 0, 0, 0).getTime();
let time1 = setInterval(function() {
	if((time2 - new Date()) <= 0) {
		clearInterval(time1);
	}
	setDate(time2);
}, 1000)

function setDate(futureTimes) {
	let nowTimes = new Date()
	let cha = futureTimes - nowTimes;
	if(cha <= 0) {
		cha = 0;
	}
	let day = Math.floor(cha / 1000 / 60 / 60);
	let hour = Math.floor((cha - day * 60 * 60 * 1000) / 1000 / 60);
	let minute = Math.floor((cha - day * 60 * 60 * 1000 - hour * 60 * 1000) / 1000);
	document.querySelector(".day").innerText =
		day >= 10 ? day : "0" + day
	document.querySelector(".hour").innerText =
		hour >= 10 ? hour : "0" + hour
	document.querySelector(".minute").innerText =
		minute >= 10 ? minute : "0" + minute
}

let fn = 1;
$(".me-right").click(function() {
	fn++;
	move();
})
$(".me-left").click(function() {
	fn--;
	move();
})

function move() {
	let arr = $(".yuandian li").css("background", "#fff");

	$($(".yuandian li")[n - 1]).css({
		background: "#F10214",
		//				border:2+"px","solid","pink",
	});

	$(".big-bn").animate({
		marginLeft: -fn * 350 + "px",
	}, 1000)

	if(fn == 2) {
		fn = 0;
		$($(".yuandian li")[n - 1]).css("background", "#F10214")
		$(".big-bn").animate({
			marginLeft: -fn * 350 + "px",
		}, 1000)

	} else if(fn == 0) {
		fn = 2;
		$($(".yuandian li")[n - 1]).css("background", "#F10214");
		$(".big-bn").animate({
			marginLeft: 0,
		}, 1000)
	}

}

//无缝轮播
let hmimg = document.querySelector(".hmzj")
let hmbox = document.querySelector(".hm-box")
let hmyuan = document.querySelectorAll(".slider>i")
let btn = document.querySelectorAll(".hmbtn")
let hmn = 1;
let flags = true;
btn[0].onclick = function() {
	if(flags) {
		flag = false;
		hmn--;
		hmmove();
	}
}
btn[1].onclick = function() {
	if(flags) {
		flag = false;
		hmn++;
		hmmove();
	}
}
hmyuan.forEach(function(val, index) {
	val.onmouseover = function() {
		if(index == 0 && hmn == 4) {
			hmn = 4
		} else if(index == 2 && hmn == 0) {
			hmn = 0;
		}else{
			hmn = index+1;
		}
		hmmove();
	}
});
hmbox.onmouseover = function() {
	clearInterval(time);
}
hmbox.onmouseout = function() {
	time = setInterval(function() {
		hmn++;
		hmmove();
	}, 2000);
}
var time = setInterval(function() {
	hmn++;
	hmmove();
}, 1000);

function hmmove() {
	hmyuan.forEach(function(val, index) {
		val.style.background = "#fff";
	});
	hmimg.style.transition = "all 0.7s";
	hmimg.style.left = -hmn * 350 + "px";
	if(hmn == 0) {
		hmyuan[2].style.background = "orange";

	} else if(hmn == 4) {
		hmyuan[0].style.background = "orange";
	} else {
		hmyuan[1].style.background = "orange";
	}

}
hmbox.addEventListener("transitionend", function() {
	if(hmn == 4) {
		hmn = 1;
		hmbox.style.transition = 'all 0s';
		hmbox.style.left = -1 * 350 + "px";
	}
	if(hmn == 0) {
		hmn = 3;
		hmbox.style.transition = 'all 0s';
		hmbox.style.left = -3 * 350 + "px";
	}
	flag = true;
});


	$(".leaderboard-list>div a").mouseover(function(){
	$(".leaderboard-list>div a").css("color","#333333");
	$(this).css("color","#F10214");
	let index = $(".leaderboard-list>div a").index(this);
	$(".phb>div").css("display","none");
	let ele = $(".phb>div")[index]
	$(ele).css("display","block")
})	


























////图片加载
$("img").addClass("lazy")
   $(function(){
        $("img.lazy").lazyload();
    })
   
var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
      
  });
  
var mySwiper = new Swiper('.tsbox',{
	 navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    	 loop : true,
      autoplay: true,
     
});
