const express = require('express');
const app = express();

app.get('/product-list', function (request, response) {

    response.send(' Hola Mundo!!!!');
});

app.listen(3000, function () {
    console.log('El server esta esta UP and Running');
})


/*
Comandos HTTP:
GET : Sirve para leer o ingresar pedidos en el server
POST : Sirve poner datos o pedidos en el servidor (Mostrar)
PUT : Actualiza
DELETE :

------

app.post('/product-list', function(req,res){

})

app.put('/product-list', function(req,res){

})

app.delete('/product-list', function(req,res){

})
*/