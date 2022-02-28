$(document).ready(function(){
    $('#nameerror').hide();
    $('#sexerror').hide();
    $('#emailerror').hide();
    $('#moberror').hide();
    $('#adderror').hide();
    $('#passerror').hide();
    $('#conferror').hide();
    
    
    $('#btnsubmit').on('click',function(){
        var name = document.getElementById('inpname').value;
        var email = document.getElementById('inpemail').value;
        var mobile = document.getElementById('inpmob').value;
        var add =document.getElementById('inpadd').value;
        var pass =document.getElementById('inppass').value;
        var confirm =document.getElementById('inpconfirm').value;
        var mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var validpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


        console.log('hii');
       if(name == ''){
        $('#sexerror').hide();
        $('#emailerror').hide();
        $('#passerror').hide();
        $('#adderror').hide();
        $('#moberror').hide();
        $('#conferror').hide();
        $('#nameerror').show();
        $('#nameerror').text('please enter the name').fadeOut(3000);
        $('#nameerror').css('color','red');
       } 
       else if(!isNaN(name)){
        $('#sexerror').hide();
        $('#emailerror').hide();
        $('#adderror').hide();
        $('#moberror').hide();$('#conferror').hide();
        $('#passerror').hide();
        $('#nameerror').show();
        $('#nameerror').text('Alphabets Only').fadeOut(3000);
        $('#nameerror').css('color','red');
           
       }
       else if (
        document.getElementById("male").checked == false &&
        document.getElementById("female").checked == false
      ){
        $('#nameerror').hide();$('#conferror').hide();
        $('#sexerror').show();
        $('#emailerror').hide();
        $('#adderror').hide();
        $('#moberror').hide();
        $('#passerror').hide();
        $('#sexerror').text('specify your gender').fadeOut(3000);
        $('#sexerror').css('color','red');

      }
      
      else if(!email.match(mailFormat)){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').show();$('#conferror').hide();
        $('#moberror').hide();
        $('#adderror').hide();
        $('#passerror').hide();
        $('#emailerror').text('please enter the valid email ').fadeOut(3000);
        $('#emailerror').css('color','red');
      }
      else if(add == ''){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').hide();$('#conferror').hide();
        $('#moberror').hide();
        $('#adderror').show();
        $('#adderror').text('please enter the address').fadeOut(3000);
        $('#adderror').css('color','red');
          
      }
      else if(mobile==''){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').hide();$('#conferror').hide();
        $('#passerror').hide();
        $('#moberror').show();
        $('#moberror').text('Please Enter The Number').fadeOut(3000);
        $('#moberror').css('color','red');

      }
      
      else if(isNaN(mobile)){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#passerror').hide();
        $('#emailerror').hide();$('#conferror').hide();
        $('#moberror').show();
        $('#moberror').text('Numbers Only').fadeOut(3000);
        $('#moberror').css('color','red');

      }
      else if(!pass.match(validpass)){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').hide();$('#conferror').hide();
        $('#moberror').hide();
        $('#passerror').show();
        $('#adderror').hide();
        $('#passerror').text(' password should between 6 to 20 characters that contain at least one numeric digit, one uppercase and one lowercase letter.').fadeOut(3000);
        $('#passerror').css('color','red');
      }
      else if(confirm != pass ){
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').hide();
        $('#moberror').hide();
        $('#passerror').hide();$('#conferror').show();
        $('#adderror').hide();
        $('#conferror').text('Password does not match').fadeOut(3000);
        $('#conferror').css('color','red');
         

      }
      else {
        $('#nameerror').hide();
        $('#sexerror').hide();
        $('#emailerror').hide();
        $('#moberror').hide();
        $('#passerror').hide();$('#conferror').hide();
        $('#adderror').hide();
        $('#success').show();
        $('#success').text('Saved').fadeOut(3000);
        $('#success').css('color','green');

      }
      
        

    });
})