
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
     var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                  var names = request.responseText   ;
                  names = JSON.parse(names);
    var list = '';
        for(var i= 0; i<names.length;i++){
    list += '<li>'  + names[i] + '</li>' ;
    }
      
    var ul = document.getElementById('namelist');
    ul.innerHTML = list ;        
            }
        }
    };
    var nameInput = document.getElementById('name');
var name = nameInput.value;
    request.open('GET','http://nandu20.imad.hasura-app.io/article-one/submit-name?name='+name,true);
     request.open('GET','http://nandu20.imad.hasura-app.io/article-two/submit-name?name='+name,true);
      request.open('GET','http://nandu20.imad.hasura-app.io/article-three/submit-name?name='+name,true);
    request.send(null);
    
    
  

};
