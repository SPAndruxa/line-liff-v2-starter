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
    if (myLiffId) {
        initializeLiff(myLiffId);
    }
}

function initializeLiff(myLiffId) {
    liff.init({
        liffId: myLiffId
    }).then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        } else {
            console.log(urlParams)
            liff.getProfile().then(profile => {
                userId = profile.userId;
                if(urlParams.hasOwnProperty("botType")){
                    document.getElementById("wait").hidden = true;
                    if(urlParams.botType === "login"){
                        showScreen("Login_web_step1_no_registration");
                    } else if(urlParams.botType === "hav"){
                        fetch('/send-sync-corezoid', {
                            method:"POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(profile)
                        }).then(function(reqResponse) {
                            return reqResponse.json();
                        }).then(function(jsonResponse) {
                            if(jsonResponse.userProfile.hav){
                                redirectOnUrl("https://line.me/R/ti/p/@579psxyw?from=page");
                            } else {
                                redirectOnUrl("https://www.dev.iqos.com/tw/zh/verify.html");
                            }
                        }).catch(function(error) {
                            console.log(error)
                        });
                    } else {
                        showScreen("Registration_Web_LINE");
                    }
                } else {
                    fetch('/send-sync-corezoid', {
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    }).then(function(reqResponse) {
                        return reqResponse.json();
                    }).then(function(jsonResponse) {
                        checkTypeAndGoNextStep(jsonResponse);
                    }).catch(function(error) {
                        console.log(error)
                    });
                }
            }).catch((err) => {
                console.log('error', err);
            });
        }
    }).catch((err) => {
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
    onAfterScreenLoad:function(){
         try {
          document.getElementByID("data.socmed_accounts.account_ID").value = userId;
          console.log("data.socmed_accounts.account_ID - ok");
        } catch (error) {
          console.log("data.socmed_accounts.account_ID - Error - ", error.message);
        }
        
        
        /*document.getElementByID("data.socmed_accounts.account_ID").value = userId;
        document.getElementByID("data.socmed_accounts.social_channel_refcode").value = "LINE";
        document.getElementByID("data.registration.registration_channel_refcode").value = "APPINAPP";
        document.getElementByID("data.registration.registration_app_id").value = "LINE_APP";
        document.getElementByID("data.registration.registration_campaign_id").value = urlParams.registration_campaign_id;
        
        document.getElementByID("gigya-socmedID").value = userId;
        document.getElementByID("gigya-registration-campaignID").value = urlParams.registration_campaign_id;*/
    },
    onAfterSubmit:function(e){
        delete e.response.requestParams.customLang;
        
        e.chat_id_hax = urlParams.id;
        e.sup = urlParams.sup;
        e.userId = userId;
        fetch('/send-corezoid-webhook', {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        });
        if(e.response.status === "OK"){
            redirectOnUrl("https://line.me/R/ti/p/@579psxyw?from=page");
        }
    }
  });
}

function checkTypeAndGoNextStep(data) {
    console.log(data);
    if (data.userProfile.hav && data.userProfile.guid !== "") {
        fetch('/send-corezoid-webhook', {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id_hax: urlParams.id,
                sup: urlParams.sup,
                userId: userId,
                screen: "returnToBot"
            })
        });
        redirectOnUrl("https://line.me/R/ti/p/@579psxyw?from=page");
    } else if (data.userProfile.guid !== ""){
        fetch('/send-corezoid-webhook', {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id_hax: urlParams.id,
                sup: urlParams.sup,
                userId: userId,
                screen: "chekHav"
            })
        });
        redirectOnUrl("https://www.dev.iqos.com/tw/zh/verify.html");
    } else {
        document.getElementById("wait").hidden = true;
        document.getElementById("regOrLogin").hidden = false;
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

    ///////////////////
//     fetch('/log', {
//         method:"POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({res:jsonResponse.response.UID})
//     });
    ////////////////////
