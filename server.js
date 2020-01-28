const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message',function(req,res){
    console.log(req.query);
    console.log(req.body);
    res.send('lista de mensajes');
});

router.post('/message',function(req,res){
    res.send('Mensaje'+ req.body.text + ' añadido correctamente');
});

//app.use('backNode',express.static('public'))

app.listen(3000)
console.log('la app esta escuchando en http://localhost:3000');
