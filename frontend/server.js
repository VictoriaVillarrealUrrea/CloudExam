//Creamos ruta.
const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS
url = "https://toneanalyzer-victoriavillarrealnew-rested-bushbuck-lf.mybluemix.net/analyze"; // URL DE CF /ANALYZE es la ruta creada
app.use(express.json);
let container = document.getElementById('#container'); //Practica3
//Document is not
//window.addEventListener('container', getPostResult, false);

//SERVER
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on port: %d', port);
});

app.get('/', (req, res) => {
    res.send('Hi, este es el frontend del examen de cloud de Victoria Villarreal, saludos!');
});

//EVENT LISTENERS
container.addEventListener('Success', function(a) { //Nombre del boton practica 3
    let br = ["bad request"];
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: container.text.value //exampleFormControlTextarea1 cambio de nombre
        })
    }
    data = GetResponse(url, options);
    console.log(data);
    if (data.status == 200) {
        result = data.result;
        div = `<div><p>${JSON.stringify(result.document_tone)}</p><p>${JSON.stringify(result.sentences_tone)}</p></div>`;
        console.log(div)
        document.querySelector('#Success').innerHTML = div;
    } else {
        res.status(400).send(br);
    }
});

async function GetResponse(url, options) {
    res = await fetch(url, options);
    return await res.json();
};