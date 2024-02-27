$(document).ready(function(){
  $('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active');
});


  const ww = $(window).width();

  if(ww >= 960){
  //배너 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    loop:true, 
    speed: 2000, 

    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination", 
      clickable: true, 
    },
  });

  }else{

  }


    //슬라이드 스와이퍼
    var swiper = new Swiper(".weSwiper", {
      /*effect: "fade",*/
      slidesPerView:4,
      spaceBetween: 30,
      loop:true,
      breakpoints : {
            1760:{
            slidesPerView:4,

            },
            1200:{
            slidesPerView:3,

            },
            760:{
            slidesPerView:2,

            },
            500:{
            slidesPerView:1,

            },
            375:{
            slidesPerView:1,
            
          }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

  // 서브메뉴
  $('.main-menu li').mouseenter(function(){
    let result = $(this).attr('data-tab');

    $('.sub-menu-box').addClass('active');
});

  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');
});

// tab메뉴
$('.btn li').click(function(){

  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  const result = $(this).attr('data-alt');

  $('.tabs div').removeClass('active');
  $(`#${result}`).addClass('active');
});


});