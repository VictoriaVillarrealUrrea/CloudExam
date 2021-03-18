const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: "9Vy6tn-wJEoH8gHvong6x-1P06sWqMG8gLJkHx373iOJ",
    }),
    serviceUrl: "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/cd2400d1-822a-40da-aa37-8ce2549076cf",
});

const text = 'Team, I know that times are tough! Product ' +
    'sales have been disappointing for the past three ' +
    'quarters. We have a competitive product, but we ' +
    'need to do a better job of selling it!';

const toneParams = {
    toneInput: { 'text': text },
    contentType: 'application/json',
};

toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
        console.log(JSON.stringify(toneAnalysis, null, 2));
    })
    .catch(err => {
        console.log('error:', err);
    });