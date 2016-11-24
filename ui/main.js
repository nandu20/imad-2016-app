var button = document.getElementById('counter');

button.onclick =function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://nandu20.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
};
var nameInput=document.getElementById('name');
  var name1=nameInput.value;
var submit =document.getElementById('submit_btn');

submit.onclick = function() {
      
      
       var names = ['name1','name2','name3','name4'];
       var list= '';
        for (var i=0;i<names.length;i++)
        {
          list += '<li>' + names[i] + '</li>';
           // list +=  names[i] +'<br>';
         }
	    var ul= document.getElementById('namelist');
        ul.innerHTML = list;
         
    
  
};
 
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
