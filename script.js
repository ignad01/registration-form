function submit(){
    let user = document.getElementById("user").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let cnfpassword = document.getElementById("cnfPassword").value;

    if(user =="" || user.length < 3){
            document.getElementById("userSpan").style.visibility = "visible";
            document.getElementById("user").style.border = "1px solid red";
        }
    else{
            document.getElementById("user").style.border = "1px solid rgb(50, 226, 50)";
            document.getElementById("userSpan").style.visibility = "hidden";
        }
    if(password=="" || email.indexOf('@') === -1){
        document.getElementById("emailSpan").style.visibility = "visible";
        document.getElementById("mail").style.display = "1px solid red";
    }
    else{
        document.getElementById("mail").style.border = "1px solid rgb(50, 226, 50)";
        document.getElementById("emailSpan").style.visibility = "hidden";
    }
    if(password.length < 6 || password == ""){
        document.getElementById("passwordSpan").style.visibility = "visible";
        document.getElementById("password").style.display = "1px solid red";
    }
    else{
        document.getElementById("password").style.border = "1px solid rgb(50, 226, 50)";
        document.getElementById("passwordSpan").style.visibility = "hidden";
    }
    if(cnfpassword == "" || cnfpassword != password){
        document.getElementById("cnfSpan").style.visibility = "visible";
        document.getElementById("cnfPassword").style.display = "1px solid red";
    }
    else {
        document.getElementById("cnfPassword").style.border = "1px solid rgb(50, 226, 50)";
        document.getElementById("cnfSpan").style.visibility = "hidden";
    }
} 
document.getElementById("userSpan").style.visibility = "hidden";
document.getElementById("emailSpan").style.visibility = "hidden";
document.getElementById("passwordSpan").style.visibility = "hidden";
document.getElementById("cnfSpan").style.visibility = "hidden";
document.getElementById("submit").onclick = function(){
    submit();
};
const form = document.getElementById("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
});