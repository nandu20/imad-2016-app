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
var submit =document.getElementById('submit-btn');

submit.onclick = function() {
      
      
       var nmes = ['name1','name2','name3','name4'];
       var list= '';
        for (var i=0;i<names.length;i++)
        {
          // list += '<li>' + names[i] + '</li>';
            list +=  names[i] +'<br>';
         }
	    var ul= document.getElementById('namelist');
        ul.innerHTML = list;
         
    
  
};
 
