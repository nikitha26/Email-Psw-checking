function myfunction(){
    var x = document.getElementById("demo").value;
    //Email checking
    var email = x.includes('@');
    if(email)
    {
        document.getElementById('emailerror').innerHTML = "Valid Email";

    }
    else{
        document.getElementById('emailerror').innerHTML = "Invalid Email";
    }


    //Password checking
    var y = document.getElementById("psw").value;  
    var len = y.length;
    if(len<6){
        document.getElementById('pswerror').innerHTML = "Please Enter atleast 6 characters";
    }
    else{
        document.getElementById('pswerror').innerHTML = "Valid Password"
    }

}


