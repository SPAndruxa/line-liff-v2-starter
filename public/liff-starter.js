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

function goToBot(){
    liff.openWindow({
      url: "https://line.me/R/ti/p/@579psxyw?from=page"
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
        var url = 'https://core.dev.corezoidhubpmi.com/api/1/json/public/2167/a46180adc6a91f1a63aae34981a4057e870f8560';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'no-cors',
          body: JSON.stringify(e)
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
    } else if (data.type === "successful") {
        goToBot()
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
