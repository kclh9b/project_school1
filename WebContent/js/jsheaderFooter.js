var listOpen = 0;
$(document).ready(function() {
	autoMiniInform();
	/* 좌,우 스크롤 보정 */
	$(window).scroll(function() {
		$("header").css({left: 0 - $(this).scrollLeft()});
	});
	
	/* nav open */
	$(".li_dep1, .li_dep2box").hover(
			function(){
				subOpen();
			},
			function(){
				subClose();
			}
	);

	
	/* 네비 more */
	$("a.nav_more, .nav_moreBox").hover(
			function(){
				$(".nav_moreBox").addClass("nav_moreBox_on");
			},
			function(){
				$(".nav_moreBox").removeClass("nav_moreBox_on");
			}
	);
	
	/* 로그인 on */
	$(".log_sel, .login").hover(
			function(){
				$(".login").addClass("login_on");
			},
			function(){
				$(".login").removeClass("login_on");
			}
	);
	
	/* 언어 on */
	$(".lang_sel, .lang").hover(
			function(){
				$(".lang").addClass("lang_on");
			},
			function(){
				$(".lang").removeClass("lang_on");
			}
	);
	
	/* 언어변경 */
	$("a.kor").click(function() {
		$("li.lang_sel a.langsub").text("한국어");
	});
	$("a.eng").click(function() {
		$("li.lang_sel a.langsub").text("English");
	});
	$("a.chi").click(function() {
		$("li.lang_sel a.langsub").text("中文");
	});
	
	/* searchBox */
	$("a.nav_search").click(function() {
		$(".head_search").show();
	});
	$(".head_searchBox a.btn_searchClose").click(function() {
		$(".head_search").hide();
	});
});

/* 서브 오픈 css */
function subOpen() {
	$(".li_dep2box").css("height", "275px");
	$(".li_dep2box").css("visibility", "visible");
	$(".li_dep2box").css("opacity", "1").css("transition", "0.2s ease");
}

function subClose() {
	$(".li_dep2box").css("height", "0px");
	$(".li_dep2box").css("visibility", "hidden");
	$(".li_dep2box").css("opacity", "0").css("transition", "0.2s ease");
}

/* 네비 애니메이션 */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
	if(! $(".goTop").length > 0 ){
	    var _sh = parseInt( $(window).height() + 200 );
	    var _bh = $('body').height();
	    if(_bh > _sh){
	      $("header").append("<a href='#' class='goTop'></a>");
	      $(".goTop").bind('click', function(){
	        var position = $("body").offset().top;
	        $("html, body").animate({ scrollTop: position }, 350);
	      //  return false;
	      });
	    }
	}
	jumpTop();
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('header').removeClass('nav-down').addClass('nav-up');
		subClose();
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = st;
}


/* goTop */
function jumpTop(){
    var _posY =  $(window).scrollTop();
    if( _posY > 200 ){
      $(".goTop").addClass("show");
    }
    else{
      $(".goTop").removeClass("show");
    }
}


/* footer 공지 */
var miniInformIndex = 0;
function autoMiniInform() {
	autoInform = setInterval("miniInformPlay(1)",3000);
}

function miniInformPlay(n) {
	$(".miniInform li").eq(miniInformIndex).css("transform", "translateY(20px)").css("transition","none");
	var temp = miniInformIndex
	miniInformIndex += n;
	if (miniInformIndex>2) {
		miniInformIndex = 0;
	}else if(miniInformIndex<0) {
		miniInformIndex = 2;
	}
	$(".miniInform li").eq(miniInformIndex).css("transform", "translateY(0)").css("transition", "0.3s ease");
}


