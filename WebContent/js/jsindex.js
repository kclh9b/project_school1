
/* 슬라이드 이미지 */
var slideIndex = 1;
$(document).ready(function() {
	setInterval(function() {
		proBox();
	})
	imageSlide(slideIndex);
	play();
});
function imageSlide(n) {
	if(n>4) {
		slideIndex = 1;
	}else if(n<1) {
		slideIndex = 4;
	}
	for(var i=0; i<4; i++) {
		$(".slideImg_"+(i+1)).css("opacity", "0").css("z-index","1").css("transition", "0.6s ease");
	}
	for(var i=0; i<4; i++) {
		$(".circle_"+(i+1)).css("background-color", "rgb(190, 190, 190)").css("transition", "0.3s ease");
	}
	
	$(".slideImg_"+slideIndex).css("opacity", "1").css("z-index","20").css("transition", "0.6s ease");
	
	$(".circle_"+slideIndex).css("background-color", "rgb(51, 51, 51)").css("transition", "0.3s ease");
	
	switch(slideIndex) {
		case 1:
			$(".slideImgBack").css("background-color", "rgb(207, 217, 193)").css("transition", "0.6s ease");
			break;
		case 2:
			$(".slideImgBack").css("background-color", "rgb(227, 231, 238)").css("transition", "0.6s ease");
			break;
		case 3:
			$(".slideImgBack").css("background-color", "rgb(239, 240, 224)").css("transition", "0.6s ease");
			break;
		case 4 :
			$(".slideImgBack").css("background-color", "rgb(232, 236, 229)").css("transition", "0.6s ease");
			break;
	}
}

var pause = 0;
function nextSlide(n) {
	slideIndex += n;
	imageSlide(slideIndex);
	if (pause != 1) {
		pauseSlide();
		pause = 0;
		play();		
	}
}

function autoSlide() {
	nextSlide(1);
}

var auto;
function play() {
	auto = setInterval("autoSlide()", 3000);
}

function pauseSlide() {
	clearInterval(auto);
	pause = 1;
}

function circleClick(n) {
	slideIndex = n;
	imageSlide(slideIndex);
	if (pause != 1) {
		pauseSlide();
		pause = 0;
		play();		
	}
}
/*======================================*/

/* 공지사항 버튼 */
var informIndex = 0;
$(".informNext").each(function(index) {
	$(this).click(function() {
		$(".inform").eq(informIndex).css("visibility", "hidden").css("opacity","0").css("transition", "0.1s ease");
		if(index == 0) {
			informIndex += -1;
			if(informIndex < 0) {
				informIndex = 2;
			}
		} else {
			informIndex += 1;
			if(informIndex > 2) {
				informIndex = 0;
			}
		}
		$(".inform").eq(informIndex).css("visibility", "visible").css("opacity","1").css("transition", "0.1s ease");
	})
})

/* 상품 버튼 */
function proNext(n) {
	$("."+n+"Slide").css("transform", "translate(-1360px, 0px)").css("transition", "0.8s ease");
	$("."+n+"Next").css("opacity", "0").css("cursor", "default");
	$("."+n+"Prev").css("opacity", "1").css("cursor", "pointer");
}
function proPrev(n) {
	$("."+n+"Slide").css("transform", "translate(0px, 0px)").css("transition", "0.8s ease");
	$("."+n+"Next").css("opacity", "1").css("cursor", "pointer");
	$("."+n+"Prev").css("opacity", "0").css("cursor", "default");
}

/* 상품 박스 쇼 */
function proBox() {
	 var _posY =  $(window).scrollTop();
	    if( _posY > 600){
	    	$(".proTeaBox").addClass("proShow");
	    	$(".proTeaBox").css("opacity", "1");

	    }
	    if( _posY > 1100) {
	    	$(".proFoodBox").addClass("proShow");
	    	$(".proFoodBox").css("opacity", "1");
	    }
}
