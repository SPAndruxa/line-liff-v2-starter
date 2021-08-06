console.log("liff life");
let express = require('express');
let app = express();
let port = process.env.PORT || 5000;
let myLiffId = process.env.MY_LIFF_ID || "1655628107-yK6V4JpA";
let corezoid_url = process.env.corezoid_url;
let login = process.env.login;
let secret = process.env.secret;
let processId = process.env.processId;
let http_request = require('request');
let hexSha1Lib = require('./hex_sh1');
let bodyParser = require('body-parser');
console.log(myLiffId, corezoid_url, login, secret, processId)
app.use(express.static('public'));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.get('/send-id', function(req, res) {
    console.log("id - ", myLiffId)
    res.json({id: myLiffId});
});

app.post('/send-corezoid', function(request, response) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    sendRequestToCorezoid(request.body, login, secret, processId, function (res) {
    try {
            res_cz = JSON.parse(res).ops[0].data;
            code_cz = 200;
    }
    catch {
    }
        response.status(code_cz).send(res_cz);
    });
});

app.post('/test-close', function(request, response) {
    console.log("/test-close")
    console.log(request)
    let res_cz = { "error": "ok" };
    let code_cz = 200;
    var liff = JSON.parse(request.body);
    try {
        console.log("closeWindow")
            liff.closeWindow();
    }
    catch (error) {
        console.log(error.message)
        res_cz = { "error": error.message };
    }
    
    response.status(code_cz).send(res_cz);
});


app.listen(port, () => console.log(`app listening on port ${port}!`));

function generateRequest(timeout = 60, conv_id = null, data = null) {
    if (conv_id !== null && data !== null) {
        let tmp_request = {
            "timeout": timeout,
            "ops": [{
                "type": "create",
                "obj": "task",
                "ref": "line_" + data.userId,
                "conv_id": conv_id,
                "data": data
            }]
        };
        console.log("tmp_request", tmp_request);
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
        let answer = base_url + `${login}/${unix_time}/${sign_data}`;
        return answer;
    } else {
        return '';
    }
}
function sendRequestToCorezoid(original_request = null, login, secret, conv_id, callback) {
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

