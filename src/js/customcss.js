var customcss = ""
var customlanguage = ""
var customlanguage2 = ""
var customlanguagest = ""
var refreshautoconfig = false

var basedevbasepony = false
var basedevponylist = false
var basedevcustomcss = false
var daterefresh = false

//Custom CSS

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text == "customcssremover") {
        sendResponse({ type: "customcssremoverpk" })

        location.reload();

    };
});

function enablethemepk() {
    $("body").removeClass("bodyhide").fadeIn();
}

//Load Start

function loadextensionstart() {

    function loadlanguagesystempk(mydatalanguage) {
        if ((mydatalanguage == "") || (mydatalanguage == null)) { languageset();
            customcssenabled(); } else if ((mydatalanguage.indexOf("\\") >= 0) || (mydatalanguage.indexOf("Function") >= 0) || (mydatalanguage.indexOf("function") >= 0) || (mydatalanguage.indexOf("eval") >= 0)) { customcssenabled(); } else {

            var antispacetradutor = new RegExp('\n', 'g');
            customlanguage2 = customlanguage2.replace(antispacetradutor, "")
            customlanguage2 = "{" + mydatalanguage + "}"
            customlanguage2 = customlanguage2.replace(", }", "}").replace(",}", "}")
            if ((customlanguage2.indexOf("function") >= 0) || (customlanguage2.indexOf("Function") >= 0)) { customlanguagest = "" } else { customlanguagest = JSON.parse(customlanguage2); }
            languageset();

            customcssenabled();
        }
    }

    $("body").addClass("bodyhide").css({ "display": "none" });

    //Load Language

    if (refreshautoconfig == true) {
        systemupdate({
            "customlanguage": true,
            "basepony": true,
            "interactions": true,
            "localStart": true
        }, function(config) {
            basedevbasepony = config.basedevbasepony
            basedevponylist = config.basedevponylist
            basedevcustomcss = config.basedevcustomcss
            daterefresh = config.daterefresh
            loadlanguagesystempk(config.customlanguagetext);
            dateupdatelocalset();
        })
    } else {
        chrome.storage.local.get(function(config) {
            basedevbasepony = config.basedevbasepony
            basedevponylist = config.basedevponylist
            basedevcustomcss = config.basedevcustomcss
            daterefresh = config.daterefresh
            loadlanguagesystempk(config.customlanguagetext);
        })
    }

    //Load Language

}

function customcssenabled() {

    //Load CSS

    function loadcustomcsssystem(customcsspk, customcssurl) {
        if ((customcsspk == "") || (customcsspk == null)) { enablethemepk(); } else if ((customcsspk.indexOf("@import") >= 0) || (customcsspk.indexOf(".php") >= 0) || (customcsspk.indexOf("Function") >= 0) || (customcsspk.indexOf("function") >= 0) || (customcsspk.indexOf("\\") >= 0) || (customcsspk.indexOf("eval") >= 0)) { enablethemepk(); } else {

            $("#customcsshere").attr('disabled', 'disabled').remove();

            var antikper = "/*"
            customcsspk = customcsspk.replace(/url\(/g, antikper).replace(/\\/g, antikper).replace(/\\n/g, antikper).replace(/&/g, antikper).replace(/&#/g, antikper).replace(/\./g, antikper).replace(/\@import/g, antikper)


            customcssurlset1 = customcssurl.substring(0, customcssurl.lastIndexOf("/"))
            customcssurlset2 = customcssurlset1.substring(0, customcssurlset1.lastIndexOf("/"))
            customcssurlset3 = customcssurlset2.substring(0, customcssurlset2.lastIndexOf("/"))
            customcssurlset4 = customcssurlset3.substring(0, customcssurlset3.lastIndexOf("/"))
            customcssurlset5 = customcssurlset4.substring(0, customcssurlset4.lastIndexOf("/"))
            customcssurlset6 = customcssurlset5.substring(0, customcssurlset5.lastIndexOf("/"))
            customcssurlset7 = customcssurlset6.substring(0, customcssurlset6.lastIndexOf("/"))
            customcssurlset8 = customcssurlset7.substring(0, customcssurlset7.lastIndexOf("/"))
            customcssurlset9 = customcssurlset8.substring(0, customcssurlset8.lastIndexOf("/"))
            customcssurlset10 = customcssurlset9.substring(0, customcssurlset9.lastIndexOf("/"))

            customcssurlbaseds = 'url("'
            customcsspk = customcsspk.replace(/urlfile\[10\]\(/g, customcssurlbaseds + customcssurlset10 + '/')
                .replace(/urlfile\[2\]\(/g, customcssurlbaseds + customcssurlset2 + '/')
                .replace(/urlfile\[3\]\(/g, customcssurlbaseds + customcssurlset3 + '/')
                .replace(/urlfile\[4\]\(/g, customcssurlbaseds + customcssurlset4 + '/')
                .replace(/urlfile\[5\]\(/g, customcssurlbaseds + customcssurlset5 + '/')
                .replace(/urlfile\[6\]\(/g, customcssurlbaseds + customcssurlset6 + '/')
                .replace(/urlfile\[7\]\(/g, customcssurlbaseds + customcssurlset7 + '/')
                .replace(/urlfile\[8\]\(/g, customcssurlbaseds + customcssurlset8 + '/')
                .replace(/urlfile\[9\]\(/g, customcssurlbaseds + customcssurlset9 + '/')
                .replace(/urlfile\(/g, customcssurlbaseds + customcssurlset1 + '/')


            customcsspk = customcsspk
                .replace(/deviantart\[x\]\:img\(/g, 'url("https://img01.deviantart.net/')
                .replace(/deviantart\[x\]\:pre\(/g, 'url("https://pre01.deviantart.net/')
                .replace(/deviantart\[x\]\:orig\(/g, 'url("https://orig01.deviantart.net/')
                .replace(/\[gif\]/g, '.gif"').replace(/\[png\]/g, '.png"').replace(/\[jpg\]/g, '.jpg"').replace(/\[jpeg\]/g, '.jpeg"')

            customcsspk = customcsspk
                .replace(/\[modal-dialog\]/g, ".modal-dialog")
                .replace(/\[modal-content\]/g, ".modal-content")
                .replace(/\[modal-header\]/g, ".modal-header")
                .replace(/\[modal-body\]/g, ".modal-body")
                .replace(/\[modal-footer\]/g, ".modal-footer")
                .replace(/\[searchbase\]/g, ".searchbase")
                .replace(/\[languagebase\]/g, ".languagebase")
                .replace(/\[warnbasepx\]/g, ".warnbasepx")
                .replace(/\[titleinsertbase\]/g, ".titleinsertbase")
                .replace(/\[clickponyoptions\]/g, ".clickponyoptions")
                .replace(/\[table\]/g, ".table")
                .replace(/\[tableponiesoptions\]/g, ".tableponiesoptions")
                .replace(/\[container\]/g, ".container")
                .replace(/\[warnhttpsek\]/g, ".warnhttpsek")
                .replace(/\[pagseguroimagesplus\]/g, ".pagseguroimagesplus")
                .replace(/\[payimagesplus\]/g, ".payimagesplus")
                .replace(/\[disabledremover\]/g, ".disabledremover")
                .replace(/\[updatebxl\]/g, ".updatebxl")
                .replace(/\[openbxl\]/g, ".openbxl")
                .replace(/\[removebxl\]/g, ".removebxl")
                .replace(/\[warningcolor\]/g, ".warningcolor")
                .replace(/\[littlefailsave\]/g, ".littlefailsave")
                .replace(/\[nothingitemcode2\]/g, ".nothingitemcode2")
                .replace(/\[nothingitemcode\]/g, ".nothingitemcode")
                .replace(/\[nothingurlpage\]/g, ".nothingurlpage")
                .replace(/\[failloadck\]/g, ".failloadck")
                .replace(/\[failloadck2\]/g, ".failloadck2")
                .replace(/\[selected\]/g, ".selected")
                .replace(/\[urlonoffcustom\]/g, ".urlonoffcustom")
                .replace(/\[optionspagecustom\]/g, ".optionspagecustom")
                .replace(/\[filecentercustom\]/g, ".filecentercustom")
                .replace(/\[hideurllist\]/g, ".hideurllist")
                .replace(/\[tborder\]/g, ".tborder")
                .replace(/\[menuhelp\]/g, ".menuhelp")
                .replace(/\[getbaseurltrue2\]/g, ".getbaseurltrue2")
                .replace(/\[getbaseurltrue\]/g, ".getbaseurltrue")
                .replace(/\[logobr\]/g, ".logobr")
                .replace(/\[urltop\]/g, ".urltop")
                .replace(/\[thead\]/g, ".thead")
                .replace(/\[urltop\]/g, ".urltop")
                .replace(/\[panelponylist1\]/g, ".panelponylist1")
                .replace(/\[panelponylist2\]/g, ".panelponylist2")
                .replace(/\[warnclsss1\]/g, ".warnclsss1")
                .replace(/\[warnclsss2\]/g, ".warnclsss2")
                .replace(/\[warnclsss3\]/g, ".warnclsss3")
                .replace(/\[warnclsss4\]/g, ".warnclsss4")
                .replace(/\[warnclsss5\]/g, ".warnclsss5")
                .replace(/\[warnclsss6\]/g, ".warnclsss6");
            customcsspk = customcsspk

                .replace(/\[ponyimg\]/g, ".ponyimg")
                .replace(/\[ponyname\]/g, ".ponyname")
                .replace(/\[number\]/g, ".number")

            .replace(/\[truest\]/g, ".truest")
                .replace(/\[falsest\]/g, ".falsest")
                .replace(/\[nonest\]/g, ".nonest")
                .replace(/\[numberst\]/g, ".numberst")
                .replace(/\[psst\]/g, ".psst")
                .replace(/\[audiost\]/g, ".audiost")
                .replace(/\[imagest\]/g, ".imagest")
                .replace(/\[centerst\]/g, ".centerst")
                .replace(/\[rightst\]/g, ".rightst")
                .replace(/\[leftst\]/g, ".leftst")
                .replace(/\[mouseoverst\]/g, ".mouseoverst")
                .replace(/\[fixedst\]/g, ".fixedst")
                .replace(/\[verticalst\]/g, ".verticalst")
                .replace(/\[horizontalst\]/g, ".horizontalst")
                .replace(/\[dverticalst\]/g, ".dverticalst")
                .replace(/\[dhorizontalst\]/g, ".dhorizontalst")
                .replace(/\[allst\]/g, ".allst")
                .replace(/\[diagonalst\]/g, ".diagonalst")
                .replace(/\[mirrorst\]/g, ".mirrorst")
                .replace(/\[warningglobalbase1\]/g, ".warningglobalbase1")
                .replace(/\[warningglobalbase2\]/g, ".warningglobalbase2")
            customcsspk = customcsspk.replace(/\[deviantartst\]/g, ".deviantartst").replace(/\[back\]/g, "../").replace(/\[x1\]/g, "/*").replace(/\[x2\]/g, "*/").replace(/\[numb00\]/g, " 0.").replace(/\[numb0\]/g, ",0.").replace(/\[numb02\]/g, ",.0")

            $("head").append($("<style>", { id: "customcsshere" }).text("/* CUSTOM CSS */\n\n\n" + customcsspk))
                .append($("<link>", { rel: "stylesheet", type: "text/css", id: "customcsshere2", href: "css/defaultconfig.css" }).attr("id", "customcsshere"))
            enablethemepk();

        }
    }

    $("[id='customcsshere']").attr('disabled', 'disabled').remove();

    if (refreshautoconfig == true) {
        systemupdate({
            "customcss": true,
            "localStart": true
        }, function(config) {
            loadcustomcsssystem(config.customcsstext, config.customcssurl);
            dateupdatelocalset();
        })
    } else {
        chrome.storage.local.get(function(config) {
            loadcustomcsssystem(config.customcsstext, config.customcssurl);
        })
    }

    //Load CSS

}

chrome.storage.sync.get(function(settings) {
    var myprivacyaccepted = settings.myprivacyaccepted
    if (myprivacyaccepted == true) {
        refreshautoconfig = settings.refreshautoconfig;
        customcss = settings.customcss;
        customlanguage = settings.customlanguage
        if (customlanguage == null) { customlanguage = "" }
        if (customcss == null) {
            customcss = ""
            loadextensionstart();
        } else { loadextensionstart(); }
    } else { window.open("privacy.html", "_top"); }
})