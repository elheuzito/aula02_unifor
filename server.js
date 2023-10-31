var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var body = req.body;
console.log(body);
res.send('via post');

function soma (a , b){
   return a + b;
}

function subtração (a , b){
   return a - b;
}

function multiplicar ( a , b ){
   return a * b;
}

app.use(express.json());

app.post('/api/post-example' , (req, res) => {
   const data = req.body;
   console.log('Dados recebidos:', data);
   res.send('Requisição POST bem-sucedida!');
 }
)

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/soma', function (req ,res){
   var body = req.body;
   var resultado = soma(body.a, body.b);
   res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
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