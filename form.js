function  validate(){
    var username=document.forms["register"] ["uname"].value;
    var key1=document.forms["register"] ["pass1"].value;
    var key2 =document.forms["register"] ["pass2"].value;                                                                                                                                                                                                               
    if(username==""){
        alert("Username should not be empty!")
        return false;
        }
        else if(username.length<4){
            alert("Username should not be less than 4 characters!");
            return false;
            }
     
        if(key1==""){
            alert("password should not be empty!")
            return false;
            }
            else if(key1.length<4){
                alert("password must be atleast 4 characters long!")
                return false;
                }    
            if(key2==""){
                alert("confirm password should not be empty!")
                return false;
                }
                if(key1!=key2){
                    alert("Confirm Password should,t Match!")
                    return false;
                    }
    
    }
