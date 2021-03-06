var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
    var data = {age: 40, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

