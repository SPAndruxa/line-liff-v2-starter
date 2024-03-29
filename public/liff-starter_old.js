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
                console.log("reqResponse");
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                
                myLiffId = jsonResponse.id;
                console.log(myLiffId);
                initializeLiffOrDie(myLiffId);
                liff.login({
                    "redirectUri":`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22ds&scope=profile%20openid%20email&nonce=09876xyz`
                });
                /*if (liff.isInClient()) {
                  liff.login({
                    "redirectUri":`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22wds&scope=profile%20openid%20email`
                });
                } else {
                  alert("error")
                }*/
                /*if(!liff.isInClient()){
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

                    console.log("params - ", params)
                   if(params.hasOwnProperty("code")){
                       console.log(liff.getIDToken())
                       liff.sendMessages([
                          {
                            type: 'text',
                            text: 'Hello, World!'
                          }
                        ])
                          .then(() => {
                            console.log('message sent');
                          })
                          .catch((err) => {
                            console.log('error', err);
                          });
                   } else {
                       liff.login({
                        "redirectUri":`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22ds&scope=profile%20openid%20email`
                    });
                       liff.openWindow({
                          url: "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22ds&scope=profile%20openid%20email",
                        });
                   }
                } else {
                    liff.login({
                        "redirectUri":`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22ds&scope=profile%20openid%20email`
                    });
                }*/
                /*if (!liff.isLoggedIn()) {
                    
                    liff.login({
                        "redirectUri":"https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds2w2ds&scope=profile%20openid%20email&nonce=09876xyz"
                    });
                    liff.openWindow({
                      url: "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656328523&redirect_uri=https://liff.line.me/1656328523-KD4jnlDk&state=dds22ds&scope=profile%20openid%20email",
                    });
                }*/
            })
            .catch(function(error) {
                console.log(error);
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function closeBeck(){
    console.log("closeBeck");
    console.log(liff.id);
    liff.openWindow({
        url:'https://learn.javascript.ru/settimeout-setinterval',
        external:false
    });
    //window.open('https://learn.javascript.ru/settimeout-setinterval', '_blank')
    //location.replace('https://learn.javascript.ru/settimeout-setinterval');
    setTimeout(() => liff.closeWindow(), 5000);
    /*fetch('/test-close',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({liffId: liff.id}) 
    })
    .then(function(reqResponse) {
        console.log("closeBeck reqResponse");
    })
    .catch(function(error) {
        console.log(closeBeck);
        console.log(error);
    });*/
}

/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        console.log("noMyLiffId");
    } else {
        console.log("MyLiffId");
        initializeLiff(myLiffId);
    }
}

/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    console.log("start initializeLiff");
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            console.log("start init then");
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            console.log("initializeLiff error");
        });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    console.log("initializeApp");
    displayLiffData();
    displayIsInClientInfo();
    //registerButtonHandlers();
}

/**
* Display data generated by invoking LIFF methods
*/
function displayLiffData() {
console.log("displayLiffData")
console.log(liff.getLanguage());
console.log(liff.getVersion());
console.log(liff.getLineVersion());
console.log(liff.isInClient());
console.log(liff.isLoggedIn());
console.log(liff.getOS());
}

/**
* Toggle the login/logout buttons based on the isInClient status, and display a message accordingly
*/
function displayIsInClientInfo() {
    console.log("displayIsInClientInfo")
    console.log("isInClient", liff.isInClient())
    /*if (liff.isInClient()) {
        document.getElementById('liffLoginButton').classList.toggle('hidden');
        document.getElementById('liffLogoutButton').classList.toggle('hidden');
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
        document.getElementById('shareTargetPicker').classList.toggle('hidden');
    }*/
}

/**
* Register event handlers for the buttons displayed in the app
*/
/*function registerButtonHandlers() {
    // openWindow call
    document.getElementById('openWindowButton').addEventListener('click', function() {
        liff.openWindow({
            url: 'https://line.me',
            external: true
        });
    });

    // closeWindow call
    document.getElementById('closeWindowButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.closeWindow();
        }
    });

    // sendMessages call
    document.getElementById('sendMessageButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "You've successfully sent a message! Hooray!"
            }]).then(function() {
                window.alert('Message sent');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
        }
    });

    // scanCode call
    document.getElementById('scanQrCodeButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.scanCode().then(result => {
                // e.g. result = { value: "Hello LIFF app!" }
                const stringifiedResult = JSON.stringify(result);
                document.getElementById('scanQrField').textContent = stringifiedResult;
                toggleQrCodeReader();
            }).catch(err => {
                document.getElementById('scanQrField').textContent = "scanCode failed!";
            });
        }
    });

    // get access token
    document.getElementById('getAccessToken').addEventListener('click', function() {
        if (!liff.isLoggedIn() && !liff.isInClient()) {
            alert('To get an access token, you need to be logged in. Please tap the "login" button below and try again.');
        } else {
            const accessToken = liff.getAccessToken();
            document.getElementById('accessTokenField').textContent = accessToken;
            toggleAccessToken();
        }
    });

    // get profile call
    document.getElementById('getProfileButton').addEventListener('click', function() {
        liff.getProfile().then(function(profile) {
            document.getElementById('userIdProfileField').textContent = profile.userId;
            document.getElementById('displayNameField').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilePictureDiv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = 'Profile Picture';
            profilePictureDiv.appendChild(img);

            document.getElementById('statusMessageField').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function(error) {
            window.alert('Error getting profile: ' + error);
        });
    });
    
    //sen Data
    document.getElementById('Button').addEventListener('click', function() {
        liff.getProfile().then(function(profile) {
            document.getElementById('wait').style.display = "block";
            setTimeout(() => {
              if (!liff.isInClient()) {
                  sendAlertIfNotInClient();
              } else {
                  fetch('/send-corezoid', {
                        method: 'POST',
                        body: JSON.stringify({
                            id : profile.userId,
                            operator: document.getElementById('operator').value,
                            tel: document.getElementById('tel').value,
                            persId: document.getElementById('persId').value,
                            date: document.getElementById('date').value
                        }) 
                    }).then(function(reqResponse) {
                        liff.closeWindow();
                    })
                  document.getElementById('wait').style.display = "none"; 
                  fetch('/send-corezoid', {
                          method: 'POST',
                          body: JSON.stringify({
                            "test":"testDate"
                          }) 
                      })
                  
                  //fetch('/send-corezoid-get');
                    
                  
                  //liff.closeWindow();
              }
            }, 5000);
        }).catch(function(error) {
            window.alert('Error getting profile: ' + error);
        });
    });
    
    

    document.getElementById('shareTargetPicker').addEventListener('click', function () {
        if (liff.isApiAvailable('shareTargetPicker')) {
            liff.shareTargetPicker([{
                'type': 'text',
                'text': 'Hello, World!'
            }]).then(
                document.getElementById('shareTargetPickerMessage').textContent = "Share target picker was launched."
            ).catch(function (res) {
                document.getElementById('shareTargetPickerMessage').textContent = "Failed to launch share target picker.";
            });
        }
    });

    // login call, only when external browser is used
    document.getElementById('liffLoginButton').addEventListener('click', function() {
        if (!liff.isLoggedIn()) {
            // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
            liff.login();
        }
    });

    // logout call only when external browse
    document.getElementById('liffLogoutButton').addEventListener('click', function() {
        if (liff.isLoggedIn()) {
            liff.logout();
            window.location.reload();
        }
    });
}*/

/**
* Alert the user if LIFF is opened in an external browser and unavailable buttons are tapped
*/
function sendAlertIfNotInClient() {
    alert('This button is unavailable as LIFF is currently being opened in an external browser.');
}

/**
* Toggle access token data field
*/
function toggleAccessToken() {
    toggleElement('accessTokenData');
}

/**
* Toggle profile info field
*/
function toggleProfileData() {
    toggleElement('profileInfo');
}

/**
* Toggle scanCode result field
*/
function toggleQrCodeReader() {
    toggleElement('scanQr');
}

function closeWin() {
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.closeWindow();
    }
}
function sendMsg(){
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
        }]).then(function() {
            window.alert('Message sent');
        }).catch(function(error) {
            window.alert('Error sending message: ' + error);
        });
    }   
}

function sendWebhook(regData){
    liff.getProfile().then(function(profile) {
        regData.userId = profile.userId;
        regData.language = liff.getLanguage();
        fetch('/send-corezoid', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(regData)
        }).then(function(reqResponse) {
            liff.closeWindow();
        });
    }).catch(function(error) {
        window.alert('Error getting profile: ' + error);
    });
}

/**
* Toggle specified element
* @param {string} elementId The ID of the selected element
*/
function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'block';
    }
}
