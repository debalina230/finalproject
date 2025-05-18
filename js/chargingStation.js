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