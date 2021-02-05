const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
let http_request = require('request');
let hexSha1Lib = require('./hex_sh1');
let corezoid_url = "https://sync-api.corezoid.com/";

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
    sendData('/send-id');
});
function sendData(name){
    http_request({
        headers: {
            'content-type': 'application/json; charset=utf8',
            'accept-encoding': '*'
        },
        uri: 'https://www.corezoid.com/api/1/json/public/892927/9dc8c06b960969b40eebf6da1178c8a5b94c57f1',
        body: JSON.stringify({
            "timeout": 30,
            "ops": [{
                "type": "create",
                "obj": "task",
                "conv_id": 892927,
                "data": {
                    "text":name
                }
            }]
        }),
        method: 'POST'
    }, function (err, res, body) {
        return callback(body);
    });
}
//POST
app.post('/send-corezoid-post', function(req, res) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    let login = '41848';
    let secret = 'qoy2Xcpuy5YXs4INJvO69F8mvhLpf7Uv31r5b7Ytk4FKEJ4OBA';
    let processId = '893661';
    sendData('post');
    sendRequestToCorezoid(req, processId, function (response) {
    try {
            res_cz = JSON.parse(response).ops[0].data;
            code_cz = 200;
    }
    catch {
    }
        res.status(code_cz).send(res_cz);
    });
});

//GET
app.get('/send-corezoid-get', function(req, res) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    let login = '41848';
    let secret = 'qoy2Xcpuy5YXs4INJvO69F8mvhLpf7Uv31r5b7Ytk4FKEJ4OBA';
    let processId = '893661';
    console.log("test");
    sendRequestToCorezoid(/*req*/{"x":"x"}, processId, function (response) {
    try {
            res_cz = JSON.parse(response).ops[0].data;
            code_cz = 200;
    }
    catch {
    }
        res.status(code_cz).send(res_cz);
    });
});


app.listen(port, () => console.log(`app listening on port ${port}!`));

function generateRequest(timeout = 60, conv_id = null, data = null) {
    if (conv_id !== null && data !== null) {
        let tmp_request = {
            "timeout": timeout,
            "ops": [{
                "type": "create",
                "obj": "task",
                "conv_id": conv_id,
                "data": data
            }]
        };
        return tmp_request;
    } else {
        return {}
    }
}
function getSignData(unix_time = null, secret = null, content = null) {
    if (unix_time !== null && secret !== null && content !== null) {
        let string = unix_time + secret + content + secret;
        return hexSha1Lib.hex_sha1(string);
    } else {
        return '';
    }
}
function generateUrl(base_url = null, login = null, unix_time = null, sign_data = null) {
    if (base_url !== null && login !== null && unix_time !== null && sign_data !== null) {
        let answer = base_url + `api/1/json/${login}/${unix_time}/${sign_data}`;
        return answer;
    } else {
        return '';
    }
}
function sendRequestToCorezoid(original_request = null, conv_id, callback) {
    sendData('sendRequestToCorezoid');
    if (original_request !== null) {
        let or = original_request;
        let unix_time = parseInt(new Date().getTime() / 1000);
        let content = JSON.stringify(generateRequest(60, conv_id, or));
        let signData = getSignData(unix_time, secret, content);
        let url = generateUrl(corezoid_url, login, unix_time, signData);
        http_request({
            headers: {
                'content-type': 'application/json; charset=utf8',
                'accept-encoding': '*'
            },
            uri: url,
            body: content,
            method: 'POST'
        }, function (err, res, body) {
            return callback(body);
        });
    } else {
        return { 'success': false, 'error': 'Incorrect incoming parameters' }
    }
}
