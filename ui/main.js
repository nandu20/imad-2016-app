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
var submit =document.getElementById('submit-btn');
if (submit != undefined) {
submit.onclick = function() {
  
  var request = new XMLHttpRequest();
// capture the response and store in a variable
  request.onreadystatechange = function() {
     if (request.readyState === XMLHttpRequest.DONE)
      {
        
      if (request.status===200)
       { 
           
	    var names=request.responseText;
	    names=JSON.parse(names);
	    var list='';
        for (var i=0;i<names.length;i++)
        {
          // list += '<li>' + names[i] + '</li>';
            list +=  names[i] +'<br>';
         }
	    var p = document.getElementById('namelist');
        p.innerHTML = list;
         }
   }        
  
};
    var nameInput=document.getElementById('name');
    var name1=nameInput.value;
    
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name=' + name1 ,true);
    request.send(null);
 }; 
 
} 
// making comments
 
var submit=document.getElementById("comment-btn");
if (submit !==undefined) {
submit.onclick = function(){

var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist='';
        for (var i=0;i<comnts.length;i++)
         {
          //comlist += '<li>' + comnts[i] + '</li>';
           comlist += comnts[i] + '<br>';
           var p =document.getElementById("show-comment");
           p.innerHTML= comlist;
          }
        }
  }
};

   // make the request
  
   var comment=document.getElementById('comment');
   var txt =comment.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-comment?comment=' +txt, true);
    request.send(null); 
}; 
}
