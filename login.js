var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt === 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
function submit_by_id() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
document.getElementById("form_id").submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Id : " + document.getElementById("form_id").getAttribute("id") + "\n\n Form Submitted Successfully......");
}
}

// Submit form with name function.
function submit_by_name() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByName('form_name');
x[0].submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Name : " + document.getElementById("form_id").getAttribute("name") + "\n\n Form Submitted Successfully......");
}
}

// Submit form with class function.
function submit_by_class() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByClassName("form_class");
x[0].submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Class : " + document.getElementById("form_id").getAttribute("class") + "\n\n Form Submitted Successfully......");
}
}

// Submit form with HTML <form> tag function.
function submit_by_tag() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByTagName("form");
x[0].submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Tag : <form>\n\n Form Submitted Successfully......");
}
}

// Name and Email validation Function.
function validation() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if (name === '' || email === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
return false;
} else {
return true;
}
}
 