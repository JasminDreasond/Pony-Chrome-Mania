//Set Storage



//Refresh

$("#refreshsystem").click(function() {
    $("#customcsshere").prop("disabled", true).remove();
    $("body").addClass("bodyhide").css({ "display": "none" });
    systemupdate({
        "basepony": true,
        "interactions": true,
        "ponylist": true,
        "customcss": true,
        "customlanguage": true
    }, function() { location.reload(); })
})


//Logo

$("#logo").click(function() {
    window.open('https://jasmindreasond.github.io/New-Browser-Ponies/', '_blank');
})

//Help Base

var openhelpclicks = false

//Progress Bar

$("#testcolors").click(function() {
    if (openhelpclicks == false) {
        $(this).addClass("removebxl").removeClass("openbxl");
        $(".loadprogresstest").addClass("loadprogressteston");
        openhelpclicks = true
    } else if (openhelpclicks == true) {
        $(this).removeClass("removebxl").addClass("openbxl");
        $(".loadprogresstest").removeClass("loadprogressteston");
        openhelpclicks = false
    }
})

//Panel Here

$("#testcolorshelp").click(function() {
    window.open('images/panelhelp.png', '_blank');
})

var openbaselistk = false

//Base List

$("#baselistname").click(function() {
    if (openbaselistk == true) {
        $(".basegeneratorviewpk").addClass("hidebaselist");
        $("#tagslistcomplete").removeClass("urllistbaseexpand");
        openbaselistk = false
    } else if (openbaselistk == false) {
        $(".basegeneratorviewpk").removeClass("hidebaselist");
        $("#tagslistcomplete").addClass("urllistbaseexpand");
        openbaselistk = true
    }
})

//Help List

$("#baseconfighelp").click(function() {
    $("#myconvertcode").modal('toggle');
    $("#myconvertcodehelp").modal();
})

$("#baseconfighelpclose").click(function() {
    $("#myconvertcode").modal();
    $("#myconvertcodehelp").modal('toggle');
})


$("#ponylistconfighelp").click(function() {
    $("#myconfigcode").modal('toggle');
    $("#myconfigcodehelp").modal();
})

$("#closehelpcode").click(function() {
    $("#myconfigcode").modal();
    $("#myconfigcodehelp").modal('toggle');
})

//Base URL

$("#baseurlappendhere").click(function() {
    $("#convertponiescode, #convertponiescodebaseurl, #convertinteractionsscode, #customcssstskcode, #convertponylist").val("");
    $("#autoreversecodeenpx").prop("checked", false);

    $("#myconvertcode").modal();
})


//Ponies Code
$("#baseconfigconfirmponycode").click(function() {

    // Montar Get
    var pony_name_default = $("#convertponiescode").val().split('\n')[0];
    var pony_name = $("#convertponiescode").val().split('\n')[0];
    var pony_name_original = pony_name;
    var pony_name = pony_name.replace(/\'/g, '');
    var pony_category = $("#convertponiescode").val().split('\n')[1];
    var pony_config = $("#convertponiescode").val().split('Interaction,')[0];
    var pony_interactions = $("#convertponiescode").val().replace(pony_config, '').replace(/\'/g, '');;
    var pony_config = pony_config.replace(pony_config.split('\n')[0], pony_name);

    var convertname_st = pony_name.replace('Name,', '');
    if ((encodeURI(convertname_st).indexOf('%20') > -1) && (convertname_st.indexOf('"') == -1)) { var convertname_st = '"' + convertname_st + '"'; var pony_config = pony_config.replace(pony_name, 'Name,' + convertname_st); }

    // Replace System
    var replaceponycode1 = new RegExp('"', 'g');
    var replaceponycode2 = new RegExp('\n', 'g');

    // Base
    var converponiescode = pony_config;
    var converponiescodebaseurl = $("#convertponiescodebaseurl").val();

    if (converponiescode == "") { return }


    // Generator Pony Code
    var converponiescode = converponiescode.replace(replaceponycode1, '\u005c"').replace(replaceponycode2, '\u005cn').replace('Name,', '{"ini": "Name,');
    var converponiescode = converponiescode.replace(converponiescode, '' + converponiescode + '\u005cn", "baseurl": "' + converponiescodebaseurl + '"}');


    // Auto Reverse
    if ($("#autoreversecodeenpx").prop("checked") == true) {
        var converponiescode = converponiescode.replace(/left\.png/g, "right.png").replace(/left\.gif/g, "right.gif");
    }


    // Entregar Valor Pony Config]
    var converponiescode_json = JSON.parse(converponiescode);

    // Entregar Pony Name Config

    if ($("#convertponiescode").val().indexOf('.gif') > -1) {
        var getimg = $("#convertponiescode").val().split('.gif')[0];
        var getimg = getimg.substring(getimg.lastIndexOf('"'), getimg.lastIndexOf('"') + getimg.lastIndexOf('"')).replace(/\"/g, "") + '.gif';
    } else if ($("#convertponiescode").val().indexOf('.png') > -1) {
        var getimg = $("#convertponiescode").val().split('.png')[0];
        var getimg = getimg.substring(getimg.lastIndexOf('"'), getimg.lastIndexOf('"') + getimg.lastIndexOf('"')).replace(/\"/g, "") + '.png';
    }

    var ponyname_generator =
        '<ponytags>' + pony_category.replace('Categories,', '').replace(/\"/g, '').replace(/\,/g, ', ') + '</ponytags>\n' +
        '<ponyname>' + pony_name_original.replace('Name,', '') + '</ponyname>\n' +
        '<baseurl>' + converponiescodebaseurl + '</baseurl>\n' +
        '<ponyimage>' + $("#convertponiescodebaseurl").val() + encodeURIComponent(pony_name_default.replace('Name,', '')) + '/' + getimg + '</ponyimage>\n' +
        '<datapony>' + pony_name.replace('Name,', '').replace(/\"/g, '') + '</datapony>\n' +
        '<ponyid>' + pony_name.replace('Name,', '').replace(/\"/g, '').replace(/ /g, '_').toLowerCase() + '</ponyid>\n';


    // Interações
    var converinteractionscode = pony_interactions;
    var replace_interactions_code = converinteractionscode.split(",")[1] + ',\\"' + pony_name.replace('Name,', '') + '\\",';

    var converinteractionscode = converinteractionscode
        .replace(replaceponycode1, '\\"')
        .replace(replaceponycode2, '\\n\n')
        .replace("Interaction,", "")
        .replace(converinteractionscode.split(",")[1] + ',', replace_interactions_code);

    //Result




    //Result
    $("#convertponiescode").val(JSON.stringify(converponiescode_json));
    $("#convertponylist").prop("disabled", false).val(ponyname_generator);
    $("#convertinteractionsscode").prop("disabled", false).val(converinteractionscode);


})



//Custom CSS
$("#customcssstskconfirm").click(function() {

    //Base
    var customcssbasepkerp = $("#customcssstskcode").val();

    //System
    var customcssbasepkerp = customcssbasepkerp.replace(/url\(/g, "urlfile(").replace(/\.gif/g, '[gif]').replace(/\.gif"/g, '[gif]').replace(/\.png/g, '[png]').replace(/\.png"/g, '[png]').replace(/\.jpg/g, '[jpg]').replace(/\.jpg"/g, '[jpg]').replace(/\.jpeg/g, '[jpeg]').replace(/\.jpeg"/g, '[jpeg]')
    var customcssbasepkerp = customcssbasepkerp
        .replace(/\.modal-dialog/g, "[modal-dialog]")
        .replace(/\.modal-content/g, "[modal-content]")
        .replace(/\.modal-header/g, "[modal-header]")
        .replace(/\.modal-body/g, "[modal-body]")
        .replace(/\.modal-footer/g, "[modal-footer]")
        .replace(/\.searchbase/g, "[searchbase]")
        .replace(/\.languagebase/g, "[languagebase]")
        .replace(/\.warnbasepx/g, "[warnbasepx]")
        .replace(/\.titleinsertbase/g, "[titleinsertbase]")
        .replace(/\.clickponyoptions/g, "[clickponyoptions]")
        .replace(/\.table/g, "[table]")
        .replace(/\.tableponiesoptions/g, "[tableponiesoptions]")
        .replace(/\.container/g, "[container]")
        .replace(/\.warnhttpsek/g, "[warnhttpsek]")
        .replace(/\.pagseguroimagesplus/g, "[pagseguroimagesplus]")
        .replace(/\.payimagesplus/g, "[payimagesplus]")
        .replace(/\.disabledremover/g, "[disabledremover]")
        .replace(/\.updatebxl/g, "[updatebxl]")
        .replace(/\.openbxl/g, "[openbxl]")
        .replace(/\.removebxl/g, "[removebxl]")
        .replace(/\.warningcolor/g, "[warningcolor]")
        .replace(/\.littlefailsave/g, "[littlefailsave]")
        .replace(/\.nothingitemcode2/g, "[nothingitemcode2]")
        .replace(/\.nothingitemcode/g, "[nothingitemcode]")
        .replace(/\.nothingurlpage/g, "[nothingurlpage]")
        .replace(/\.failloadck/g, "[failloadck]")
        .replace(/\.failloadck2/g, "[failloadck2]")
        .replace(/\.selected/g, "[selected]")
        .replace(/\.urlonoffcustom/g, "[urlonoffcustom]")
        .replace(/\.optionspagecustom/g, "[optionspagecustom]")
        .replace(/\.filecentercustom/g, "[filecentercustom]")
        .replace(/\.hideurllist/g, "[hideurllist]")
        .replace(/\.tborder/g, "[tborder]")
        .replace(/\.menuhelp/g, "[menuhelp]")
        .replace(/\.getbaseurltrue2/g, "[getbaseurltrue2]")
        .replace(/\.getbaseurltrue/g, "[getbaseurltrue]")
        .replace(/\.logobr/g, "[logobr]")
        .replace(/\.urltop/g, "[urltop]")
        .replace(/\.thead/g, "[thead]")
        .replace(/\.urltop/g, "[urltop]")
        .replace(/\.panelponylist1/g, "[panelponylist1]")
        .replace(/\.panelponylist2/g, "[panelponylist2]")
        .replace(/\.warnclsss1/g, "[warnclsss1]")
        .replace(/\.warnclsss2/g, "[warnclsss2]")
        .replace(/\.warnclsss3/g, "[warnclsss3]")
        .replace(/\.warnclsss4/g, "[warnclsss4]")
        .replace(/\.warnclsss5/g, "[warnclsss5]")
        .replace(/\.warnclsss6/g, "[warnclsss6]");
    var customcssbasepkerp = customcssbasepkerp

        .replace(/\.ponyimg/g, "[ponyimg]")
        .replace(/\.ponyname/g, "[ponyname]")
        .replace(/\.number/g, "[number]")

    .replace(/\.truest/g, "[truest]")
        .replace(/\.falsest/g, "[falsest]")
        .replace(/\.nonest/g, "[nonest]")
        .replace(/\.numberst/g, "[numberst]")
        .replace(/\.psst/g, "[psst]")
        .replace(/\.audiost/g, "[audiost]")
        .replace(/\.imagest/g, "[imagest]")
        .replace(/\.centerst/g, "[centerst]")
        .replace(/\.rightst/g, "[rightst]")
        .replace(/\.leftst/g, "[leftst]")
        .replace(/\.mouseoverst/g, "[mouseoverst]")
        .replace(/\.fixedst/g, "[fixedst]")
        .replace(/\.verticalst/g, "[verticalst]")
        .replace(/\.horizontalst/g, "[horizontalst]")
        .replace(/\.dverticalst/g, "[dverticalst]")
        .replace(/\.dhorizontalst/g, "[dhorizontalst]")
        .replace(/\.allst/g, "[allst]")
        .replace(/\.diagonalst/g, "[diagonalst]")
        .replace(/\.mirrorst/g, "[mirrorst]")
        .replace(/\.warningglobalbase1/g, "[warningglobalbase1]")
        .replace(/\.warningglobalbase2/g, "[warningglobalbase2]")
    var customcssbasepkerp = customcssbasepkerp.replace(/\.deviantartst/g, "[deviantartst]").replace(/\.\.\//g, "[back]").replace(/\/\*/g, "[x1]").replace(/\*\//g, "[x2]").replace(/ 0\./g, "[numb00]").replace(/\,0\./g, "[numb0]").replace(/\,\.0/g, "[numb02]").replace(/!URL-FILE!\//g, "").replace(/"/g, "").replace(/'/g, "")
    var customcssbasepkerp = customcssbasepkerp.replace(/\//g, "").replace(/\\/g, "").replace(/\\n/g, "").replace(/&/g, "").replace(/&#/g, "").replace(/\./g, "")

    //Result
    $("#customcssstskcode").val(customcssbasepkerp);

})




//Backup System

function sendvariablepke(data) {
    save_options(true, data, function() {
        save_options_mycommand(true, data, function() {
            rest_save(data, function() {
                $("#customcsshere").prop("disabled", true).remove();
                $("body").addClass("bodyhide").css({ "display": "none" });
                systemupdate({
                    "basepony": true,
                    "interactions": true,
                    "ponylist": true,
                    "customcss": true,
                    "customlanguage": true
                }, function() { location.reload(); })
            })
        })
    })
}

$("#openbackup").click(function() {
    $("#mybackupmod").modal({ keyboard: false });
    $("#backupanticlick").removeClass("hide").off("click").click(function() { location.reload(); });
    $(".container").fadeOut();
});

$("#backupexport").click(function() {
    restore_options(true, function(settings) {
        if (settings.exdlenabled == true) {
            var mycommandbackupk = '32XSPK32browserponies1tmycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies1tmycommand + '32XSPK3243kpekx54 32XSPK32browserponies2tmycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies2tmycommand + '32XSPK3243kpekx54 32XSPK32browserponies3tmycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies3tmycommand + '32XSPK3243kpekx54 32XSPK32browserponies4mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies4mycommand + '32XSPK3243kpekx54 32XSPK32browserponies5mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies5mycommand + '32XSPK3243kpekx54 32XSPK32browserponies6mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies6mycommand + '32XSPK3243kpekx54 32XSPK32browserponies7mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies7mycommand + '32XSPK3243kpekx54 32XSPK32browserponies8mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies8mycommand + '32XSPK3243kpekx54 32XSPK32browserponies9mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies9mycommand + '32XSPK3243kpekx54 32XSPK32browserponies10mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies10mycommand + '32XSPK3243kpekx54 32XSPK32browserponies11mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies11mycommand + '32XSPK3243kpekx54 32XSPK32browserponies12mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies12mycommand + '32XSPK3243kpekx54 32XSPK32browserponies13mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies13mycommand + '32XSPK3243kpekx54 32XSPK32browserponies14mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies14mycommand + '32XSPK3243kpekx54 32XSPK32browserponies15mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies15mycommand + '32XSPK3243kpekx54 32XSPK32browserponies16mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies16mycommand + '32XSPK3243kpekx54 32XSPK32browserponies17mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies17mycommand + '32XSPK3243kpekx54 32XSPK32browserponies18mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies18mycommand + '32XSPK3243kpekx54 32XSPK32browserponies19mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies19mycommand + '32XSPK3243kpekx54 32XSPK32browserponies20mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies20mycommand + '32XSPK3243kpekx54 32XSPK32browserponies21mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies21mycommand + '32XSPK3243kpekx54 32XSPK32browserponies22mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies22mycommand + '32XSPK3243kpekx54 32XSPK32browserponies23mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies23mycommand + '32XSPK3243kpekx54 32XSPK32browserponies24mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies24mycommand + '32XSPK3243kpekx54 32XSPK32browserponies25mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies25mycommand + '32XSPK3243kpekx54 32XSPK32browserponies26mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies26mycommand + '32XSPK3243kpekx54 32XSPK32browserponies27mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies27mycommand + '32XSPK3243kpekx54 32XSPK32browserponies28mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies28mycommand + '32XSPK3243kpekx54 32XSPK32browserponies29mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies29mycommand + '32XSPK3243kpekx54 32XSPK32browserponies30mycommand32XSPK32654xsd342 32XSPK32' + settings.browserponies30mycommand + '32XSPK32'
            var mycommandbackupk = mycommandbackupk.replace(/\"/g, '43XSDP43').replace(/32XSPK32/g, '"').replace(/\{/g, '12perk12').replace(/\}/g, '13perk13').replace(/654xsd342/g, ":").replace(/\n/g, "").replace(/43kpekx54/g, ",")

            var restsystempkerx = '"browserponies1t": "' + settings.browserponies1t + '", "browserponies2t": "' + settings.browserponies2t + '", "browserponies3t": "' + settings.browserponies3t + '", "browserponies4": "' + settings.browserponies4 + '", "browserponies5": "' + settings.browserponies5 + '", "browserponies6": "' + settings.browserponies6 + '", "browserponies7": "' + settings.browserponies7 + '", "browserponies8": "' + settings.browserponies8 + '", "browserponies9": "' + settings.browserponies9 + '", "browserponies10": "' + settings.browserponies10 + '", "browserponies11": "' + settings.browserponies11 + '", "browserponies12": "' + settings.browserponies12 + '", "browserponies13": "' + settings.browserponies13 + '", "browserponies14": "' + settings.browserponies14 + '", "browserponies15": "' + settings.browserponies15 + '", "browserponies16": "' + settings.browserponies16 + '", "browserponies17": "' + settings.browserponies17 + '", "browserponies18": "' + settings.browserponies18 + '", "browserponies19": "' + settings.browserponies19 + '", "browserponies20": "' + settings.browserponies20 + '", "browserponies21": "' + settings.browserponies21 + '", "browserponies22": "' + settings.browserponies22 + '", "browserponies23": "' + settings.browserponies23 + '", "browserponies24": "' + settings.browserponies24 + '", "browserponies25": "' + settings.browserponies25 + '", "browserponies26": "' + settings.browserponies26 + '", "browserponies27": "' + settings.browserponies27 + '", "browserponies28": "' + settings.browserponies28 + '", "browserponies29": "' + settings.browserponies29 + '", "browserponies30": "' + settings.browserponies30 + '", '
            var moresettingsbackup = '"ponylistcode": "' + settings.ponylistcode + '", "baseconfigke1": "' + settings.baseconfigke1 + '", "baseconfigke2": "' + settings.baseconfigke2 + '", "customcss": "' + settings.customcss + '", "customlanguage": "' + settings.customlanguage + '", "browserponies30globalek": ' + settings.browserponies30globalek + ', "refreshautoconfig": ' + settings.refreshautoconfig + ', "laguageoptions": "' + settings.laguageoptions + '", "exdlenabled": ' + settings.exdlenabled + ', '
            var truefalsesystempkr = '"browserponies1turleditorsktrue": "' + settings.browserponies1turleditorsktrue + '", "browserponies1turleditorskfalse": "' + settings.browserponies1turleditorskfalse + '","browserponies2turleditorsktrue": "' + settings.browserponies2turleditorsktrue + '", "browserponies2turleditorskfalse": "' + settings.browserponies2turleditorskfalse + '","browserponies3turleditorsktrue": "' + settings.browserponies3turleditorsktrue + '", "browserponies3turleditorskfalse": "' + settings.browserponies3turleditorskfalse + '","browserponies4urleditorsktrue": "' + settings.browserponies4urleditorsktrue + '", "browserponies4urleditorskfalse": "' + settings.browserponies4urleditorskfalse + '","browserponies5urleditorsktrue": "' + settings.browserponies5urleditorsktrue + '", "browserponies5urleditorskfalse": "' + settings.browserponies5urleditorskfalse + '","browserponies6urleditorsktrue": "' + settings.browserponies6urleditorsktrue + '", "browserponies6urleditorskfalse": "' + settings.browserponies6urleditorskfalse + '","browserponies7urleditorsktrue": "' + settings.browserponies7urleditorsktrue + '", "browserponies7urleditorskfalse": "' + settings.browserponies7urleditorskfalse + '","browserponies8urleditorsktrue": "' + settings.browserponies8urleditorsktrue + '", "browserponies8urleditorskfalse": "' + settings.browserponies8urleditorskfalse + '","browserponies9urleditorsktrue": "' + settings.browserponies9urleditorsktrue + '", "browserponies9urleditorskfalse": "' + settings.browserponies9urleditorskfalse + '","browserponies10urleditorsktrue": "' + settings.browserponies10urleditorsktrue + '", "browserponies10urleditorskfalse": "' + settings.browserponies10urleditorskfalse + '","browserponies11urleditorsktrue": "' + settings.browserponies11urleditorsktrue + '", "browserponies11urleditorskfalse": "' + settings.browserponies11urleditorskfalse + '","browserponies12urleditorsktrue": "' + settings.browserponies12urleditorsktrue + '", "browserponies12urleditorskfalse": "' + settings.browserponies12urleditorskfalse + '","browserponies13urleditorsktrue": "' + settings.browserponies13urleditorsktrue + '", "browserponies13urleditorskfalse": "' + settings.browserponies13urleditorskfalse + '","browserponies14urleditorsktrue": "' + settings.browserponies14urleditorsktrue + '", "browserponies14urleditorskfalse": "' + settings.browserponies14urleditorskfalse + '","browserponies15urleditorsktrue": "' + settings.browserponies15urleditorsktrue + '", "browserponies15urleditorskfalse": "' + settings.browserponies15urleditorskfalse + '","browserponies16urleditorsktrue": "' + settings.browserponies16urleditorsktrue + '", "browserponies16urleditorskfalse": "' + settings.browserponies16urleditorskfalse + '","browserponies17urleditorsktrue": "' + settings.browserponies17urleditorsktrue + '", "browserponies17urleditorskfalse": "' + settings.browserponies17urleditorskfalse + '","browserponies18urleditorsktrue": "' + settings.browserponies18urleditorsktrue + '", "browserponies18urleditorskfalse": "' + settings.browserponies18urleditorskfalse + '","browserponies19urleditorsktrue": "' + settings.browserponies19urleditorsktrue + '", "browserponies19urleditorskfalse": "' + settings.browserponies19urleditorskfalse + '","browserponies20urleditorsktrue": "' + settings.browserponies20urleditorsktrue + '", "browserponies20urleditorskfalse": "' + settings.browserponies20urleditorskfalse + '","browserponies21urleditorsktrue": "' + settings.browserponies21urleditorsktrue + '", "browserponies21urleditorskfalse": "' + settings.browserponies21urleditorskfalse + '","browserponies22urleditorsktrue": "' + settings.browserponies22urleditorsktrue + '", "browserponies22urleditorskfalse": "' + settings.browserponies22urleditorskfalse + '","browserponies23urleditorsktrue": "' + settings.browserponies23urleditorsktrue + '", "browserponies23urleditorskfalse": "' + settings.browserponies23urleditorskfalse + '","browserponies24urleditorsktrue": "' + settings.browserponies24urleditorsktrue + '", "browserponies24urleditorskfalse": "' + settings.browserponies24urleditorskfalse + '","browserponies25urleditorsktrue": "' + settings.browserponies25urleditorsktrue + '", "browserponies25urleditorskfalse": "' + settings.browserponies25urleditorskfalse + '","browserponies26urleditorsktrue": "' + settings.browserponies26urleditorsktrue + '", "browserponies26urleditorskfalse": "' + settings.browserponies26urleditorskfalse + '","browserponies27urleditorsktrue": "' + settings.browserponies27urleditorsktrue + '", "browserponies27urleditorskfalse": "' + settings.browserponies27urleditorskfalse + '","browserponies28urleditorsktrue": "' + settings.browserponies28urleditorsktrue + '", "browserponies28urleditorskfalse": "' + settings.browserponies28urleditorskfalse + '","browserponies29urleditorsktrue": "' + settings.browserponies29urleditorsktrue + '", "browserponies29urleditorskfalse": "' + settings.browserponies29urleditorskfalse + '","browserponies30urleditorsktrue": "' + settings.browserponies30urleditorsktrue + '", "browserponies30urleditorskfalse": "' + settings.browserponies30urleditorskfalse + '", '

            var backupkerpexport = '{' + restsystempkerx + moresettingsbackup + truefalsesystempkr + mycommandbackupk + '}'
            var backupkerpexport = backupkerpexport.replace(/undefined/g, "null").replace(/"undefined"/g, '"null"')


            var blob = new Blob([backupkerpexport], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "pony_chrome_mania_backup.txt");
        }
    })
})

$("#backupimport").click(function() {

    var valuebackuppke = $("#backupspacepk").val();

    if ((valuebackuppke == "") || (valuebackuppke == null)) {} else {
        var valuebackupright = JSON.parse(valuebackuppke);
        for (var i = 0; i < 28; i++) {
            var numbekrx = i + 4
            if (numbekrx == 31) {
                for (var i2 = 0; i2 < 28; i2++) {
                    var numbekrx = i2 + 1
                    if (numbekrx == 4) { sendvariablepke(valuebackupright); return; } else {
                        var namepker = "browserponies" + numbekrx + "tmycommand"
                        var stepkx2 = valuebackupright[namepker]
                        var stepkx2 = stepkx2.replace(/43XSDP43/g, '"').replace(/12perk12/g, '{').replace(/13perk13/g, '}')
                        valuebackupright[namepker] = stepkx2
                    }
                }
            } else {
                var namepker = "browserponies" + numbekrx + "mycommand"
                var stepkx1 = valuebackupright[namepker]
                var stepkx1 = stepkx1.replace(/43XSDP43/g, '"').replace(/12perk12/g, '{').replace(/13perk13/g, '}')
                valuebackupright[namepker] = stepkx1
            }
        }
    }

})