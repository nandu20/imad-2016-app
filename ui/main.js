//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.InnerHtml = counter.toString();
    
}