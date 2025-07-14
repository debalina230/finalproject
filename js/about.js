 
 $(document).ready(function(){
   $(function(){
  $('.accountPlus').on('click',function(){
    $('.accountAnswer').slideDown();
    $(this).hide();
    $('.accountMinus').show();
  })
  
   $('.accountMinus').on('click',function(){
    $('.accountAnswer').slideUp();
    $(this).hide();
    $('.accountPlus').show();
  })

   $('.categoryPlus').on('click',function(){
    $('.categoryAnswer').slideDown();
    $(this).hide();
    $('.categoryMinus').show();
  })

   $('.categoryMinus').on('click',function(){
    $('.categoryAnswer').slideUp();
    $(this).hide();
    $('.categoryPlus').show();
  })

  $('.categoryangleright').on('click',function(){
    $('.categorypara').slideDown();
    $(this).hide();
    $('.categoryangleleft').show();
  })

   $('.categoryangleleft').on('click',function(){
    $('.categorypara').slideUp();
    $(this).hide();
    $('.categoryangleright').show();
  })

   $('.categoryanglerightpara').on('click',function(){
    $('.categorytext').slideDown();
    $(this).hide();
    $('.categoryangleleftpara').show();
  })

   $('.categoryangleleftpara').on('click',function(){
    $('.categorytext').slideUp();
    $(this).hide();
    $('.categoryanglerightpara').show();
  })
})

$('.toggler').on('click',function(){
  $('.toggler')
  .css({backgroundColor:'white'})
  $('.nav_coll')
  .css({backgroundColor:'  rgba(0, 0, 0, 0.708)',fontSize:'20px',fontWeight:'bold'})
})
})
    
 
 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


     var swiper = new Swiper(".mySwiperr", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      },
       navigation: {
        nextEl: ".meetarrow1",
        prevEl: ".meetarrow2",
      },
    });

 

