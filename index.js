const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use('/', express.static('./public'));

app.use(bodyparser.json());

// app.post()

app.post('/product', function (req,res) {
    let body = res.body;
    console.log('Nuestro contenido desde el FRONTEND:');
    console.log(body)

    res.json({ status: 'ok'})
})

app.listen(3000, function () {
    console.log('El server esta esta UP and Running');
});


// Ejercicio
// Create endpoint /product 
// return [{ name: 'Product', description:'Lorem Ipsum....'}]
/*
app.use('/', express.static('./public'));

app.listen(3000, function () {
    console.log('El server esta esta UP and Running');
});
*/
// primer tarea realizada
// Este JS tiene configuracion del server

