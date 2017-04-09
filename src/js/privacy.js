function setoptionsalertpony(send, reponse){chrome.extension.sendMessage({text:send},function(reponse){if(reponse.type == reponse){}});}
setoptionsalertpony("configponypage", "configponypagepk");
window.onbeforeunload = function(){setoptionsalertpony("closeponieshere", "closeponiesherepk");}
$(window).blur(function(){setoptionsalertpony("dsponieshere", "dsponiesherepk");})
$(window).focus(function(){setTimeout(function(){setoptionsalertpony("configponypage", "configponypagepk");},10)})

//Logo

$("#logo").click(function(){})

$("#privacybr").addClass("privacyvisible");

//Language

$("#brasillg, #englishlg").click(function(){
var getidpe = $(this).attr("id")
$("#privacybr, #privacyen").removeClass("privacyvisible");

if(getidpe == "brasillg"){
$("#privacybr").addClass("privacyvisible");
$("#logo").addClass("logobr");
$("#titleprivacy").text("Política de Privacidade");
$("#warnprivacy").text("Cuidado: Negando a Política de Privacidade fará com que toda a configuração presente seja deletada para sempre!");
$("#privacyallowone").text("Você concorda com a Política de Privacidade");
$("#privacyallow1").val("Eu li e Concordo com a Política de Privacidade");
$("#privacyallow2").val("Não Concordo");
}
else if(getidpe == "englishlg"){
$("#privacyen").addClass("privacyvisible");
$("#logo").removeClass("logobr");
$("#titleprivacy").text("Privacy Policy");
$("#warnprivacy").text("Warning: Clicking in 'I not agree', you go lost all the your config forever!");
$("#privacyallowone").text("You agree with the Privacy Policy");
$("#privacyallow1").val("I agree with the Privacy Policy");
$("#privacyallow2").val("I not agree");
}
})

//Function

function privacy1(){saveprivacy(true);}
function privacy2(){chrome.storage.sync.get(function(settings){
var okconfirmpke = "OK?!"
if(settings.myprivacyaccepted == true){
var confirmnow = confirm(okconfirmpke);
if(confirmnow == true){resetsystempker(true, function(){saveprivacy(null);});}
}
else{
var confirmnow = confirm(okconfirmpke);
if(confirmnow == true){resetsystempker(true, function(){saveprivacy(null);});}
}
})}

//Function

$("#privacyallow1").click(privacy1);
$("#privacyallow2").click(privacy2);

function startsystemokr(){
chrome.extension.sendMessage({text:"acceptedprivacy"},function(reponse){if(reponse.type == "acceptedprivacyts"){}})
window.open('options.html', '_top');
}

function startsystemokr2(){
window.close();	
}

function saveprivacy(privacyhere){
chrome.storage.sync.set({
myprivacyaccepted: privacyhere
});

if(privacyhere == true){
startsystemokr();
}
else{startsystemokr2();}
}


chrome.storage.sync.get(function(settings){
if(settings.myprivacyaccepted == true){
$("#privacyallowone").addClass("allowprivacyte");
}
else if(settings.myprivacyaccepted == null){
$("#privacyallowone").removeClass("allowprivacyte");
}
})