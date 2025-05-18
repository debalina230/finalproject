
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


  
   $('.nameErr').hide();
  $('.mailErr').hide();
  $('.phoneErr').hide();  


$('#name').on('input',function(){
    let data=$('#name').val();

    if(data.length<5)
    {
      $('.nameErr').show()
      $('.nameErr').html("Required field")
    }
    else
    {
      $('.nameErr').hide()
    }
})

 $('#mail').on('input',function(){
    let data=$('#mail').val();

    if(data.length<1)
    {
      $('.mailErr').show()
      $('.mailErr').html("Required field")
    }
    else if(data.length<10)
    {
        $('.mailErr').show()
      $('.mailErr').html("minimum 10 charecter") 
    }
    else
    {
      $('.mailErr').show()
      $('.mailErr').html("Done")
    }
})

   $('#ph').on('input',function(){
    let data=$('#ph').val();

    if(data.length<1)
    {
      $('.phoneErr').show()
      $('.phoneErr').html("Required field")
    }
    else if(data.length<10)
    {
        $('.phoneErr').show()
      $('.phoneErr').html("minimum 10 digit") 
    }
    else
    {
      $('.phoneErr').show()
      $('.phoneErr').html("Done")
    }
})
})