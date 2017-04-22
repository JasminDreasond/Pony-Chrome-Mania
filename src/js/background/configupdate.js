function systemupdate(updateset, resultfinalpk){chrome.storage.sync.get(function(settings) {

var baseponytext = null
var interactionstext = null
var ponylisttext = null
var customcsstext = null
var customlanguagetext = null
var customcssurl = null

var basedevbasepony = null
var basedevponylist = null
var basedevcustomcss = null
var daterefresh = null

//Save System

function setsavepk(savehere){

function saveallpke(devsetpke, reloadtrue){
	
savehere.save = savehere.save
.replace(/423decdsx433/g, "https://img01.deviantart.net/")
.replace(/223decdsx423/g, "https://pre01.deviantart.net/")
.replace(/23decdsx43/g, "https://orig01.deviantart.net/")
.replace(/23browsourcepkxs23/g, "https://jackieapkon.github.io/Browser-Ponies/")

if(savehere.saveType == "basepony"){
savehere.save = savehere.save
.replace(/deviantart-img\//g, 'https://img01.deviantart.net/')
.replace(/deviantart-pre\//g, 'https://pre01.deviantart.net/')
.replace(/deviantart-orig\//g, 'https://orig01.deviantart.net/')
.replace(/source-github\//g, "https://raw.githubusercontent.com/")
.replace(/source-base-RoosterDragon\//g, "https://raw.githubusercontent.com/RoosterDragon/Desktop-Ponies/master/Content/Ponies/")
.replace(/source-base-JackieApkon\//g, "https://raw.githubusercontent.com/JackieApkon/Pony-Chrome-Mania/master/my_ponies/")
.replace(/source-base\//g, "https://jackieapkon.github.io/Browser-Ponies/")

var spawndetectsystemxs32 = savehere.save.split('\n')[0];
if(spawndetectsystemxs32.indexOf('{"autoreverse": true},') >= 0){
savehere.save = savehere.save.replace('{"autoreverse": true},', "");
var saveautoreverse = true
}
else{var saveautoreverse = false}

if(savehere.save == "v2343xcs2"){savehere.save = null}
chrome.storage.local.set({baseponytext: savehere.save, basedevbasepony: devsetpke, autoreverse: saveautoreverse})
baseponytext = savehere.save
basedevbasepony = devsetpke
}
else if(savehere.saveType == "interactions"){
savehere.save = savehere.save.replace(/\r?\n|\r/g, "")
if((savehere.save.startsWith('"')) && (savehere.save.endsWith('"'))){}
else{savehere.save = '"'+savehere.save+'"'}
if((savehere.save == "v2343xcs2") || (savehere.save == '"v2343xcs2"')){savehere.save = null}
chrome.storage.local.set({interactionstext: savehere.save})
interactionstext = savehere.save
}
else if(savehere.saveType == "ponylist"){
if(savehere.save == "v2343xcs2"){savehere.save = null}
chrome.storage.local.set({ponylisttext: savehere.save, basedevponylist: devsetpke})
ponylisttext = savehere.save
basedevponylist = devsetpke
}
else if(savehere.saveType == "customcss"){
if(savehere.save == "v2343xcs2"){savehere.save = null}
chrome.storage.local.set({customcsstext: savehere.save, customcssurl: savehere.url, basedevcustomcss: devsetpke})
customcsstext = savehere.save
customcssurl = savehere.url
basedevcustomcss = devsetpke
}
else if(savehere.saveType == "customlanguage"){
if(savehere.save == "v2343xcs2"){savehere.save = null}
chrome.storage.local.set({customlanguagetext: savehere.save})
customlanguagetext = savehere.save
}


else if(savehere.saveType == "savedate"){
if(savehere.save == "v2343xcs2"){savehere.save = null}
chrome.storage.local.set({daterefresh: savehere.save})
daterefresh = savehere.save
}

if(reloadtrue == true){location.reload(); return}

}

function securityverkxs(setsecurity){chrome.storage.local.get(function(config){
	
if(setsecurity.next == true){

//if(savehere.saveType == "basepony"){
//if((settings.baseconfigke2 == "") || (settings.baseconfigke2 == null)){setsecurity.baseval = "empty"}
//}
//else if(savehere.saveType == "ponylist"){
//if((settings.ponylistcode == "") || (settings.ponylistcode == null)){setsecurity.baseval = "empty"}
//}
//else if(savehere.saveType == "customcss"){
//if((settings.customcss == "") || (settings.customcss == null)){setsecurity.baseval = "empty"}
//}

saveallpke(setsecurity.baseval);
}

else{

function checkpkexs(devsetpke){if(devsetpke == false){
savehere.save = "v2343xcs2"
var zeronexpke = null
alert("WARN Whitelist")

if(savehere.saveType == "basepony"){
chrome.storage.sync.set({baseconfigke2: ""})
}
else if(savehere.saveType == "ponylist"){
chrome.storage.sync.set({ponylistcode: ""})
}
else if(savehere.saveType == "customcss"){
chrome.storage.sync.set({customcss: ""})
}

saveallpke(zeronexpke, true);
}
else{saveallpke(devsetpke);}
}

if(savehere.saveType == "basepony"){
if((updateset.checksecurity == true) || (config.basedevbasepony == true)){checkpkexs(setsecurity.baseval);}
else{saveallpke(setsecurity.baseval);}
}
else if(savehere.saveType == "ponylist"){
if((updateset.checksecurity == true) || (config.basedevponylist == true)){checkpkexs(setsecurity.baseval);}
else{saveallpke(setsecurity.baseval);}
}
else if(savehere.saveType == "customcss"){
if((updateset.checksecurity == true) || (config.basedevcustomcss == true)){checkpkexs(setsecurity.baseval);}
else{saveallpke(setsecurity.baseval);}
}

}

})}

if(savehere.save == null){savehere.save = "v2343xcs2"}
if(savehere.basedev == true){
savehere.save = savehere.save
.replace(/https:\/\/img01.deviantart.net\//g, "423decdsx433")
.replace(/https:\/\/pre01.deviantart.net\//g, "223decdsx423")
.replace(/https:\/\/orig01.deviantart.net\//g, "23decdsx43")
.replace(/https:\/\/panzi.github.io\/Browser-Ponies\//g, "23browsourcepkxs23")
if((savehere.save.indexOf("deviantart\[x\]") > 0) || (savehere.save.indexOf("deviantart-") > 0) || (savehere.save.indexOf("source-base") > 0)){
if((savehere.save.indexOf("http://") > 0) || (savehere.save.indexOf("https://") > 0) || (savehere.save.indexOf("ftp://") > 0) || (savehere.save.indexOf("ftps://") > 0) || (savehere.save.indexOf("file://") > 0) || (savehere.save.indexOf("urlfile") > 0) || (savehere.save.indexOf("file-base") > 0)){
var devsetpke = false
securityverkxs({"baseval": devsetpke});
}
else{
var devsetpke = true
securityverkxs({"baseval": devsetpke});
}
}
else if(updateset.checksecurity == true){
var devsetpke = false
securityverkxs({"baseval": devsetpke});
}
else{
var devsetpke = null
securityverkxs({"baseval": devsetpke, "next": true});
}
}
else{saveallpke();}
}

//Save Prepare

function systempker(pkesele, next){
if(pkesele.saveOn == true){
if((pkesele.url.endsWith(pkesele.format)) || (pkesele.url.startsWith("https://googledrive.com/host/")) || (pkesele.url.startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || (pkesele.url.startsWith("https://sonicrainboom.com.br/attachment.php?aid="))){
$.ajax({url: pkesele.url, cache: false, type: 'get', error: function(XMLHttpRequest, textStatus, errorThrown){
var myerrorof = pkesele.errorMSG
if(XMLHttpRequest.readyState == 4) {var myerrorof =  myerrorof+" - readyState4";}
else if(XMLHttpRequest.readyState == 0) {var myerrorof =  myerrorof+" - readyState0";}
else{var myerrorof = myerrorof+" - readyState?"}

setsavepk({
"saveType": pkesele.saveType,
"save": null,
"url": null,
"basedev": pkesele.basedev
})

errorpker(myerrorof);

next();
}, 
success: function(data){if((data.indexOf("Function") > 0) || (data.indexOf("function") > 0) || (data.indexOf("eval") > 0) || (data.indexOf("\\u0046\\u0055\\u004e\\u0043\\u0054\\u0049\\u004f\\u004e") > 0) || (data.indexOf("\\u0066\\u0075\\u006e\\u0063\\u0074\\u0069\\u006f\\u006e") > 0) || (data.indexOf("\\u0045\\u0056\\u0041\\u004c") > 0) || (data.indexOf("\\u0065\\u0076\\u0061\\u006c") > 0) || (data.indexOf(".php") >= 0) || (data.indexOf(".html") >= 0) || (data.indexOf(".asp") >= 0)){
setsavepk({
"saveType": pkesele.saveType,
"save": null,
"url": null,
"basedev": pkesele.basedev
})
next();
}
else{
setsavepk({
"saveType": pkesele.saveType,
"save": data,
"url": pkesele.url,
"basedev": pkesele.basedev
})
next();
}}});
}
else if((pkesele.url == "") || (pkesele.url == null)){
setsavepk({
"saveType": pkesele.saveType,
"save": null,
"url": null,
"basedev": pkesele.basedev
})
next();
}
else{
setsavepk({
"saveType": pkesele.saveType,
"save": null,
"url": null,
"basedev": pkesele.basedev
})
alert(pkesele.errorMSG)
next();
}
}
else{next();}
}

//Save Select

function finishsystempker(){

if(updateset.globalStart == true){chrome.storage.local.get(function(settings2){
if(baseponytext == null){}
else{settings2.baseponytext = baseponytext}
if(interactionstext == null){}
else{settings2.interactionstext = interactionstext}
if(ponylisttext == null){}
else{settings2.ponylisttext = ponylisttext}
if(customcsstext == null){}
else{settings2.customcsstext = customcsstext}
if(customlanguagetext == null){}
else{settings2.customlanguagetext = customlanguagetext}
if(customcssurl == null){}
else{settings2.customcssurl = customcssurl}
if(basedevbasepony == null){}
else{settings2.basedevbasepony = basedevbasepony}
if(basedevponylist == null){}
else{settings2.basedevponylist = basedevponylist}
if(basedevcustomcss == null){}
else{settings2.basedevcustomcss = basedevcustomcss}
if(basedevcustomcss == null){}
else{settings2.daterefresh = daterefresh}
resultfinalpk(settings, settings2);
})}
else if(updateset.localStart == true){chrome.storage.local.get(function(settings2){
if(baseponytext == null){}
else{settings2.baseponytext = baseponytext}
if(interactionstext == null){}
else{settings2.interactionstext = interactionstext}
if(ponylisttext == null){}
else{settings2.ponylisttext = ponylisttext}
if(customcsstext == null){}
else{settings2.customcsstext = customcsstext}
if(customlanguagetext == null){}
else{settings2.customlanguagetext = customlanguagetext}
if(customcssurl == null){}
else{settings2.customcssurl = customcssurl}
if(basedevbasepony == null){}
else{settings2.basedevbasepony = basedevbasepony}
if(basedevponylist == null){}
else{settings2.basedevponylist = basedevponylist}
if(basedevcustomcss == null){}
else{settings2.basedevcustomcss = basedevcustomcss}
if(basedevcustomcss == null){}
else{settings2.daterefresh = daterefresh}
resultfinalpk(settings2);
})}
else if(updateset.syncStart == true){chrome.storage.local.get(function(settings2){
resultfinalpk(settings);
})}
else{resultfinalpk();}
}

function customlanguagestartpk(){
systempker({
"url": settings.customlanguage,
"saveType": "customlanguage",
"saveOn": updateset.customlanguage,
"format": ".txt",
"errorMSG": "ERROR LANGUAGE"
}, function(){finishsystempker();})
}

function customcssstartpk(){
systempker({
"url": settings.customcss,
"saveType": "customcss",
"saveOn": updateset.customcss,
"format": ".css",
"errorMSG": "ERROR CSS",
"basedev": true
}, function(){customlanguagestartpk();})
}

function ponyliststartpk(){
systempker({
"url": settings.ponylistcode,
"saveType": "ponylist",
"saveOn": updateset.ponylist,
"format": ".txt",
"errorMSG": "ERROR PONY LIST",
"basedev": true
}, function(){customcssstartpk();})
}

function interactionstartpk(){
systempker({
"url": settings.baseconfigke1,
"saveType": "interactions",
"saveOn": updateset.interactions,
"format": ".txt",
"errorMSG": "ERROR INTERACTIONS"
}, function(){ponyliststartpk();})
}

function basestartpk(){
systempker({
"url": settings.baseconfigke2,
"saveType": "basepony",
"saveOn": updateset.basepony,
"format": ".txt",
"errorMSG": "ERROR BASE PONY",
"basedev": true
}, function(){interactionstartpk();})
}

function saveDatepkee(){if((updateset.basepony == true) || (updateset.interactions == true) || (updateset.ponylist == true) || (updateset.customcss == true) || (updateset.customlanguage == true)){
var tehd = new Date();
var tehmonth = tehd.getMonth()+1;
var tehday = tehd.getDate();
var tehyear = tehd.getFullYear();
var tehoutput = tehd.getFullYear() + '/' +
(tehmonth<10 ? '0' : '') + tehmonth + '/' +
(tehday<10 ? '0' : '') + tehday;
setsavepk({
"saveType": "savedate",
"save": tehoutput
})
basestartpk();
}
else{finishsystempker();}
}

saveDatepkee();

})}