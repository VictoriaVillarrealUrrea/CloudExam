//Creamos ruta.
//const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS
//url = "https://toneanalyzer-victoriavillarrealnew-rested-bushbuck-lf.mybluemix.net/analyze"; // URL DE CF /ANALYZE es la ruta creada
app.use(express.json());
//let container = document.getElementById('#container'); //Practica3
//Document is not
//window.addEventListener('container', getPostResult, false);
app.use(express.static(__dirname + "/")); //Practica 4 example
//SERVER
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on port: %d', port);
});

/*app.get('/', (req, res) => {
    res.send('Hi, este es el frontend del examen de cloud de Victoria Villarreal, saludos!');
});*/