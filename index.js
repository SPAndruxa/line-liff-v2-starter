console.log("liff life");
let express = require('express');
let app = express();
let port = process.env.PORT || 5000;
let myLiffId = process.env.MY_LIFF_ID || "1656328523-KD4jnlDk";
let corezoid_url = process.env.corezoid_url;
let login = process.env.login;
let secret = process.env.secret;
let processId = process.env.processId;
let havVerify = process.env.havVerify;
let botLink = process.env.botLink;
let corezoidWebhook = process.env.corezoidWebhook;
let ApiKey = process.env.ApiKey;
let Userkey = process.env.Userkey;
let secretGigya = process.env.secretGigya;
let urlGigya = process.env.urlGigya;
let http_request = require('request');
let hexSha1Lib = require('./hex_sh1');

let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get('/send-id', function(req, res) {
    console.log("id - ", myLiffId)
    res.json({id: myLiffId});
});

app.get('/health-test', function(req, res) {
    res.json(process.env);
});

app.post('/send-sync-corezoid', function(request, response) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    sendSyncRequestToCorezoid(request.body, corezoid_url, login, secret, processId, function (res) {
        try {
            res_cz = JSON.parse(res).ops[0].data;
            code_cz = 200;
            if (!res_cz.userProfile.guid) {
                //Показываем кнопки входа и регистрации + контекст с просьбой зарегится или входа
                res_cz.type = "nothing";
                res_cz.body = "";
            } else {
                var email = res_cz.userProfile.email;
                if (!res_cz.userProfile.verified) {
                    //Показываем кнопки входа и регистрации + Контекст с просьбой пройти верификацию на почте или войти или зарегистрироватся
                    res_cz.type = "verified";
                    res_cz.body = `Email ${email} registered but verification failed. Please complete the registration`;
                } else if (!res_cz.userProfile.loggedin) {
                    //Показываем кнопки входа и регистрации + Контекст что прошла успшная регистрация
                    res_cz.type = "loggedin";
                    res_cz.body = `Successful registration by Email ${email}`;
                } else if (!res_cz.userProfile.hav) {
                    //Показываем контент с информацией о том что будет редирект для прохождения HAV + таймер и редирект
                    res_cz.type = "hav";
                    res_cz.body = `to add to the official account, we ask you to confirm your age`;
                    res_cz.url = havVerify;
                } else {
                    res_cz.type = "successful";
                    res_cz.url = botLink;
                }
            }
            
        } catch {}
        response.status(code_cz).send(res_cz);
    });
});

app.post('/send-corezoid-webhook', function(request, response) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    sendOnWebhook(request.body, function(res) {
        try {
            res_cz = res;
            code_cz = 200;
        } catch (e) {
            console.log("e.message - ",e.message)
        }
        response.status(code_cz).send(res_cz);
    });
});

app.post('/log', function(request, response) {
    console.log("/log --- ",request);
    let res_cz = { "ok": "ok" };
    let code_cz = 200;
    response.status(code_cz).send(res_cz);
});

app.post('/get-user-profile', function(request, response) {
    let res_cz = { "error": "bad_answer" };
    let code_cz = 500;
    getUserProfile(request.body.UID, function(res) {
        try {
            console.log("botLink - ",botLink);
            console.log("havVerify - ",havVerify);
            res_cz = res;
            res_cz.botLink = botLink;
            res_cz.havVerify = havVerify;
            console.log("res - ",res);
            code_cz = 200;
        } catch (e) {
            console.log("e.message 2 - ",e.message)
        }
        response.status(code_cz).send(res_cz);
    });
});

function sendSyncRequestToCorezoid(data, url, login, secret, processId, callback){
    let unix_time = parseInt(new Date().getTime() / 1000);
    let content = JSON.stringify({
      "timeout": 30,
      "ops": [{
          "type": "create",
          "obj": "task",
          "conv_id": processId,
          "data": data
      }]
    });
    let signatura = hexSha1Lib.hex_sha1(unix_time + secret + content + secret);

    http_request({
        headers: {
            'content-type': 'application/json; charset=utf8',
            'accept-encoding': '*'
        },
        uri: `${url}${login}/${unix_time}/${signatura}`,
        body: content,
        method: 'POST'
      }, function (err, res, body) {
        return callback(body);
      });
}

function sendOnWebhook(data, callback) {
    http_request({
        headers: {
            'content-type': 'application/json; charset=utf8',
            'accept-encoding': '*'
        },
        uri: corezoidWebhook,
        body: JSON.stringify(data),
        method: 'POST'
    }, function (err, res, body) {
        var objReturn = Object.assign(JSON.parse(body),data);
        return callback(objReturn);
    });
}

function getUserProfile(UID, callback) {
    var options = {
      'method': 'POST',
      'url': urlGigya,
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'ApiKey': ApiKey,
        'Userkey': Userkey,
        'secret': secretGigya,
        'UID': UID
      }
    };
    http_request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      return callback(response.body);
    });
}
