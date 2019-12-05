function validation(){
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
var confirmpass=document.getElementById('confirmpass').value;
var number=document.getElementById('number').value;
var email=document.getElementById('email').value;



if (username==""){
document.getElementById('user').innerHTML=" ** please fill the user name field";
return false;    
}

if((username.length <=2) || (user.length>20)){
    document.getElementById('user').innerHTML=" ** user length must be between 2 to 20";
    return false;      
}

if (!isNaN(username)){
    document.getElementById('user').innerHTML=" ** Only characters allowed";
    return false;      

}


if (password==""){
    document.getElementById('pass').innerHTML=" ** please fill the password field";
    return false;    
    }
    if((password.length <=5) || (password.length>20)){
        document.getElementById('pass').innerHTML=" ** password length must be between 2 to 20";
        return false;      
    }

    if (password!=confirmpass){
        document.getElementById('cpass').innerHTML=" ** password are not matching";
        return false;      

    }
    


    if (confirmpass==""){
        document.getElementById('cpass').innerHTML=" ** please fill the confirm password field";
        return false;    
        }




        if (number==""){
            document.getElementById('tel').innerHTML=" ** please fill the mobile number field";
            return false;    
            }

        if (isNaN(number)){
            document.getElementById('tel').innerHTML=" ** user must filled valid number";
            return false;    
    
        }

        if (number.length !=10){
            document.getElementById('tel').innerHTML=" ** number must be 10 digits";
            return false;    
      
        }

            if (email==""){
                document.getElementById('mail').innerHTML=" ** please fill the email field";
                return false;    
                }
        if (email.indexOf('@') <=0){
            document.getElementById('mail').innerHTML=" ** @ invalid position";
            return false;    

        }
        if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
            document.getElementById('mail').innerHTML =" ** . Invalid Position";
            return false;
        }
}