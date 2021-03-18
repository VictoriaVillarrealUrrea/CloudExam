dovtenv = require('dotenv');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
//Creamos ruta.
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; //MISMA DE LAS PRACTICAS

ak = "9Vy6tn-wJEoH8gHvong6x-1P06sWqMG8gLJkHx373iOJ";
url = "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/cd2400d1-822a-40da-aa37-8ce2549076cf";
dovtenv.config();
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: ak,
    }),
    serviceUrl: url,
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
app.listen(port, () => {
    console.log(port);
});
app.get('/', (req, res) => {
    res.send('Anybody?');
});