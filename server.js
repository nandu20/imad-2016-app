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
var articles ={
     'article-one' : {
    title:'Article One | Nandakumar ',
    heading:'Article One',
    date:'Sep 5,2016 ',
    content:`
    <p>
                This is the content of my First Article
            </p>
              <p>
                This is the content of my First Article
            </p>
              <p>
                This is the content of my First Article
            </p>`
     },
     'article-two' :{
      title:'Article Two | Nandakumar ',
    heading:'Article Two',
    date:'Sep 5,2016 ',
    content:`
    <p>
                This is the content of my second Article
            </p>
              <p>
                This is the content of my second Article
            </p>
              <p>
                This is the content of my second Article
            </p>`
     },
     'article-three':{
               title:'Article Three | Nandakumar ',
    heading:'Article Three',
    date:'Sep 5,2016 ',
    content:`
    <p>
                This is the content of my third Article
            </p>
              <p>
                This is the content of my third Article
            </p>
              <p>
                This is the content of my third Article
            </p>`
     
     },
    
};
function createTemplate (data){
    var title = data.title
    var heading = data.heading
    var date = data.date
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
     <title>
        ${title}
     </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>
            <a href ='\'> Home</a>
        </div>
        <hr/>
        <h3>
          ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
        ${content}
        </div>
            </body>
</html>
`;
return htmlTemplate;

}
    
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));

});
    
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
  res.send(createTemplate(articleOne));
});
app.get('/articles/:articleName', function (req, res) {
    var articleName = req.params.articleName;
     pool.query('SELECT * FROM article WHERE title =' + req.params.articleName +'',function(err,result){
         if(err){
             res.status(500).send(err,tostring());
         }else{
             vararticleData = result.rows[0];
          res.send(createTemplate(articleData));
         }
     });
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
var names=[];
app.get('/submit-name',function(req,res){
    
    var name =req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
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
