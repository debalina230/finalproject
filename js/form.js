$(document).ready(function(){
  $('.nameErr').hide();
  $('.mailErr').hide();
  $('.pswErr').hide();  


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

   $('#psw').on('input',function(){
    let data=$('#psw').val();

    if(data.length<1)
    {
      $('.pswErr').show()
      $('.pswErr').html("Required field")
    }
    else if(data.length<10)
    {
        $('.pswErr').show()
      $('.pswErr').html("minimum 10 charecter") 
    }
    else
    {
      $('.pswErr').show()
      $('.pswErr').html("Done")
    }
})
})