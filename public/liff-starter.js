window.onload = function() {
    const useNodeJS = true;   // if you are not using a node server, set this value to false
    const defaultLiffId = "";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "";

    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                alert("Error init");
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};

function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {

    } else {
        initializeLiff(myLiffId);
    }
}

function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login();
            } else {
                //document.getElementById("regOrLogin").hidden = false;                
                liff.getProfile().then(profile => {
                    userId = profile.userId;
                    fetch('/send-sync-corezoid', {
                        method:"POST",
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    }).then(function(reqResponse) {
                        return reqResponse.json();
                    }).then(function(jsonResponse) {
                        console.log(jsonResponse)
                        checkTypeAndGoNextStep(jsonResponse);
                    }).catch(function(error) {
                        console.log(error)
                    });
                    ///
                }).catch((err) => {
                  console.log('error', err);
                });
            }
        })
        .catch((err) => {
            alert("Error initializeApp")
        });
}

function redirectOnUrl(url){
    liff.openWindow({
      url: url
    });
}

function showScreen(startScreen){
  gigya.accounts.showScreenSet({
    screenSet:'DCE 2.0 - RegistrationLogin_V2',
    lang:'es',
    startScreen:startScreen,
    onAfterSubmit:function(e){
        delete e.response.requestParams.customLang;
        console.log(e)
        
        e.chat_id_hax = urlParams.id;
        e.sup = urlParams.sup;
        e.userId = userId;///send-corezoid-webhook
        fetch('/send-corezoid-webhook', {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        }).then(function(reqResponse) {
            return reqResponse.json();
        }).then(function(jsonResponse) {
            if(jsonResponse.screen === "Registration_Web_LINE"){
                document.getElementById("regOrLogin").hidden = true;
                document.getElementById("resultStat").hidden = false;
                document.getElementById("resultStat").innerHTML = `An email has been sent to your mail ${jsonResponse.response.user.email} to complete the registration. Please complete the registration.`;
            } else if (jsonResponse.screen === "Login_Web"){
                alert(jsonResponse.response.UID);
                fetch('/get-user-profile', {
                    method:"POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({UID:jsonResponse.response.UID})
                }).then(function(reqResponse) {
                    return reqResponse.json();
                }).then(function(jsonResponse) {
                    
                    console.log(jsonResponse)
                }).catch(function(error) {
                    console.log(error)
                });
            }
            console.log(jsonResponse)
        }).catch(function(error) {
            console.log(error)
        });
    }
  });
}

function checkTypeAndGoNextStep(data) {
    if (data.type === "nothing" || data.type === "verified" || data.type === "loggedin") {
        document.getElementById("wait").hidden = true;
        document.getElementById("regOrLogin").hidden = false;
        document.getElementById("contentText").innerHTML = data.body;
    } else if (data.type === "hav") {
        document.getElementById("wait").hidden = true;
        document.getElementById("formRedirect").hidden = false;
        (function myLoop(i) {
            setTimeout(function () {
                console.log();
                document.getElementById("timer").innerHTML = i;
                if (--i >= 0) {
                    myLoop(i);
                } else {
                    console.log("END");
                    redirectOnUrl(data.url);
                }      //  decrement i and call myLoop again if i > 0
            }, 1000);
        })(6 - 1);
    } else if (data.type === "successful") {
        redirectOnUrl(data.url);
    } else {
        alert("Unknown error")
    }
}

var urlParams = window.location.search.replace('?','').split('&').reduce(
    function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
    },
    {}
);

let userId = "";
