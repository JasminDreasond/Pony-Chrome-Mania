function errorpker(errormsg) {
    alert(errormsg);
}

function dateupdatelocalset() {
    chrome.storage.local.get(function(dateset) {
        $("#refreshdate").text(dateset.daterefresh);
    })
}

var specialpagesource = false