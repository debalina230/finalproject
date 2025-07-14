$(document).ready(function(){
 
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


$('.toggler').on('click',function(){
  $('.toggler')
  .css({backgroundColor:'white'})
  $('.nav_coll')
  .css({backgroundColor:'  rgba(0, 0, 0, 0.708)',fontSize:'20px',fontWeight:'bold'})
})
})