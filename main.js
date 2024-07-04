function validate(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var usernameerr = document.getElementById("username-error")
    var passworderr = document.getElementById("password-error")

    if(username=="" ){
        usernameerr.innerHTML = "Please fill the name field!";
        // return false;
       
    }
    else if(password==""){
        passworderr.innerHTML = "Please fill the password field!";
        
        if(password.length < 10){
            usernameerr.innerHTML = "Please Enter a Strong Password"
        }
        else{
            alert("Submitted")
        }
    }

}