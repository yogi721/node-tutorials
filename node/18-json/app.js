var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'yogi721',
        job: 'senior web dev',
        age: 99
    };

    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');