var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;


var config = {
    user:'nandu20',
    database:'nandu20',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);

app.get('/test-db',function(req,res){
    
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
var counter = 0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
}); 
//function createTemplate (data) {""}
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));

});
var names=[];
app.get('/submit-name',function(req,res){
    
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/register', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'register.html'));

});
app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));

});
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));

});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});
app.get('/ui/git.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'git.png'));
});
app.get('/ui/youtube.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'youtube.png'));
});

app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});
app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
}); 



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
