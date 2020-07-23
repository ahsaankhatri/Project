function Enter()
{
var username = document.getElementById("user_name").value;
var password = document.getElementById("passd").value;
if ( username == "ahsaan" && password == "12345678")
{
alert ("Login successfully!");
window.location = "addData.html";
}
else
{
alert("Incorrect Username or Password!");
window.location = "Login.html"
}
}