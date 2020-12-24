const express = require('express')
const app = express()
const routes = require('./routes');

// variable global para definir el puerto para HEROKU, sino existe asume 3000
const port = process.env.PORT || 3000;

// indica la carpeta de dominio publica
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);
});