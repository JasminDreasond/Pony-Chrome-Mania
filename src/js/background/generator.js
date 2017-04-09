var completewarn = ""
var confirmcustomcss = ""
var confirmcustomlanguage = ""
var confirmcfg = ""


function resetconfig(){
var defresetall = confirm(confirmcfg)
if(defresetall == true){
var toRemove = [];

function deletealllocal(){
chrome.storage.local.get( function(Items) {
$.each(Items, function(index, value)
{

toRemove.push(index); 
});




chrome.storage.local.remove(toRemove, function(Items) {


chrome.storage.local.get( function(Items) {
$.each(Items, function(index, value)
{

});
});

alert(completewarn);

}); 
});
}

function deleteallsync(){
chrome.storage.sync.get( function(Items) {
$.each(Items, function(index, value)
{

toRemove.push(index); 
});




chrome.storage.sync.remove(toRemove, function(Items) {


chrome.storage.sync.get( function(Items) {
$.each(Items, function(index, value)
{

});
});

deletealllocal();

}); 
});
}

deleteallsync();
}	
}

function changecsscode(){	
var defresetall = confirm(confirmcustomcss)
if(defresetall == true){
chrome.storage.sync.set({customcss: ""});
alert(completewarn);
chrome.extension.sendMessage({text:"customcssremover"},function(reponse){if(reponse.type == "customcssremoverpk"){}});	
}
}

function changelanguagecode(){	
var defresetall = confirm(confirmcustomlanguage)
if(defresetall == true){
chrome.storage.sync.set({customlanguage: ""});
alert(completewarn);
chrome.extension.sendMessage({text:"customcssremover"},function(reponse){if(reponse.type == "customcssremoverpk"){}});	
}
}


chrome.contextMenus.create({	
    id: "changecssid",	
    title: "yay",
    contexts:["browser_action"], 
    onclick: changecsscode
});

chrome.contextMenus.create({	
    id: "changelanguageid",	 
    title: "yay",
    contexts:["browser_action"], 
    onclick: changelanguagecode
});

chrome.contextMenus.create({	
    id: "resetconfigid", 
    title: "yay",
    contexts:["browser_action"], 
    onclick: resetconfig
});

chrome.contextMenus.create({	
    type: "separator", 
    contexts:["browser_action"]
});

chrome.contextMenus.create({	
    id: "newtabid",
    title: "yay", 
    contexts:["browser_action"], 
    onclick: newtabherenow
});

function customcontextmenu(customlanguagest){
	
if (typeof customlanguagest.contextcompletewarn !== "undefined"){ completewarn = customlanguagest.contextcompletewarn }
if (typeof customlanguagest.contextcustomcss2 !== "undefined"){ confirmcustomcss = customlanguagest.contextcustomcss2 }
if (typeof customlanguagest.contextcustomcfg2 !== "undefined"){ confirmcfg = customlanguagest.contextcustomcfg2 }
if (typeof customlanguagest.contextcustomlanguage2 !== "undefined"){ confirmcustomlanguage = customlanguagest.contextcustomlanguage2 }

if (typeof customlanguagest.contextcustomcss !== "undefined"){ chrome.contextMenus.update("changecssid",{	
    title: customlanguagest.contextcustomcss
}); }

if (typeof customlanguagest.contextcustomlanguage !== "undefined"){ chrome.contextMenus.update("changelanguageid",{	
    title: customlanguagest.contextcustomlanguage
}); }

if (typeof customlanguagest.contextcustomcfg !== "undefined"){ chrome.contextMenus.update("resetconfigid",{	
    title: customlanguagest.contextcustomcfg
}); }

if (typeof customlanguagest.contextnewtab !== "undefined"){ chrome.contextMenus.update("newtabid",{	
    title: customlanguagest.contextnewtab
}); }
	
}

function updatelanguagecontmenu(){chrome.storage.sync.get(function(settings) { 

if((settings.laguageoptions == "portuguesebr") || (settings.laguageoptions == null)){

completewarn = "Completo!"
confirmcustomcss = "Favor confirme sua ação: Resetar - CSS Personalizável"
confirmcfg = "Favor confirme sua ação: Resetar - Configurações"
confirmcustomlanguage = "Favor confirme sua ação: Resetar - Idioma Personalizável"
	
chrome.contextMenus.update("changecssid",{		
    title: "Resetar - CSS Personalizável" 
});

chrome.contextMenus.update("changelanguageid",{		
    title: "Resetar - Idioma Personalizável"
});

chrome.contextMenus.update("resetconfigid",{	
    title: "Resetar - Configurações"
});

chrome.contextMenus.update("newtabid",{	
    title: "Opções (Pop-Up)"
});
	
}

else if(settings.laguageoptions == "english"){

completewarn = "Complete!"
confirmcustomcss = "Please confirm your action: Reset - Custom CSS"
confirmcfg = "Please confirm your action: Reset - CFG"
confirmcustomlanguage = "Favor confirme sua ação: Resetar - Custom Language"

chrome.contextMenus.update("changecssid",{	
    title: "Reset - Custom CSS"
});

chrome.contextMenus.update("changelanguageid",{	
    title: "Reset - Custom Language"
});

chrome.contextMenus.update("resetconfigid",{	
    title: "Reset - CFG"
});

chrome.contextMenus.update("newtabid",{	
    title: "Options (Pop-Up)"
});
	
}

chrome.storage.local.get(function(config){

function nothinglanguagepkr(){
var customlanguage2 = {}
customcontextmenu(customlanguage2);
}

if((config.customlanguagetext == "") || (config.customlanguagetext == null)){nothinglanguagepkr();}
else{
var antispacetradutor = new RegExp('\n', 'g');
var customlanguage2 = ""
var customlanguage2 = customlanguage2.replace(antispacetradutor, "")
var customlanguage2 = "{"+config.customlanguagetext+"}"
var customlanguage2 = customlanguage2.replace(", }", "}").replace(",}", "}")
var customlanguagest = JSON.parse(customlanguage2);
customcontextmenu(customlanguagest);
}

})

})}; 


chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "updatelgsystem"){
  sendResponse({type:"updatelgsystemts"})
updatelanguagecontmenu();
  };
});
updatelanguagecontmenu();







//Update System

function updatesystempker(settings){if(settings.refreshautoconfig == true){
systemupdate({
"basepony": true,
"interactions": true,
"customlanguage": true
}, function(){
updatelanguagecontmenu();
})
}}

function privacycheckpek(settings){chrome.storage.local.get(function(config){
var myprivacyaccepted = settings.myprivacyaccepted
if(myprivacyaccepted == true){
if((config.baseponytext == null) && (config.interactionstext == null) && (config.ponylisttext == null) && (config.customcsstext == null) && (config.customlanguagetext == null) && (config.daterefresh == null)){
systemupdate({
"basepony": true,
"interactions": true,
"ponylist": true,
"customcss": true,
"customlanguage": true
}, function(){
updatelanguagecontmenu();
})
}
else{updatesystempker(settings);}
}
})}

function startupdatesystem(){chrome.storage.sync.get(function(settings){
var rektime = 60000
var rektime = rektime*20
setInterval(function(){privacycheckpek(settings);},rektime)
privacycheckpek(settings);
})}

startupdatesystem();


chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "acceptedprivacy"){
  sendResponse({type:"acceptedprivacyts"})
chrome.storage.sync.get(function(settings){privacycheckpek(settings);})
  };
});