const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
let request = require('request');

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    let options = {
        'method': 'POST',
        'url': 'https://www.corezoid.com/api/1/json/public/891766/d762277ea79fc5652f7166e51412768cd2e28928',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: myLiffId})
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json({id: myLiffId});
    });
});




app.listen(port, () => console.log(`app listening on port ${port}!`));
