//Pop-Up

function newtabherenow() {
    var chromeponypopup = window.open(chrome.extension.getURL('index.html'), "chromeponypopup", "width=1250,height=700");
    chromeponypopup.focus();
};

chrome.browserAction.onClicked.addListener(function(tab) {
    var chromeponypopup = window.open(chrome.extension.getURL('index.html'), "chromeponypopup");
    chromeponypopup.focus();
});



//Icon

//Start

chrome.browserAction.setBadgeBackgroundColor({
    color: [0, 0, 0, 255]
});
chrome.browserAction.setBadgeText({ text: "?" });

//Load

var statesponyhere = false

function updatestatus() {

    //ON OR OFF

    if (statesponyhere == false) {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [182, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "x" });
    } else if (statesponyhere == true) {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [51, 204, 51, 255]
        });
        chrome.browserAction.setBadgeText({ text: "√" });
    }


    //SPECIAL
    else if (statesponyhere == "pleaseupdate") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [51, 204, 51, 255]
        });
        chrome.browserAction.setBadgeText({ text: "UP!" });
    } else if (statesponyhere == "st") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [51, 204, 51, 255]
        });
        chrome.browserAction.setBadgeText({ text: "√s" });
    } else if (statesponyhere == "ds") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "m" });
    } else if (statesponyhere == "cmd") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "cmd" });
    } else if (statesponyhere == "close") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "c" });
    } else if (statesponyhere == "error") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [213, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "ERROR" });
    } else if (statesponyhere == "config") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 138, 230, 255]
        });
        chrome.browserAction.setBadgeText({ text: "cfg" });
    } else if (statesponyhere == "warning") {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [213, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "WARN" });
    }



    //NULL
    else {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({ text: "?" });
    }

}

setInterval(updatestatus, 100);




//System

//Null

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "nullponieshere") {
        sendResponse({ type: "nullponiesherepk" })

        statesponyhere = null

    };
});

//ERROR

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "errorhere") {
        sendResponse({ type: "errorhererp" })

        statesponyhere = "error"

    };
});

//PLEASE UPDATE

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "pleaseupdateconfig") {
        sendResponse({ type: "pleaseupdateconfigts" })

        statesponyhere = "pleaseupdate"

    };
});

//OFF

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "disablealertpony") {
        sendResponse({ type: "disablealertrp" })

        statesponyhere = false

    };
});

//ON

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "enablealertpony") {
        sendResponse({ type: "enablealertrp" })

        statesponyhere = true

    };
});



//SPECIAL ON

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "enablealertponyst") {
        sendResponse({ type: "enablealertrpst" })

        statesponyhere = "st"

    };
});

//SPECIAL DS

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "dsponieshere") {
        sendResponse({ type: "dsponieshere" })

        statesponyhere = "ds"

    };
});

//SPECIAL CLOSE

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "closeponieshere") {
        sendResponse({ type: "closeponiesherepk" })

        statesponyhere = "close"

    };
});

//SPECIAL CONFIG

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "configponypage") {
        sendResponse({ type: "configponypagepk" })

        statesponyhere = "config"

    };
});

//CMD

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "cmdponypage") {
        sendResponse({ type: "cmdponypagepk" })

        statesponyhere = "cmd"

    };
});

//WARNING

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "warningsystem") {
        sendResponse({ type: "warningsystemts" })

        statesponyhere = "warning"

    };
});