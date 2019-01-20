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

$('#testemonial-toggle-1').click(function(){
    $('#testemonials-nav > div').removeClass("testemonial-active");
    $(this).addClass("testemonial-active");
    $('.testemonial').fadeOut();
    $('#testemonial-1').fadeIn();
});

$('#testemonial-toggle-2').click(function(){
    $('#testemonials-nav > div').removeClass("testemonial-active");
    $(this).addClass("testemonial-active");
    $('.testemonial').fadeOut();
    $('#testemonial-2').fadeIn();
});

$('#testemonial-toggle-3').click(function(){
    $('#testemonials-nav > div').removeClass("testemonial-active");
    $(this).addClass("testemonial-active");
    $('.testemonial').fadeOut();
    $('#testemonial-3').fadeIn();
});

$('#testemonial-toggle-4').click(function(){
    $('#testemonials-nav > div').removeClass("testemonial-active");
    $(this).addClass("testemonial-active");
    $('.testemonial').fadeOut();
    $('#testemonial-4').fadeIn();
});

$('#testemonial-toggle-5').click(function(){
    $('#testemonials-nav > div').removeClass("testemonial-active");
    $(this).addClass("testemonial-active");
    $('.testemonial').fadeOut();
    $('#testemonial-5').fadeIn();
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