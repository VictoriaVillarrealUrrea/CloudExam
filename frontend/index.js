//Creamos ruta.
//const express = require('express');
//const app = express();
//const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS
url = "https://toneanalyzer-victoriavillarrealnew-rested-bushbuck-lf.mybluemix.net/analyze"; // URL DE CF /ANALYZE es la ruta creada
//app.use(express.json);
//Document is not
boton = document.getElementById("successbtn");
container = document.getElementById("container");
console.log(boton);
//window.addEventListener('container', getPostResult, false);
//EVENT LISTENERS
boton.addEventListener('click', function(a) { //Nombre del boton practica 3

    GetResponse();

    /*let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        mode: 'no-cors',
        body: JSON.stringify({
            text: texto.value
        })
    };*/


});

async function GetResponse() {
    console.log("Aqui 1 entrando")
    let br = ["bad request"];
    console.log("Aqui 1 entrando al get responses")
    texto = document.getElementById("textbox").value;

    console.log(texto.value)
    res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ text: texto }) // body data type must match "Content-Type" header
    });
    console.log("RESSSSS");
    console.log(res);
    console.log("Aqui 1 getresponses")
    data = res.json()
    console.log("RESssssssssssssssssSSSS");
    console.log(data);
    if (data.status == 200) {
        result = res.result;
        div = `<div><p>${JSON.stringify(result.document_tone)}</p><p>${JSON.stringify(result.sentences_tone)}</p></div>`;
        console.log(div)
        document.getElementById('Success').innerHTML = div;
    } else {
        console.log(br)
            //res.status(400).send(br);
    }
};