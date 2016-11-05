var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require("bodyParser");
var config = {
    user:"nandu20",
    database:"nandu20",
    host:"db.imad.hasura-app.io",
    port:"5432",
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
 app.get('/counter',function(req,res){
     
 });

var counter = 0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
}); 
function createTemplate (data) {""}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


function hash(input,salt) {
     var hashed =crypto.pbkdf2Sync(input,salt,10000, 512 ,'sha512');
     return ["pbkdf2","10000" ,salt ,hashed.toString('hex')].join('$');
}


    app.get('/hash/:input', function(req,res){
        var hashedString= hash(req.params.input,'This is some random string');
        res.send(hashedString);
        
    
});

app.get('/create-user',function(req,res){
    var username = req.body.username;
    var passwor = req.body.password;
    var salt = crypto.getRandomBytes(128).tostring('hex');
    var dbstring =  hash(password,salt);
    pool.query('INSERT INTO " user" (username,password) VALUES ($1,$2)',[username,dostring],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
         res.send("user successfully created "+ username );
        }
    });
    
});
    
app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));

});
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));

});
app.get('/article/:article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});//
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
