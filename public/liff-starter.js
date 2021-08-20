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
                // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
                liff.login();
            } else {
                liff.openWindow({
                  url: "https://line.me/R/ti/p/@579psxyw?from=page"
                });
                /*if(liff.isInClient()){
                
                }*/
            }
        })
        .catch((err) => {
            alert("Error initializeApp")
        });
}


 function showScreen(startScreen){
    var params = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    var a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
      
  gigya.accounts.showScreenSet({
    screenSet:'DCE 2.0 - RegistrationLogin_V2',
    lang:'es',
    startScreen:startScreen,
    onAfterSubmit:function(e){
        delete e.response.requestParams.customLang;
        console.log(e)
        
        e.chat_id_hax = params.id;
        e.sup = params.sup;
        //document.getElementById('test').value = JSON.stringify(JSON.stringify(params));
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

