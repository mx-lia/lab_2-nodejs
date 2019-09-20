var http = require('http');
var fs = require('fs');

const express = require("express");
const app = express();

app.get("/html", function(request, response){
    let html = fs.readFileSync('./index.html');
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(html);
});

app.get("/png", function(request, response){
    const fname = './pic.png';
    let jpg = null;

    fs.stat(fname, (err, stat)=>{
        if(err){console.log('error:',err);}
        else {
            jpg = fs.readFile(fname, (err, data)=>{
                response.contentType('image/jpeg');
                response.contentLenght = stat.size;
                response.end(data, 'binary');
            });
        }
    });
});

app.get("/api/name", function(request, response){
    response.setHeader('Content-Type', 'text/plain');
    response.end('Maximchikova Yuliya Sergeevna');
});

app.get("/xmlhttprequest", function(request, response){
    let html = fs.readFileSync('./xmlhttprequest.html');
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(html);
});

app.get("/fetch", function(request, response){
    let html = fs.readFileSync('./fetch.html');
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(html);
});

app.get("/jquery", function(request, response){
    let html = fs.readFileSync('./jquery.html');
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(html);
});

app.get("/", function(request, response){
    response.statusCode = 404;
    response.end();
});

app.listen(5000);

console.log('Server running at http://localhost:5000/');