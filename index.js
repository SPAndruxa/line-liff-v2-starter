const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
let request = require('request');

app.use(express.static('public'));

app.get('/send-corezoid', function(req, res) {
    request(getOptions(req), function (error, response) {
        res.json({result: "success"});
    });
});

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

function getOptions(body){
    let options = {
        'method': 'POST',
        'url': 'https://www.corezoid.com/api/1/json/public/891766/d762277ea79fc5652f7166e51412768cd2e28928',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    return options;
}
