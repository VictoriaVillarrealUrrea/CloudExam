//Creamos ruta.
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS
url = "https://toneanalyzer-victoriavillarrealnew-rested-bushbuck-lf.mybluemix.net/analyze"; // URL DE CF /ANALYZE es la ruta creada

let container = document.querySelector('#container'); //Practica3
app.use(express.json);

//SERVER
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on port: %d', port);
});

app.get('/', (req, res) => {
    res.send('Hi, este es el frontend del examen de cloud de Victoria Villarreal, saludos!');
});

//EVENT LISTENERS
container.addEventListener('Success', (a) => ({ //Nombre del boton

}));