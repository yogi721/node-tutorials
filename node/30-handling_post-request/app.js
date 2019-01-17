var express = require('express');
var bodyParser = require('body-parser'); // body-parser
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); 

app.get('/', function(req, res){
    res.render('home');
});

// use urlencodedParser
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    
    res.render('contact-success', {data: req.body});
});

app.get('/contact', function(req, res){

    res.render('contact', {qs:req.query});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 40, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

