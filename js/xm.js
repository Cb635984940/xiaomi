window.onload = function() {
	var li1 = document.querySelectorAll(".more_rm ul li");
	var li2 = document.querySelectorAll(".span-10");
	li1.forEach(function(val, index) {
		val.onmouseenter = function() {
			li1.forEach(function(val, index1) {
				val.classList.remove("active");
				li2[index1].classList.remove("active1")
			});
			this.classList.add("active");
			li2[index].classList.add("active1");
		};
	});
};

var img = document.querySelectorAll(".lunbo2")
var dot = document.querySelectorAll(".dot .item a");
var left = document.querySelector(".prev")
var right = document.querySelector(".prev-1");
var box = document.querySelector(".img-box");
var n = 0;
left.onclick = function() {
	move();
	n--;
}
right.onclick = function() {
	move();
	n++;
}
dot.forEach(function(val, index) {
	val.onclick = function() {
		n = index;
		move();
	}
})
var time = setInterval(function() {
	move();
	n++;
}, 2000);

box.addEventListener("mousemove", function() {
	clearInterval(time);
});
box.addEventListener("mouseout", function() {
	time = setInterval(function() {
		move();
		n++;
	}, 2000);
});

function move() {
	if(n > img.length - 1) {
		n = 0
	};
	if(n < 0) {
		n = img.length - 1
	};
	img.forEach(function(val, index) {
		val.style.opacity = 0;
		// 			dot[index].style.background = "rgba(0，0，0，0.4)";
		dot[index].style.borderColor = "rgba(255,255,255,0.4)"
	});
	img[n].style.opacity = 1;
	dot[n].style.background = "rgba(255, 255, 255, 0.4)";
	dot[n].style.borderColor = "rgba(0,0,0,0.4)"
}

cebian(".neirong1");
cebian(".neirong2");
cebian(".neirong3");
cebian(".neirong4");
function cebian(str){
let conTenBox = document.querySelectorAll(str+" .content");
let conSenBox = document.querySelectorAll(str+" .content>div");
let l = document.querySelectorAll(str+" .btn")
let conYuan = document.querySelectorAll(str+" .good-2>div");
console.log(conYuan);
let contantN = 0;
l[0].onclick = function() {
	contantN--;
	tanTmove();
}

l[1].onclick = function() {

	contantN++;
	tanTmove();
}
conYuan.forEach(function(val, index) {
	val.onclick = function() {
		contantN = index;
		tanTmove();
	}

})

function tanTmove() {
	console.log(1);
	if(contantN < 0) {
		contantN = 0;
		return;
	}

	if(contantN > conSenBox.length - 1) {
		return;
	}
	
	if(contantN > conYuan.length - 1) {
		contantN = conYuan.length - 1;
		return;
	}

	
	conYuan.forEach(function(val, index) {
		val.classList.remove("active");
		
	})
	conTenBox[0].style.marginLeft = -contantN * 296 + "px";
	conYuan[contantN].classList.add("active");
}
}




$(function(){
	
	let n = 1;
    $(".sright").click(function(){
    	$(".sg").css({
    		marginLeft:- n*978+"px",
    	})
    })
      $(".sleft").click(function(){
    	$(".sg").css({
    		marginLeft:0+"px",
    	})
    })
})


let wn = 1;
$(function(){
	$(".wleft").click(function(){
		wn--;
		wmove();
	})
	$(".wright").click(function(){
		wn++;
		wmove();
	})
})
function wmove(){
	$(".more-2 ul").animate({
		marginLeft:-wn*1226+"px"
	},1000)

	if(wn == 3){
		wn=3
		return;
	}else if(wn<0){
	   wn = -1;
		return;
	}
}
