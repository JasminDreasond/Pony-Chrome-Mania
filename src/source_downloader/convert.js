function scrolldown(){
var n = $(document).height();
$('html, body').animate({ scrollTop: n }, 1);
};

function startepkex(){ var kepkxed = true;
function yaypekxs(){

if(kepkxed == true){kepkxed = false; $('.lycker').addClass('hide');}
else if(kepkxed == false){kepkxed = true; $('.lycker').removeClass('hide');}

}; setInterval(function(){yaypekxs();}, 500);}
startepkex();

// Start System

var ponycode_git = [];
var ponylist_git = [];
var ponyinteractions_git = [];
var ponylistcategory_git = '';
var ponylistcategory_git_complete;
var ponylistcategory_git_complete_j;

var startquestion = confirm("Start?");


// Start Now
if(startquestion == true){

var autoreverseen = confirm("Autoreverse On?");
var user_git = prompt("Username", "RoosterDragon");
var repository_git = prompt("Repository ( ./"+user_git+"/{repository}/master/Content/Ponies/... )", "Desktop-Ponies");


// Download Start
$('.items_title').append($('<p>').text(document.title+' made by Jackie Apkon (c)\n'));





// System Go
function startsystem(){

// Get Ponies
var count_git_items;
var count_git_items_c;

var get_ponies_git = function(data ,finalresult, errordownload, errorresult){if((user_git != null) && (user_git != undefined) && (user_git != '')){

$('.items').append($('<span>').text("Please, wait a response of GitHub.com \n"));

// Config Inicial
var git_user = new Gh3.User(data.user) ,
git_blog = new Gh3.Repository(data.repository, git_user);

// Start
git_blog.fetch(function (err, res) { if(err) { errorresult(1); } else{
git_blog.fetchBranches(function (err, res) { if(err) { errorresult(2); } else{
var git_master = git_blog.getBranchByName("master");
git_master.fetchContents(function (err, res) { if(err) { errorresult(3); } else{

var git_dir = git_master.getDirByName("Content");
git_dir.fetchContents(function (err, res) { if(err) { errorresult(4); } else{
		
// Enter Folder
var git_dir2 = git_dir.getDirByName("Ponies");
git_dir2.fetchContents(function (err, res) {if(err) { errorresult(5); } else{

if(autoreverseen == true){ponycode_git.push({"autoreverse": true})}
console.log(JSON.stringify(git_dir2.getContents()));

// Get Folders 
var totalfoder_git = git_dir2.getContents();
count_git_items = totalfoder_git.length;
count_git_items_c = 0;

for (i = 0; i < totalfoder_git.length; i++) {if(totalfoder_git[i].type == "dir"){
	
$.ajax({cache: false, url: "https://raw.githubusercontent.com/RoosterDragon/Desktop-Ponies/master/Content/Ponies/"+encodeURIComponent(totalfoder_git[i].name)+"/pony.ini"}).done(function(github){finalresult(github, this);}).error(function(){errordownload(this.url);});

}}

}});}});}});}});}});

} else{$('.items').append($("<span>").append($('<span>').text("ERROR System - "), $('<span>', {class: "error_system"}).text("username value null\n")));}}




// Sistema

get_ponies_git({'user': user_git, 'repository': repository_git}, 


function(github, thishere){

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
$('.items').append($("<span>").append($('<span>').text(Math.floor(100*count_git_items_c/count_git_items)+"% - "+thishere.url+" - "), $('<span>', {class: "download_complete"}).text("Download Complete\n")));


// 100% Complete
count_git_items_c = count_git_items_c+1
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





// Download Pony Code
var blob = new Blob([ponycode_git_t], {type: "text/plain;charset=utf-8"});
saveAs(blob, "ponycode_"+user_git+".txt");

// Download Pony List
var blob = new Blob([
'The artwork used is from the <b>Ponychan fork</b> of <b>Desktop Ponies</b>, <b>My Little Pony: Friendship Is Magic</b> is <b>©</b> by <b>Hasbro</b> and <b>Lauren Faust</b>.\n\n'+
'<randomtags>'+ponylistcategory_git_complete+'</randomtags>\n'+
'<randomname>Random Pony</randomname>\n'+
'<randomimg>source-base(url)Ponies/random%20pony/random-pony.gif</randomimg>\n'+
'<randomsystem>\n\n\n\n'+
listponylist
], {type: "text/plain;charset=utf-8"});
saveAs(blob, "ponylist_"+user_git+".txt");

// Download Interactions
var blob = new Blob([listinteractions], {type: "text/plain;charset=utf-8"});
saveAs(blob, "interactions_"+user_git+".txt");

// Finish
$('.items').append($('<span>').text("100% - All downloads completed successfully!\n"));
}


// Scroll
scrolldown();

}, 

// Errors
function(parterror){$('.items').append($("<span>").append($('<span>').text(Math.floor(100*count_git_items_c/count_git_items)+"% - "+parterror+" - "), $('<span>', {class: "download_error"}).text(+"Download ERROR\n"))); scrolldown();},
function(parterror){$('.items').append($("<span>").append($('<span>').text(Math.floor(100*count_git_items_c/count_git_items)+"% - ERROR System - code "), $('<span>', {class: "error_system"}).text(parterror+"\n")));});





// Start
} startsystem();}

// Aborted
else{$('.items').append($("<span>",{class: "download_aborted"}).text("System Aborted")); scrolldown();}