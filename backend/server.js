dovtenv = require('dotenv');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
//Creamos ruta.
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS

const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server running on port: %d', port);
});
dovtenv.config();

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.APIKEY,
    }),
    serviceUrl: process.env.URL,
});

app.post('/analyze', (req, res) => {
    const text = 'Team, I know that times are tough! Product ' +
        'sales have been disappointing for the past three ' +
        'quarters. We have a competitive product, but we ' +
        'need to do a better job of selling it!';

    /*     Hay que cambiarlo por lo del post
     
     const toneParams = {
         toneInput: { 'text': text },
         contentType: 'application/json',
     };

     //async function callingPost(res, text) {*/

    const toneParams = {
        toneInput: {
            'text': text
                //'autor':autor
        },
        contentType: 'application/json',
    };
    /*const toneParams = {
        toneInput: { 'text': text },
        contentType: 'application/json',
    };*/

    toneAnalyzer.tone(toneParams)
        .then(toneAnalysis => {
            tono = JSON.stringify(toneAnalysis, null, 2);
            res.send(tono);
            console.log(tono);
        })
        .catch(err => {
            console.log('error:', err);
            res.send(err);
        })
        //};
});

app.get('/', (req, res) => {
    res.send('Anybody?');
});
module.exports = server;