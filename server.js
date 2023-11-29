var express = require('express');
var app = express();
var fs = require("fs");
const axios = require('axios');

var bodyParser = require('body-parser');
app.use(bodyParser.json());



function soma (a , b){
   return a + b;
}

function subtração (a , b){
   return a - b;
}

function multiplicar ( a , b ){
   return a * b;
}

function dividir ( a , b ){
   return a / b;
}

app.use(express.json());







app.get('/soma', function (req ,res){
   var body = req.body;

   var resultado = soma(body.a, body.b);

   res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
})

app.get('/subtracao', function (req ,res){
   var body = req.body;

   var resultado = subtração(body.a, body.b);

   res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
})

app.get('/multiplica', function (req ,res){
   var body = req.body;

   var resultado = multiplicar(body.a, body.b);

   res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
})

app.get('/dividir', function (req ,res){
   var body = req.body;

   var resultado = dividir(body.a, body.b);

   res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
})

// MANDANDO UM REQUEST VIAS AXIOS

axios.get('http://localhost:3000/soma', { data: { a: 5, b: 3 } })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

axios.get('http://localhost:3000/subtracao' , { data: { a: 5, b: 3 } })
.then(response => console.log(response.data))
.catch(error => console.error(error));

// PORTA DO BACK -> 3000

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
