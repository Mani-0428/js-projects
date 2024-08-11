function login(){
        var name = document.getElementById("name").value;
        var Password = document.getElementById("pass").value;
        if((name=="Admin" && Password=="Admin")||(name=="User"&& Password=="User"))
        {
            alert("Login SuccesFully");
            return true;
        }
        else if (name!="Admin" || name=="")
        {
            alert("Enter Username or incorrect Username ");
            return false;
        }
        else if (Password!="Admin" || Password=="")
        {
            alert("Enter password or incorrect password ");
            return false;
        }
        else{

        }
    
        
    }
