var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); 

app.get('/', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){

    // console.log(req.query);   /* we want to pass any data to the view teplate, how to do that? */
    /* we pass data as the following, 
    than in the contact view  we can retrieve the data ass
    <%= qs.dept %> for departement or
    <%= qs.person %> for person
    we can populate the data from query with form. 
    look at contact.js in the view folder
    */
    res.render('contact', {qs:req.query});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 40, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

