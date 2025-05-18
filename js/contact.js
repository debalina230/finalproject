$(document).ready(function(){
 
   $('.nameErr').hide();
  $('.mailErr').hide();
  $('.subErr').hide(); 
  $('.msgErr').hide(); 


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

   $('#sub').on('input',function(){
    let data=$('#sub').val();

    if(data.length<1)
    {
      $('.subErr').show()
      $('.subErr').html("Required field")
    }
    else
    {
      $('.subErr').show()
      $('.subErr').html("Done")
    }
})

  $('#msg').on('input',function(){
    let data=$('#msg').val();

    if(data.length<1)
    {
      $('.msgErr').show()
      $('.msgErr').html("Required field")
    }
    else if(data.length<100)
    {
       $('.msgErr').show()
      $('.msgErr').html("minimum 100 word")  
    }
    else
    {
      $('.msgErr').show()
      $('.msgErr').html("Done")
    }
})
})