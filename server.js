var express = require('express');
var app = express();
var fs = require("fs");

function soma (a , b){
   return a + b;
}

function subtração (a , b){
   return a - b;
}

function multiplicar ( a , b ){
   return a * b;
}

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/soma/:valorA/:valorB', function (req ,res){
   const valorA = parseFloat(req.params.valorA);
   const valorB = parseFloat(req.params.valorB);
   if(isNaN(valorA) || isNaN(valorB)){
      res.send("Valores Invalidos");
   } else {
      res.send("Valor da soma A + B é : "+ soma(valorA,valorB));
   }
})

app.get('/subtracao/:valorA/:valorB', function (req ,res){
   const valorA = parseFloat(req.params.valorA);
   const valorB = parseFloat(req.params.valorB);
   if(isNaN(valorA) || isNaN(valorB)){
      res.send("Valores Invalidos");
   } else {
      res.send("Valor da subtracao A - B é : "+ subtração(valorA,valorB));
   }
})

app.get('/multiplica/:valorA/:valorB', function (req ,res){
   const valorA = parseFloat(req.params.valorA);
   const valorB = parseFloat(req.params.valorB);
   if(isNaN(valorA) || isNaN(valorB)){
      res.send("Valores Invalidos");
   } else {
      res.send("Valor da subtracao A * B é : "+ multiplicar(valorA,valorB));
   }
})



app.get('/listUser/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})