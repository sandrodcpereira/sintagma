$(document).ready(function(){
	$('#sintagma-page').delay(50).fadeIn(200);
});

$(document).ready(function() {
  $( ".ltool-language.portuguese" ).click();
});


$(document).ready(function() {
	if (window.location.search.indexOf('lang=en') > -1) {
		$( ".ltool-language.english" ).click();
	}
});

$(document).ready(function() {
	if (window.location.search.indexOf('lang=fr') > -1) {
		$( ".ltool-language.french" ).click();
	}
});

$(document).ready(function() {
	if (window.location.search.indexOf('lang=es') > -1) {
		$( ".ltool-language.spanish" ).click();
	}
});

$(document).ready(function () {
	$(window).scroll(function(){
		var scrollTop = 40;
		if($(window).scrollTop() >= scrollTop){
			$('.logo').css("height", "26px");
			$('.logo').css("margin", "21px 10px")
			$('.logo > span').css("height", "26px");
			$('.nav-menu > ul').css("padding", "0 0");
		}
		if($(window).scrollTop() < scrollTop){
			$('.logo').css("height", "100px");
			$('.logo').css("margin", "20px 30px")
			$('.logo > span').css("height", "100px");
			$('.nav-menu > ul').css("padding", "37px 20px");
		}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = 40;
		if($(window).scrollTop() >= scrollTop){
			$('.logo-mobile').css("height", "26px");
			$('.logo-mobile > span').css("width", "140px");
			$('.logo-mobile > span').css("height", "26px");
			$('.hamburger').css("margin", "5px");
			$('.nav-menu, .nav-menu-mobile').css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 10px 20px");            
		}
		if($(window).scrollTop() < scrollTop){
			$('.logo-mobile').css("height", "100px");
			$('.logo-mobile > span').css("width", "150px");
			$('.logo-mobile > span').css("height", "100px");
			$('.hamburger').css("margin", "38px 10px");
			$('.nav-menu, .nav-menu-mobile').css("box-shadow", "none");
		}
	})
})


$('.hamburger, .nav-menu-mobile > ul > li > a').click(function(){
	$('.hamburger').toggleClass("is-active");
	$('.nav-menu-mobile > ul').toggleClass("is-open")
});

$('#testimonial-toggle-1').click(function(){
	$('#testimonials-nav > div').removeClass("testimonial-active");
	$(this).addClass("testimonial-active");
	$('.testimonial').fadeOut();
	$('#testimonial-1').fadeIn();
});

$('#testimonial-toggle-2').click(function(){
	$('#testimonials-nav > div').removeClass("testimonial-active");
	$(this).addClass("testimonial-active");
	$('.testimonial').fadeOut();
	$('#testimonial-2').fadeIn();
});

$('#testimonial-toggle-3').click(function(){
	$('#testimonials-nav > div').removeClass("testimonial-active");
	$(this).addClass("testimonial-active");
	$('.testimonial').fadeOut();
	$('#testimonial-3').fadeIn();
});

$('#testimonial-toggle-4').click(function(){
	$('#testimonials-nav > div').removeClass("testimonial-active");
	$(this).addClass("testimonial-active");
	$('.testimonial').fadeOut();
	$('#testimonial-4').fadeIn();
});

$('#testimonial-toggle-5').click(function(){
	$('#testimonials-nav > div').removeClass("testimonial-active");
	$(this).addClass("testimonial-active");
	$('.testimonial').fadeOut();
	$('#testimonial-5').fadeIn();
});

$('.maps').click(function () {
	$('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none"); 
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 500);
		return false;
	  }
	}
  });
});

$( ".lang-flag-en" ).click(function() {
  $( ".ltool-language.english" ).click();
});

$( ".lang-flag-es" ).click(function() {
  $( ".ltool-language.spanish" ).click();
});

$( ".lang-flag-fr" ).click(function() {
  $( ".ltool-language.french" ).click();
});

$( ".lang-flag-pt" ).click(function() {
  $( ".ltool-language.portuguese" ).click();
});

$('.lang-selector > li').click(function(){
	$('.lang-selector > li').removeClass("lang-active");
	$(this).addClass("lang-active");
});

$('.mobile-lang > li').click(function(){
	$('.mobile-lang > li').removeClass("mobile-lang-active");
	$(this).addClass("mobile-lang-active");
});

$('.lang-indicator').click(function(event){
	event.stopPropagation();
	$('.lang-selector').slideToggle();
});

$(document).click(function(){
   $('.lang-selector').fadeOut(); 
});

// form


$( "#send-alias" ).click(function() {
  $( "#send-actual" ).click();
});


// slider

$(document).ready(function(){
	$('.film').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
			pauseOnHover: false,
			responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},

		{
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});