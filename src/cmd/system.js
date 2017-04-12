function startsystem(){

// Action Browser
function setoptionsalertpony(send, reponse){chrome.extension.sendMessage({text:send},function(reponse){if(reponse.type == reponse){}});}
setoptionsalertpony("cmdponypage", "cmdponypagepk");
window.onbeforeunload = function(){setoptionsalertpony("closeponieshere", "closeponiesherepk");}
$(window).blur(function(){setoptionsalertpony("dsponieshere", "dsponiesherepk");})
$(window).focus(function(){setTimeout(function(){setoptionsalertpony("cmdponypage", "closeponiesherepk");},10)})

// Scroll
function scrolldown(){
if($('command').length > 10000){$('command').first().remove();}
var n = $(document).height();
$('html, body').animate({ scrollTop: n }, 1);
};



// Pointer
function startepkex(){ var kepkxed = true;
function yaypekxs(){

if((kepkxed == true) && (cmd_disable == false)){kepkxed = false; $('.lycker').addClass('ly_st');}
else if(kepkxed == false){kepkxed = true; $('.lycker').removeClass('ly_st');}

}; setInterval(function(){yaypekxs();}, 500);}
startepkex();










// Create System

// Auto Reverse
var autoreverseen;

// Armazenador de Pôneis
var ponycode_git = [];
var ponylist_git = [];
var ponyinteractions_git = [];

// Armazenamento de Categoria
var ponylistcategory_git = '';
var ponylistcategory_git_complete;
var ponylistcategory_git_complete_j;

// Pony Count
var count_git_items = 0;
var count_git_items_c = 0;



//Download Pony
function convertponyst(github, thishere, data){

// Montar Get
var pony_name = github.split('\n')[0];
var pony_category = github.split('\n')[1];
var pony_config = github.split('Interaction,')[0];
var pony_interactions = github.replace(pony_config, '');

var convertname_st = pony_name.replace('Name,', '');
if((encodeURI(convertname_st).indexOf('%20') > -1) && (convertname_st.indexOf('"') == -1)){var convertname_st = '"'+convertname_st+'"'; var pony_config = pony_config.replace(pony_name, 'Name,'+convertname_st);}

// Replace System
var replaceponycode1 = new RegExp('"', 'g');
var replaceponycode2 = new RegExp('\n', 'g');

// Base
var converponiescode = pony_config;
var converponiescodebaseurl = thishere.url.split('/pony.ini')[0]+'/';

if(converponiescode == ""){return}


// Generator Pony Code
var converponiescode = converponiescode.replace(replaceponycode1, '\u005c"').replace(replaceponycode2, '\u005cn').replace('Name,', '{"ini": "Name,');
var converponiescode = converponiescode.replace(converponiescode, ''+converponiescode+'\u005cn", "baseurl": "'+converponiescodebaseurl+'"}');

// Auto Reverse
if(autoreverseen == true){
var converponiescode = converponiescode.replace(/left\.png/g, "right.png").replace(/left\.gif/g, "right.gif");
}

// Entregar Valor Pony Config]
var converponiescode_json = JSON.parse(converponiescode);
ponycode_git.push(converponiescode_json);

// Entregar Pony Name Config

if(github.indexOf('.gif') > -1){
var getimg = github.split('.gif')[0];
var getimg = getimg.substring(getimg.lastIndexOf('"'), getimg.lastIndexOf('"')+getimg.lastIndexOf('"')).replace(/\"/g, "")+'.gif';
}
else if(github.indexOf('.png') > -1){
var getimg = github.split('.png')[0];
var getimg = getimg.substring(getimg.lastIndexOf('"'), getimg.lastIndexOf('"')+getimg.lastIndexOf('"')).replace(/\"/g, "")+'.png';
}

ponylistcategory_git = ponylistcategory_git+', '+pony_category.replace('Categories,', '').replace(/\"/g, '').replace(/\,/g, ', ');

var ponyname_generator = 
'<ponytags>'+pony_category.replace('Categories,', '').replace(/\"/g, '').replace(/\,/g, ', ')+'</ponytags>\n'+
'<ponyname>'+pony_name.replace('Name,', '').replace(/\"/g, '')+'</ponyname>\n'+
'<baseurl></baseurl>\n'+
'<ponyimg>source-base-RoosterDragon(url)'+encodeURIComponent(pony_name.replace('Name,', ''))+'/'+getimg+'</ponyimg>\n'+
'<datapony>'+pony_name.replace('Name,', '').replace(/\'/g, '').replace(/\"/g, '')+'</datapony>\n'+
'<ponyid>'+pony_name.replace('Name,', '').replace(/\'/g, '').replace(/\"/g, '').replace(/ /g, '_').toLowerCase()+'</ponyid>\n\n\n\n'
;

ponylist_git.push({'ponylist': ponyname_generator});





// Interações
var converinteractionscode = pony_interactions;
var replace_interactions_code = converinteractionscode.split(",")[1]+',\\"'+pony_name.replace('Name,', '')+'\\",';

var converinteractionscode = converinteractionscode
.replace(replaceponycode1, '\\"')
.replace(replaceponycode2, '\\n\n')
.replace("Interaction,", "")
.replace(converinteractionscode.split(",")[1]+',', replace_interactions_code);

ponyinteractions_git.push({'interactions': converinteractionscode});





// Download Complete
$('.items').append($("<command>").append($('<span>').text(Math.floor(100*count_git_items_c/count_git_items)+"% - "+thishere.url+" - "), $('<span>', {class: "download_complete"}).text("Download Complete")));

count_git_items_c = count_git_items_c+1;

// 100% Complete
if(count_git_items == count_git_items_c){


// Get Pony List
var listponylist = '';
for (i = 0; i < ponylist_git.length; i++) {if(ponylist_git[i].ponylist != ""){
var listponylist = listponylist+"\n\n\n\n"+ponylist_git[i].ponylist;
}}

// Get Interactions
var listinteractions = '';
for (i = 0; i < ponyinteractions_git.length; i++) {if(ponyinteractions_git[i].interactions != ""){
var listinteractions = listinteractions+"\n"+ponyinteractions_git[i].interactions;
}}

// Get Pony Code
var ponycode_git_t = JSON.stringify(ponycode_git).replace(/\{\"ini\"\:/g, '\n{"ini":');
var ponycode_git_t = ponycode_git_t.substring(1, ponycode_git_t.length-1);


// Category Prepare

var ponylistcategory_git_complete_p = '["'+ponylistcategory_git.replace(/\, /g, '","')+'"]';
ponylistcategory_git_complete_j = JSON.parse(ponylistcategory_git_complete_p);

ponylistcategory_git_complete = [];
$.each(ponylistcategory_git_complete_j, function(i, el){if($.inArray(el, ponylistcategory_git_complete) === -1){ ponylistcategory_git_complete.push(el); }});







// Default Download

if(data.type == 'default'){var copyrighttext_git = 'The artwork used is from the <b>Ponychan fork</b> of <b>Desktop Ponies</b>, <b>My Little Pony: Friendship Is Magic</b> is <b>©</b> by <b>Hasbro</b> and <b>Lauren Faust</b>.\n\n';} else{var copyrighttext_git = '';}



// Download Pony Code
var blob = new Blob([ponycode_git_t], {type: "text/plain;charset=utf-8"});
saveAs(blob, "ponycode_"+data.user+".txt");

// Download Pony List
var blob = new Blob([
copyrighttext_git+
'<randomtags>'+ponylistcategory_git_complete+'</randomtags>\n'+
'<randomname>Random Pony</randomname>\n'+
'<randomimg>source-base(url)Ponies/random%20pony/random-pony.gif</randomimg>\n'+
'<randomsystem>\n\n\n\n'+
listponylist
], {type: "text/plain;charset=utf-8"});
saveAs(blob, "ponylist_"+data.user+".txt");

// Download Interactions
var blob = new Blob([listinteractions], {type: "text/plain;charset=utf-8"});
saveAs(blob, "interactions_"+data.user+".txt");

// Finish
$('.items').append($("<command>").append($('<span>').text('100% - '), $('<span>', {class: "download_complete"}).text("All downloads completed successfully!")));
}


// Scroll
scrolldown();
if(count_git_items == count_git_items_c){cmd_disable = false; cmdsystem();}

}














// Send Convert Command
function startponyconvert(data, totalfoder_git){

count_git_items = totalfoder_git.length;
count_git_items_c = 0;

// Count Folders
for (i = 0; i < totalfoder_git.length; i++) {if(totalfoder_git[i].type == "dir"){


// Send Download
$.ajax({
cache: false, 
url: "https://raw.githubusercontent.com/"+data.folder+encodeURIComponent(totalfoder_git[i].name)+"/pony.ini"
})

// Download Complete
.done(function(github){convertponyst(github, this, data);})

// ERROR DOWNLOAD
.error(function(xhr, status, error){

count_git_items_c = count_git_items_c+1;
if(count_git_items == count_git_items_c){cmd_disable = false; cmdsystem();}

$('.items').append($("<command>").append($('<span>')

.text(Math.floor(100*count_git_items_c/count_git_items)+"% - "+this.url+" - "), 
$('<span>', {class: "download_error"}).text(error)

)); scrolldown();});


}
else{
count_git_items_c = count_git_items_c+1;
if(count_git_items == count_git_items_c){cmd_disable = false; cmdsystem();}
}}

}


























// Download Start
$('.items_title').append($('<p>').text(document.title+' made by Jackie Apkon (c)\n'));











// Download System
var master_name_git;
function get_ponies_git(data){if((data.user != null) && (data.user != undefined) && (data.user != '')){

// ERROR SYSTEM
function errorresult(parterror, notcmd){$('.items').append($("<command>").append($('<span>')

.text("ERROR System - code "), 
$('<span>', {class: "error_system"})
.text(parterror)

)); scrolldown(); if(notcmd != true){cmd_disable = false;}}





// Start Download
function startdownload_git(totalfoder_git, folderfinal){
// Auto Reverse
if(autoreverseen == true){ponycode_git.push({"autoreverse": true})}

// Start Convert
startponyconvert({
'folder': data.user+'/'+data.repository+'/master/'+folderfinal, 'user': data.user, 'type': data.type
},totalfoder_git);
}





// Intro
$('.items').append($("<command>").text("Please, wait a response of GitHub.com"));
scrolldown();

function startgithub(){
cmd_disable = true;
var folder_git_select = '';
	
// Config Inicial
var git_user = new Gh3.User(data.user) ,
git_blog = new Gh3.Repository(data.repository, git_user);

// Start
git_blog.fetch(function (err, res) { if(err) { errorresult(1); } else{
git_blog.fetchBranches(function (err, res) { if(err) { errorresult(2); } else{
	
if(data.type == 'default'){master_name_git = 'master'}
else{master_name_git = prompt('Branch name:', master_name_git);}
var git_master = git_blog.getBranchByName(master_name_git);




if((master_name_git == null) || (master_name_git == undefined) || (master_name_git == '') || (git_master == undefined)){errorresult('branch name null or incorrect', true); startgithub();} else{

// Enter Master
git_master.fetchContents(function (err, res) { if(err) { errorresult(3); } else{




// More Folder Command
var git_dir2;
function enter_subfolder_git(data3, repeatdetect){if(repeatdetect == true){git_dir2 = git_dir2.getDirByName(data3);} else{git_dir2 = git_dir.getDirByName(data3);}

if(git_dir2 == undefined){errorresult('folder name null or incorrect', true); startgithub();} 
else {git_dir2.fetchContents(function (err, res) {if(err) { errorresult(5); } else{

// Start Download
if(data.type == 'default'){startdownload_git(git_dir2.getContents(), 'Content/Ponies/');}
// Start Download
else {var cmd_command_git = prompt('Directory\nFolder: " ./'+master_name_git+'/'+folder_git_select+' "\n\nReset Command: reset.folder', 'start.download');
if(cmd_command_git == 'start.download'){startdownload_git(git_dir2.getContents(), folder_git_select);}
else if((cmd_command_git == null) || (cmd_command_git == undefined) || (cmd_command_git == '')){cmd_disable = false;}
else if(cmd_command_git == 'reset.folder'){startgithub();}
else{folder_git_select = folder_git_select+cmd_command_git+'/'; enter_subfolder_git(cmd_command_git, true);}
}

}})};}



// First Folder Command
var git_dir;
function enter_folder_git(data2){git_dir = git_master.getDirByName(data2); 

if(git_dir == undefined){errorresult('folder name null or incorrect', true); startgithub();} 
else {git_dir.fetchContents(function (err, res) { if(err) { errorresult(4); } else{

// Default Option
if(data.type == 'default'){enter_subfolder_git('Ponies');}
// Start Download
else {var cmd_command_git = prompt('Directory\nFolder: " ./'+master_name_git+'/'+folder_git_select+' "\n\nReset Command: reset.folder', 'start.download');
if(cmd_command_git == 'start.download'){startdownload_git(git_dir.getContents(), folder_git_select);}
else if((cmd_command_git == null) || (cmd_command_git == undefined) || (cmd_command_git == '')){cmd_disable = false;}
else if(cmd_command_git == 'reset.folder'){startgithub();}
else{folder_git_select = folder_git_select+cmd_command_git+'/'; enter_subfolder_git(cmd_command_git);}
}

}});}}


// Default Option
if(data.type == 'default'){enter_folder_git('Content');}
// Start Download
else {var cmd_command_git = prompt('First Directory\n\nReset Command: reset.folder', 'start.download');
if(cmd_command_git == 'start.download'){startdownload_git(git_master.getContents(), folder_git_select);}
else if((cmd_command_git == null) || (cmd_command_git == undefined) || (cmd_command_git == '')){cmd_disable = false;}
else if(cmd_command_git == 'reset.folder'){startgithub();}
else{folder_git_select = folder_git_select+cmd_command_git+'/'; enter_folder_git(cmd_command_git);}
}
	

	
}});}







}});}});}

// Check Connection
$.ajax({cache: false, url: "https://github.com"}).done(function(){startgithub();}).error(function(){errorresult('connection');});

}

// Not Username
else{$('.items').append($("<command>").append($('<span>')

.text("ERROR System - "), 
$('<span>', {class: "error_system"}).text("username value null")

)); scrolldown(); cmd_disable = false; cmdsystem('get', 'get_source ');}}











var cmd_disable = false;

// CMD User
function cmdsystem(starttype, autocommand){if(cmd_disable == false){
function cmdsystemstart(){

if(starttype == 'clear_st'){var start_cmd_type = '';}
else if(starttype == 'get'){var start_cmd_type = autocommand;}
else{var start_cmd_type = 'help';}
var cmd_result = prompt('Insert a command here:', start_cmd_type);

// Null
if((cmd_result == null)|| (cmd_result == undefined) || (cmd_result == '')){}




// Get Source
else if(cmd_result == "get_source"){$('.items').append($("<command>").append($('<div>', {class: 'help_title'})
.text("get_source <command>"),

// Get Source Default
$('<div>').append($('<span>', {class: "help_info"}).text("default"), $('<span>').text(" - Default Config to get a Desktop Ponies Repository")),
$('<div>').append($('<span>', {class: "help_info"}).text("set"), $('<span>').text(" - Set a Config to get a Desktop Ponies Repository"))

)); scrolldown(); cmdsystem('get', 'get_source ');}

// Default
else if(cmd_result == "get_source default"){
autoreverseen = confirm("Autoreverse On?");
var user_git = prompt("Username", "RoosterDragon");
var repository_git = prompt("Repository ( ./"+user_git+"/{repository}/master/Content/Ponies/... )", "Desktop-Ponies");
get_ponies_git({'user': user_git, 'repository': repository_git, 'type': 'default'});
}

// Set

else if(cmd_result == "get_source set"){
autoreverseen = confirm("Autoreverse On?");
var user_git = prompt("Username", "");
var repository_git = prompt("Repository", "");
master_name_git = 'master';
get_ponies_git({'user': user_git, 'repository': repository_git});
}




// Extract
else if(cmd_result == "extract"){$('.items').append($("<command>").append($('<div>', {class: 'help_title'})
.text("extract <command> - Get a save"),

// 
$('<div>').append($('<span>', {class: "help_info"}).text("ponycode")),
$('<div>').append($('<span>', {class: "help_info"}).text("interactions")),
$('<div>').append($('<span>', {class: "help_info"}).text("ponylist")),
$('<div>').append($('<span>', {class: "help_info"}).text("custom_css")),
$('<div>').append($('<span>', {class: "help_info"}).text("custom_language"))

)); scrolldown(); cmdsystem('get', 'extract ');}

// Pony Code
else if(cmd_result == "extract ponycode"){
chrome.storage.local.get({baseponytext: ''}, function(settings){var blob = new Blob([settings.baseponytext], {type: "text/plain;charset=utf-8"});
saveAs(blob, "pc_m_ponycode.txt");});
$('.items').append($("<command>").append($('<span>').text('ponycode - '), $('<span>', {class: "download_complete"}).text("File extracted successfully!"))); scrolldown();
}

// Interactions
else if(cmd_result == "extract interactions"){
chrome.storage.local.get({interactionstext: ''}, function(settings){var blob = new Blob([settings.interactionstext], {type: "text/plain;charset=utf-8"});
saveAs(blob, "pc_m_interactions.txt");});
$('.items').append($("<command>").append($('<span>').text('interactions - '), $('<span>', {class: "download_complete"}).text("File extracted successfully!"))); scrolldown();
}

// Pony List
else if(cmd_result == "extract ponylist"){
chrome.storage.local.get({ponylisttext: ''}, function(settings){var blob = new Blob([settings.ponylisttext], {type: "text/plain;charset=utf-8"});
saveAs(blob, "pc_m_ponylist.txt");});
$('.items').append($("<command>").append($('<span>').text('ponylist - '), $('<span>', {class: "download_complete"}).text("File extracted successfully!"))); scrolldown();
}

// Custom CSS
else if(cmd_result == "extract custom_css"){
chrome.storage.local.get({customcsstext: ''}, function(settings){var blob = new Blob([settings.customcsstext], {type: "text/plain;charset=utf-8"});
saveAs(blob, "pc_m_custom_css.css");});
$('.items').append($("<command>").append($('<span>').text('custom css - '), $('<span>', {class: "download_complete"}).text("File extracted successfully!"))); scrolldown();
}

// Custom Language
else if(cmd_result == "extract custom_language"){
chrome.storage.local.get({customlanguagetext: ''}, function(settings){var blob = new Blob([settings.customlanguagetext], {type: "text/plain;charset=utf-8"});
saveAs(blob, "pc_m_constom_language.txt");});
$('.items').append($("<command>").append($('<span>').text('custom language - '), $('<span>', {class: "download_complete"}).text("File extracted successfully!"))); scrolldown();
}





// help
else if(cmd_result == "help"){$('.items').append($("<command>").append($('<div>', {class: 'help_title'}).text("Command List:"),

// Get Source Default
$('<div>').append($('<span>', {class: "help_info"}).text("get_source"), $('<span>').text(" - Get a repository of Desktop Ponies")),
$('<div>').append($('<span>', {class: "help_info"}).text("extract"), $('<span>').text(" - Extract extension infos")),
$('<div>').append($('<span>', {class: "help_info"}).text("clear"), $('<span>').text(" - Clear terminal"))

)); scrolldown(); cmdsystem('clear_st');}




// Clear
else if(cmd_result == "clear"){$('.items').empty(); scrolldown(); cmdsystem();}

// Not
else{$('.items').append($("<command>").append(
$('<div>', {class: 'error_system'}).text("Invalid Command! Try again...")
)); scrolldown(); cmdsystem();}




}; setTimeout(function(){cmdsystemstart();}, 100);}}

$(".lycker").click(function(){cmdsystem();});

}

startsystem();