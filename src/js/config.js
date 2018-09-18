function setoptionsalertpony(send, reponse) { chrome.extension.sendMessage({ text: send }, function(reponse) { if (reponse.type == reponse) {} }); }

function tagcrepkex(data, data1, data2) {
    if (data.append == true) {
        $(data.local).append(
            $(data.tag, { id: data.id })
        )
    } else if (data.double == true) {
        $(data.local).replaceWith($(data1.tag, { id: data1.id }).append(
            $(data2.tag, { id: data2.id })
        ))
    } else {
        $(data.local).replaceWith(
            $(data.tag, { id: data.id })
        )
    }
}

//Base Table

function viewsystempk(setconfigpk) {
    chrome.storage.local.get(function(config) {
        var basepony312 = config.baseponytext
        var basepony312 = '[' + basepony312 + ']'
        var basepony313 = JSON.parse(basepony312)

        if ($("#configbasepke" + setconfigpk.number + "").is(":visible")) {
            $("#configbasepke" + setconfigpk.number + "").remove();
            $("#" + setconfigpk.id).css("fontWeight", "");
        } else {
            $("#" + setconfigpk.id).css("fontWeight", "bold");
            var setinipkerx = basepony313[setconfigpk.number].ini

            var setinipkerx = setinipkerx
                .replace(/https:\/\/img01.deviantart.net\//g, "<span class='deviantartst'>Deviantart</span>/")
                .replace(/https:\/\/pre01.deviantart.net\//g, "<span class='deviantartst'>Deviantart</span>/")
                .replace(/https:\/\/orig01.deviantart.net\//g, "<span class='deviantartst'>Deviantart</span>/")

            var setinipkerx = setinipkerx
                .replace(/\"/g, "")
                .replace(/Name\,/g, "<br><b>Name:</b> ")
                .replace(/Categories\,/g, "<br><b>Categories:</b> ")
                .replace(/Behavior\,/g, "<br><b>Behavior:</b> ")
                .replace(/Effect\,/g, "<br><b>Effect:</b> ")
                .replace(/Speak\,/g, "<br><b>Speak:</b> ")
                .replace(/\{/g, "<b>{</b>")
                .replace(/\}/g, "<b>}</b>")
                .replace(/\,/g, "<b>|</b>")

            var setinipkerx = setinipkerx
                .replace(/True/g, "<span class='truest'>True</span>")
                .replace(/False/g, "<span class='falsest'>False</span>")
                .replace(/None/g, "<span class='nonest'>None</span>")
                .replace(/Center/g, "<span class='centerst'>Center</span>")
                .replace(/Right/g, "<span class='rightst'>Right</span>")
                .replace(/Left/g, "<span class='leftst'>Left</span>")

            .replace(/Fixed/g, "<span class='fixedst'>Fixed</span>")
                .replace(/Vertical\_Only/g, "<span class='verticalst'>Vertical_Only</span>")
                .replace(/Horizontal\_Only/g, "<span class='horizontalst'>Horizontal_Only</span>")
                .replace(/Diagonal\_Only\_Only/g, "<span class='diagonalst'>Diagonal_Only</span>")
                .replace(/Diagonal\_Vertical/g, "<span class='dverticalst'>Diagonal_Vertical</span>")
                .replace(/Diagonal\_horizontal/g, "<span class='dhorizontalst'>Diagonal_horizontal</span>")
                .replace(/MouseOver/g, "<span class='mouseoverst'>MouseOver</span>")
                .replace(/Mirror/g, "<span class='mirrorst'>Mirror</span>")
                .replace(/All/g, "<span class='allst'>All</span>")


            var setinipkerx = setinipkerx
                .replace(/\.jfif/gi, "<span class='imagest'>.jfif</span>")
                .replace(/\.webp/gi, "<span class='imagest'>.webp</span>")
                .replace(/\.tiff/gi, "<span class='imagest'>.tiff</span>")
                .replace(/\.jpeg/gi, "<span class='imagest'>.jpeg</span>")
                .replace(/\.webm/gi, "<span class='audiost'>.webm</span>")
                .replace(/\.opus/gi, "<span class='audiost'>.opus</span>")
                .replace(/\.flac/gi, "<span class='audiost'>.flac</span>")
                .replace(/\.iklax/gi, "<span class='audiost'>.iklax</span>")
                .replace(/\.aiff/gi, "<span class='audiost'>.aiff</span>")
                .replace(/\.jpg/gi, "<span class='imagest'>.jpg</span>")
                .replace(/\.gif/gi, "<span class='imagest'>.gif</span>")
                .replace(/\.bmp/gi, "<span class='imagest'>.bmp</span>")
                .replace(/\.png/gi, "<span class='imagest'>.png</span>")
                .replace(/\.ico/gi, "<span class='imagest'>.ico</span>")
                .replace(/\.exif/gi, "<span class='imagest'>.exif</span>")
                .replace(/\.3gp/gi, "<span class='audiost'>.3gp</span>")
                .replace(/\.act/gi, "<span class='audiost'>.act</span>")
                .replace(/\.amr/gi, "<span class='audiost'>.amr</span>")
                .replace(/\.ape/gi, "<span class='audiost'>.ape</span>")
                .replace(/\.awb/gi, "<span class='audiost'>.awb</span>")
                .replace(/\.dct/gi, "<span class='audiost'>.dct</span>")
                .replace(/\.dss/gi, "<span class='audiost'>.dss</span>")
                .replace(/\.dvf/gi, "<span class='audiost'>.dvf</span>")
                .replace(/\.gsm/gi, "<span class='audiost'>.gsm</span>")
                .replace(/\.ivs/gi, "<span class='audiost'>.ivs</span>")
                .replace(/\.m4a/gi, "<span class='audiost'>.m4a</span>")
                .replace(/\.m4b/gi, "<span class='audiost'>.m4b</span>")
                .replace(/\.m4p/gi, "<span class='audiost'>.m4p</span>")
                .replace(/\.mmf/gi, "<span class='audiost'>.mmf</span>")
                .replace(/\.mp3/gi, "<span class='audiost'>.mp3</span>")
                .replace(/\.mpc/gi, "<span class='audiost'>.mpc</span>")
                .replace(/\.msv/gi, "<span class='audiost'>.msv</span>")
                .replace(/\.ogg/gi, "<span class='audiost'>.ogg</span>")
                .replace(/\.oga/gi, "<span class='audiost'>.oga</span>")
                .replace(/\.raw/gi, "<span class='audiost'>.raw</span>")
                .replace(/\.sln/gi, "<span class='audiost'>.sln</span>")
                .replace(/\.tta/gi, "<span class='audiost'>.tta</span>")
                .replace(/\.vox/gi, "<span class='audiost'>.vox</span>")
                .replace(/\.wav/gi, "<span class='audiost'>.wav</span>")
                .replace(/\.wma/gi, "<span class='audiost'>.wma</span>")
                .replace(/\.wv/gi, "<span class='audiost'>.wv</span>")
                .replace(/\.aac/gi, "<span class='audiost'>.aac</span>")
                .replace(/\.aax/gi, "<span class='audiost'>.aax</span>")
                .replace(/\.aa/gi, "<span class='audiost'>.aa</span>")
                .replace(/\.rm/gi, "<span class='audiost'>.rm</span>")
                .replace(/\.ra/gi, "<span class='audiost'>.ra</span>")
                .replace(/\.au/gi, "<span class='audiost'>.au</span>")
                .replace(/\./g, "<span class='psst'>.</span>")

            var setinipkerx = setinipkerx
                .replace(/0/g, "<span class='numberst'>0</span>")
                .replace(/\-0/g, "<span class='numberst'>-0</span>")
                .replace(/1/g, "<span class='numberst'>1</span>")
                .replace(/\-1/g, "<span class='numberst'>-1</span>")
                .replace(/2/g, "<span class='numberst'>2</span>")
                .replace(/\-2/g, "<span class='numberst'>-2</span>")
                .replace(/3/g, "<span class='numberst'>3</span>")
                .replace(/\-3/g, "<span class='numberst'>-3</span>")
                .replace(/4/g, "<span class='numberst'>4</span>")
                .replace(/\-4/g, "<span class='numberst'>-4</span>")
                .replace(/5/g, "<span class='numberst'>5</span>")
                .replace(/\-5/g, "<span class='numberst'>-5</span>")
                .replace(/6/g, "<span class='numberst'>6</span>")
                .replace(/\-6/g, "<span class='numberst'>-6</span>")
                .replace(/7/g, "<span class='numberst'>7</span>")
                .replace(/\-7/g, "<span class='numberst'>-7</span>")
                .replace(/8/g, "<span class='numberst'>8</span>")
                .replace(/\-8/g, "<span class='numberst'>-8</span>")
                .replace(/9/g, "<span class='numberst'>9</span>")
                .replace(/\-9/g, "<span class='numberst'>-9</span>")


            $("#xbaselike" + setconfigpk.number + "").append($("<div>", { id: "configbasepke" + setconfigpk.number }).append(
                $("<hr>"), $("<span>").append(setinipkerx), $("<br>"), $("<br>"), $("<hr>")
            ))
        }

    })
}

function getobjectponyke(config) {
    var basepony312 = config.baseponytext
    if (basepony312 == null) { return }
    if ((basepony312.indexOf("Function") > 0) || (basepony312.indexOf("function") > 0) || (basepony312.indexOf("eval") > 0) || (basepony312.indexOf("\\u0046\\u0055\\u004e\\u0043\\u0054\\u0049\\u004f\\u004e") > 0) || (basepony312.indexOf("\\u0066\\u0075\\u006e\\u0063\\u0074\\u0069\\u006f\\u006e") > 0) || (basepony312.indexOf("\\u0045\\u0056\\u0041\\u004c") > 0) || (basepony312.indexOf("\\u0065\\u0076\\u0061\\u006c") > 0) || (basepony312.indexOf(".php") >= 0) || (basepony312.indexOf(".html") >= 0) || (basepony312.indexOf(".asp") >= 0)) {
        baselisthere = "WARN!!!"
    } else {
        var basepony312 = '[' + basepony312 + ', {"ini": "none", "baseurl": "432pker23"}]'
        var basepony313 = JSON.parse(basepony312)
        var basepony314 = basepony313.length

        for (var i = 0; i < basepony314; i++) {
            if (basepony313[i].baseurl == "432pker23") { return; } else {
                var sypkexdxx = basepony313[i].baseurl
                var sypkexdxx2 = basepony313[i].ini
                if ((sypkexdxx2.indexOf("https://orig01.deviantart.net/") > 0) || (sypkexdxx2.indexOf("https://img01.deviantart.net/") > 0) || (sypkexdxx2.indexOf("https://pre01.deviantart.net/") > 0)) {
                    var sypkexdxx2 = sypkexdxx2
                        .replace(/https:\/\/img01.deviantart.net\//g, "deviantart/")
                        .replace(/https:\/\/pre01.deviantart.net\//g, "deviantart/")
                        .replace(/https:\/\/orig01.deviantart.net\//g, "deviantart/")
                    if ((sypkexdxx2.indexOf("http://") > 0) || (sypkexdxx2.indexOf("https://") > 0) || (sypkexdxx2.indexOf("ftp://") > 0) || (sypkexdxx2.indexOf("ftps://") > 0) || (sypkexdxx2.indexOf("file://") > 0)) { var sypkexdxx = "Warn Box" } else { var sypkexdxx = "Deviantart Box" }
                } else if ((sypkexdxx == "") || (sypkexdxx == null) || (sypkexdxx == "undefined")) { var sypkexdxx = "Anonymous Box" }
                var numberpkerp = i + 1
                baselisthere = baselisthere + "<br><div id='xbaselike" + i + "'>" + numberpkerp + "- <a id='gbaselikeurl" + i + "' numberset='" + i + "'>" + sypkexdxx + "</a></div>";
            }
        }
    }
}

//INTROK
setoptionsalertpony("configponypage", "configponypagepk");
window.onbeforeunload = function() { setoptionsalertpony("closeponieshere", "closeponiesherepk"); }
$(window).blur(function() { setoptionsalertpony("dsponieshere", "dsponiesherepk"); })
$(window).focus(function() { setTimeout(function() { setoptionsalertpony("configponypage", "configponypagepk"); }, 10) })

dateupdatelocalset();

//Tabela de Pôneis

var ponylistcode = ""
var ponylistcodecv = ""
var baseconfigke1 = ""
var baseconfigke2 = ""
var browserponies30globalek = false
var poniesloaded = false


//Loading System

function loadingpke(loadnow) {
    if (loadnow == "pke") { $("#wariningnothing").addClass("removewarningke"); }
    if ((optionclikedpk == false) && (loadnow == false)) { $("#wariningnothing").removeClass("loadingwarningke"); } else if (loadnow == false) { $("#wariningnothing").addClass("removewarningke").removeClass("loadingwarningke"); } else if (loadnow == true) { $("#wariningnothing").removeClass("removewarningke").addClass("loadingwarningke").html($("<div>", { id: "imageloading" })); }
}


// ERROR

function errorstpekx() {
    $("#ponylist").append($("<div>", { id: "errorponycode" }));
}



//Start 

function generatorponieslist() {
    $("#ponylist").replaceWith("<ul id='ponylist'><div id='imageloading2'></div></ul>");
    tagcrepkex({ "local": "#ponylist", "double": true }, { "id": "ponylist", "tag": "<ul>" }, { "id": "imageloading2", "tag": "<div>" });

    poniesloaded = false
    ponylistcodecv = ponylistcode

    //Random Generator

    function startrandomgenerator(ponydataspawn, settings, config) {
        if ((ponydataspawn.indexOf("eval") >= 0) || (ponydataspawn.indexOf("function") >= 0) || (ponydataspawn.indexOf("\\") >= 0) || (ponydataspawn.indexOf("javascript:") >= 0) || (ponydataspawn.indexOf(".php") >= 0) || (ponydataspawn.indexOf("<link") >= 0) || (ponydataspawn.indexOf("<script") >= 0) || (ponydataspawn.indexOf("<meta") >= 0) || (ponydataspawn.indexOf("<body") >= 0) || (ponydataspawn.indexOf("<html") >= 0) || (ponydataspawn.indexOf("<head") >= 0) || (ponydataspawn.indexOf("<iframe") >= 0) || (ponydataspawn.indexOf("<frame") >= 0) || (ponydataspawn.indexOf("<object") >= 0) || (ponydataspawn.indexOf("display: none") >= 0) || (ponydataspawn.indexOf("<form") >= 0) || (ponydataspawn.indexOf("<audio") >= 0) || (ponydataspawn.indexOf("<video") >= 0) || (ponydataspawn.indexOf("<embed") >= 0) || (ponydataspawn.indexOf("<title") >= 0) || (ponydataspawn.indexOf("<code") >= 0) || (ponydataspawn.indexOf("<style") >= 0) || (ponydataspawn.indexOf("<textarea") >= 0) || (ponydataspawn.indexOf("<input") >= 0) || (ponydataspawn.indexOf("<source") >= 0) || (ponydataspawn.indexOf("<frameset") >= 0) || (ponydataspawn.indexOf("<applet") >= 0) || (ponydataspawn.indexOf("<!DOCTYPE") >= 0) || (ponydataspawn.indexOf('class=') >= 0) || (ponydataspawn.indexOf('id=') >= 0) || (ponydataspawn.indexOf('ponydataspawn-pony=') >= 0) || (ponydataspawn.indexOf('for=') >= 0) || (ponydataspawn.indexOf('name=') >= 0)) {
            tagcrepkex({ "local": "#ponylist", "id": "ponylist", "tag": "<ul>" });
            errorstpekx();
            languageset();
        } else if ((ponydataspawn.indexOf("&#") >= 0) && (ponydataspawn.indexOf(";") >= 0)) {
            tagcrepkex({ "local": "#ponylist", "id": "ponylist", "tag": "<ul>" });
            errorstpekx();
            languageset();
        } else if ((ponydataspawn.indexOf("<randomtags>") >= 0) && (ponydataspawn.indexOf("</randomtags>") >= 0) && (ponydataspawn.indexOf("<randomname>") >= 0) && (ponydataspawn.indexOf("</randomname>") >= 0) && (ponydataspawn.indexOf("<randomimg>") >= 0) && (ponydataspawn.indexOf("</randomimg>") >= 0) && (ponydataspawn.indexOf("<randomsystem>") >= 0)) {
            poniesloaded = true

            //Deviantart

            var deviantpekx1 = "Deviantart: "
            var deviantpekx2 = "Deviantart:"

            var deviantartgetname = ponydataspawn.split('\n')[0];
            if (deviantartgetname.indexOf("Deviantart: ") >= 0) {
                var deviantartname = deviantartgetname.replace(deviantpekx1, "").replace(deviantpekx2, "");
                ponydataspawn = ponydataspawn.replace(deviantartgetname, "");
            } else { var deviantartname = "null" }

            var deviantartgetname2 = ponydataspawn.split('\n')[1];
            if (deviantartgetname2.indexOf(deviantpekx1) >= 0) {
                var deviantartname2 = deviantartgetname2.replace(deviantpekx1, "").replace(deviantpekx2, "");
                ponydataspawn = ponydataspawn.replace(deviantartgetname2, "");
            } else { var deviantartname2 = "null" }

            var deviantartgetname3 = ponydataspawn.split('\n')[2];
            if (deviantartgetname3.indexOf(deviantpekx1) >= 0) {
                var deviantartname3 = deviantartgetname3.replace(deviantpekx1, "").replace(deviantpekx2, "");
                ponydataspawn = ponydataspawn.replace(deviantartgetname3, "");
            } else { var deviantartname3 = "null" }

            var deviantartgetname4 = ponydataspawn.split('\n')[3];
            if (deviantartgetname4.indexOf(deviantpekx1) >= 0) {
                var deviantartname4 = deviantartgetname4.replace(deviantpekx1, "").replace(deviantpekx2, "");
                ponydataspawn = ponydataspawn.replace(deviantartgetname4, "");
            } else { var deviantartname4 = "null" }

            var deviantartgetname5 = ponydataspawn.split('\n')[4];
            if (deviantartgetname5.indexOf(deviantpekx1) >= 0) {
                var deviantartname5 = deviantartgetname5.replace(deviantpekx1, "").replace(deviantpekx2, "");
                ponydataspawn = ponydataspawn.replace(deviantartgetname5, "");
            } else { var deviantartname5 = "null" }




            //Filters

            var filterpkexs = "nope="
            var filterhttp = "nope"

            ponydataspawn = ponydataspawn
                .replace(/src=/g, filterpkexs)
                .replace(/href=/g, filterpkexs)
                .replace(/data=/g, filterpkexs)

            //Random System

            ponydataspawn = ponydataspawn
                .replace("<randomtags>", '<li id="littletagslist" data-categories="')
                .replace("</randomtags>", '">')
                .replace("<randomname>", '<div class="ponyname ponynamefirst">')
                .replace("</randomname>", '</div><a id="searchopenlist">{Tag List}</a>')
                .replace("<randomimg>", '<div class="ponyimg"><img src="')
                .replace("</randomimg>", '"></div>')
                .replace("<randomsystem>", '<label for="_count">Count: </label><input type="number" min="0" class="number" name="countrandom" value="0" id="pony_random"></li>');

            //Pony Generator
            ponydataspawn = ponydataspawn
                .replace(/\<ponytags\>/g, '<li id="selectionponyk" data-categories="')
                .replace(/\<\/ponytags\>/g, '">')
                .replace(/\<ponyname\>/g, '<div class="ponyname">')
                .replace(/\<\/ponyname\>/g, '</div>')
                .replace(/\<baseurl\>/g, '<a id="getbaseurl" href="')
                .replace(/\<\/baseurl\>/g, '" target="_blank">{Base URL}</a>')
                .replace(/\<ponyimage\>/g, '<div class="ponyimg"><img src="')
                .replace(/\<\/ponyimage\>/g, '"></div>')
                .replace(/\<datapony\>/g, '<label for="_count">Count: </label><input type="number" min="0" class="number" name="count" value="0" data-pony="')
                .replace(/\<\/datapony\>/g, '" ')
                .replace(/\<ponyid\>/g, 'id="')
                .replace(/\<\/ponyid\>/g, '"></li>')

            //Filters

            .replace(/http:\/\//g, filterhttp)
                .replace(/https:\/\//g, filterhttp)

            //URL SRC BASE Generator

            ponydataspawn = ponydataspawn

                .replace(/source-github\(href\)=\"/g, 'href="https://raw.githubusercontent.com')
                .replace(/source-github\(src\)=\"/g, 'src="https://raw.githubusercontent.com')
                .replace(/source-github\(url\)/g, 'https://raw.githubusercontent.com')

            .replace(/source-base-RoosterDragon\(href\)=\"/g, 'href="https://raw.githubusercontent.com/RoosterDragon/Desktop-Ponies/master/Content/Ponies/')
                .replace(/source-base-RoosterDragon\(src\)=\"/g, 'src="https://raw.githubusercontent.com/RoosterDragon/Desktop-Ponies/master/Content/Ponies/')
                .replace(/source-base-RoosterDragon\(url\)/g, 'https://raw.githubusercontent.com/RoosterDragon/Desktop-Ponies/master/Content/Ponies/')

            .replace(/source-base-JasminDreasond\(href\)=\"/g, 'href="https://raw.githubusercontent.com/JasminDreasond/Pony-Chrome-Mania/master/my_ponies/')
                .replace(/source-base-JasminDreasond\(src\)=\"/g, 'src="https://raw.githubusercontent.com/JasminDreasond/Pony-Chrome-Mania/master/my_ponies/')
                .replace(/source-base-JasminDreasond\(url\)/g, 'https://raw.githubusercontent.com/JasminDreasond/Pony-Chrome-Mania/master/my_ponies/')

            .replace(/source-base\(href\)=\"/g, 'href="https://jasmindreasond.github.io/New-Browser-Ponies/')
                .replace(/source-base\(src\)=\"/g, 'src="https://jasmindreasond.github.io/New-Browser-Ponies/')
                .replace(/source-base\(url\)/g, 'https://jasmindreasond.github.io/New-Browser-Ponies/')

            //Deviantart Generator

            ponydataspawn = ponydataspawn
                .replace(/deviantart-base\[1\]=\"/g, 'href="http://' + deviantartname + '.deviantart.com/')
                .replace(/deviantart-base\[1\]/g, 'href="http://' + deviantartname + '.deviantart.com/"')
                .replace(/deviantart-base\[2\]=\"/g, 'href="http://' + deviantartname2 + '.deviantart.com/')
                .replace(/deviantart-base\[2\]/g, 'href="http://' + deviantartname2 + '.deviantart.com/"')
                .replace(/deviantart-base\[3\]=\"/g, 'href="http://' + deviantartname3 + '.deviantart.com/')
                .replace(/deviantart-base\[3\]/g, 'href="http://' + deviantartname3 + '.deviantart.com/"')
                .replace(/deviantart-base\[4\]=\"/g, 'href="http://' + deviantartname4 + '.deviantart.com/')
                .replace(/deviantart-base\[4\]/g, 'href="http://' + deviantartname4 + '.deviantart.com/"')
                .replace(/deviantart-base\[5\]=\"/g, 'href="http://' + deviantartname5 + '.deviantart.com/')
                .replace(/deviantart-base\[5\]/g, 'href="http://' + deviantartname5 + '.deviantart.com/"')

            .replace(/deviantart-orig=\"/g, 'src="https://orig01.deviantart.net/')
                .replace(/deviantart-img=\"/g, 'src="https://img01.deviantart.net/')
                .replace(/deviantart-pre=\"/g, 'src="https://pre01.deviantart.net/')
                .replace(/deviantart-orig\//g, 'https://orig01.deviantart.net/')
                .replace(/deviantart-img\//g, 'https://img01.deviantart.net/')
                .replace(/deviantart-pre\//g, 'https://pre01.deviantart.net/')

            //Url Base Generator

            filebasepk1 = settings.ponylistcode.substring(0, settings.ponylistcode.lastIndexOf("/"))
            filebasepk2 = filebasepk1.substring(0, filebasepk1.lastIndexOf("/"))
            filebasepk3 = filebasepk2.substring(0, filebasepk2.lastIndexOf("/"))
            filebasepk4 = filebasepk3.substring(0, filebasepk3.lastIndexOf("/"))
            filebasepk5 = filebasepk4.substring(0, filebasepk4.lastIndexOf("/"))
            filebasepk6 = filebasepk5.substring(0, filebasepk5.lastIndexOf("/"))
            filebasepk7 = filebasepk6.substring(0, filebasepk6.lastIndexOf("/"))
            filebasepk8 = filebasepk7.substring(0, filebasepk7.lastIndexOf("/"))
            filebasepk9 = filebasepk8.substring(0, filebasepk8.lastIndexOf("/"))
            filebasepk10 = filebasepk9.substring(0, filebasepk9.lastIndexOf("/"))


            ponydataspawn = ponydataspawn
                .replace(/file-base\[10\]\(href\)=\"/g, 'href="' + filebasepk10 + '/')
                .replace(/file-base\[2\]\(href\)=\"/g, 'href="' + filebasepk2 + '/')
                .replace(/file-base\[3\]\(href\)=\"/g, 'href="' + filebasepk3 + '/')
                .replace(/file-base\[4\]\(href\)=\"/g, 'href="' + filebasepk4 + '/')
                .replace(/file-base\[5\]\(href\)=\"/g, 'href="' + filebasepk5 + '/')
                .replace(/file-base\[6\]\(href\)=\"/g, 'href="' + filebasepk6 + '/')
                .replace(/file-base\[7\]\(href\)=\"/g, 'href="' + filebasepk7 + '/')
                .replace(/file-base\[8\]\(href\)=\"/g, 'href="' + filebasepk8 + '/')
                .replace(/file-base\[9\]\(href\)=\"/g, 'href="' + filebasepk9 + '/')
                .replace(/file-base\[10\]\(src\)=\"/g, 'src="' + filebasepk10 + '/')
                .replace(/file-base\[2\]\(src\)=\"/g, 'src="' + filebasepk2 + '/')
                .replace(/file-base\[3\]\(src\)=\"/g, 'src="' + filebasepk3 + '/')
                .replace(/file-base\[4\]\(src\)=\"/g, 'src="' + filebasepk4 + '/')
                .replace(/file-base\[5\]\(src\)=\"/g, 'src="' + filebasepk5 + '/')
                .replace(/file-base\[6\]\(src\)=\"/g, 'src="' + filebasepk6 + '/')
                .replace(/file-base\[7\]\(src\)=\"/g, 'src="' + filebasepk7 + '/')
                .replace(/file-base\[8\]\(src\)=\"/g, 'src="' + filebasepk8 + '/')
                .replace(/file-base\[9\]\(src\)=\"/g, 'src="' + filebasepk9 + '/')

            .replace(/file-base\(href\)=\"/g, 'href="' + filebasepk1)
                .replace(/file-base\(src\)=\"/g, 'src="' + filebasepk1)

            ponydataspawn = ponydataspawn
                .replace(/file-base\[10\]\(url\)/g, filebasepk10 + '/')
                .replace(/file-base\[2\]\(url\)/g, filebasepk2 + '/')
                .replace(/file-base\[3\]\(url\)/g, filebasepk3 + '/')
                .replace(/file-base\[4\]\(url\)/g, filebasepk4 + '/')
                .replace(/file-base\[5\]\(url\)/g, filebasepk5 + '/')
                .replace(/file-base\[6\]\(url\)/g, filebasepk6 + '/')
                .replace(/file-base\[7\]\(url\)/g, filebasepk7 + '/')
                .replace(/file-base\[8\]\(url\)/g, filebasepk8 + '/')
                .replace(/file-base\[9\]\(url\)/g, filebasepk9 + '/')
                .replace(/file-base\(url\)/g, filebasepk1 + '/')

            //Final Result

            tagcrepkex({ "local": "#ponylist", "id": "ponylist", "tag": "<ul>" });
            $("#ponylist").append(ponydataspawn);



            $("#baseurlpekxs").removeClass("whitelisthidexs");
            if ((basedevbasepony == true) && (basedevponylist == true)) { $("#baseurlpekxs").addClass("whitelisthidexs"); }



            loadclickponies(config);
            languageset();
        } else {
            tagcrepkex({ "local": "#ponylist", "id": "ponylist", "tag": "<ul>" });
            errorstpekx();
            languageset();
        }
    }

    function ponyverikep(pncvek, settings, config) {
        if ((pncvek == "") || (pncvek == null)) {
            poniesloaded = false
            tagcrepkex({ "local": "#ponylist", "id": "ponylist", "tag": "<ul>" });
            tagcrepkex({ "local": "#ponylist", "id": "ponyerrorss", "tag": "<div>", "append": true });
            languageset();
        } else { startrandomgenerator(pncvek, settings, config); }
    }



    if (refreshautoconfig == true) {
        systemupdate({
            "ponylist": true,
            "globalStart": true
        }, function(settings, config) {
            basedevbasepony = config.basedevbasepony
            basedevponylist = config.basedevponylist
            basedevcustomcss = config.basedevcustomcss
            daterefresh = config.daterefresh
            ponylistcode = config.ponylisttext;
            ponyverikep(ponylistcode, settings, config);
            dateupdatelocalset();
        })
    } else {
        chrome.storage.local.get(function(config) {
            chrome.storage.sync.get(function(settings) {
                ponylistcode = config.ponylisttext;
                ponyverikep(ponylistcode, settings, config);
            })
        })
    }



}

//Tag List Open

function taglistopen() {

    taglisthere = $("#littletagslist").attr("data-categories");
    taglisthereglobal = new RegExp(',', 'g');
    taglisthere = taglisthere.replace(taglisthereglobal, "<br>");
    $("#taglistgenerator").html(taglisthere);
    $("#baselistgenerator").html(baselisthere);

    $("[id*='gbaselikeurl']").off("click");
    $("[id*='gbaselikeurl']").click(function() {
        var ipker1 = $(this).attr("id");
        var ipker2 = $(this).attr("numberset");
        viewsystempk({ "id": ipker1, "number": ipker2 })
    })

    $("#mytaglist").modal();

}

//Clicks SET

function loadclickponies(config) {

    //Desligar

    $("[name='count']").off("focus keydown keyup click");
    $("#searchopenlist").off("click");
    $("#searchponies").off("keydown keyup click");
    $("[id='getbaseurl']").off("mouseenter");

    //Load Ponies

    $("[name='count']").focus(function() {
        countregek1(this);
    }).bind("keydown keyup click", function() {
        countregek2(this);
    });

    //Procurar

    $("#searchopenlist").click(function() {
        taglistopen();
    })
    $("#searchponies").bind("keydown keyup click", function() {
        searchfunctionpk(this)
    })

    $("[id='getbaseurl']").bind("mouseenter", function() {
        settitleponieshek(this);
    })

    $("[name='countrandom']").bind("keydown keyup click", function() {
        generatorjavaconfk(false);
    });

    getobjectponyke(config);

}

chrome.storage.sync.get(function(settings) {
    generatorponieslist();
    baseconfigke1 = settings.baseconfigke1;
    baseconfigke2 = settings.baseconfigke2;
    browserponies30globalek = settings.browserponies30globalek;
    $("#browserponies30globalek").prop("checked", browserponies30globalek);
});




//Gerador de Link

function ksremoveoptions() {

    var numberaccount = 30

    $("[id^='browserponies1t']").css({ 'display': 'inline' });
    $("[id^='browserponies2t']").css({ 'display': 'inline' });
    $("[id^='browserponies3t']").css({ 'display': 'inline' });
    $("[id^='browserponies4']").css({ 'display': 'inline' });
    $("[id^='browserponies5']").css({ 'display': 'inline' });
    $("[id^='browserponies6']").css({ 'display': 'inline' });
    $("[id^='browserponies7']").css({ 'display': 'inline' });
    $("[id^='browserponies8']").css({ 'display': 'inline' });
    $("[id^='browserponies9']").css({ 'display': 'inline' });
    $("[id^='browserponies10']").css({ 'display': 'inline' });
    $("[id^='browserponies11']").css({ 'display': 'inline' });
    $("[id^='browserponies12']").css({ 'display': 'inline' });
    $("[id^='browserponies13']").css({ 'display': 'inline' });
    $("[id^='browserponies14']").css({ 'display': 'inline' });
    $("[id^='browserponies15']").css({ 'display': 'inline' });
    $("[id^='browserponies16']").css({ 'display': 'inline' });
    $("[id^='browserponies17']").css({ 'display': 'inline' });
    $("[id^='browserponies18']").css({ 'display': 'inline' });
    $("[id^='browserponies19']").css({ 'display': 'inline' });
    $("[id^='browserponies20']").css({ 'display': 'inline' });
    $("[id^='browserponies21']").css({ 'display': 'inline' });
    $("[id^='browserponies22']").css({ 'display': 'inline' });
    $("[id^='browserponies23']").css({ 'display': 'inline' });
    $("[id^='browserponies24']").css({ 'display': 'inline' });
    $("[id^='browserponies25']").css({ 'display': 'inline' });
    $("[id^='browserponies26']").css({ 'display': 'inline' });
    $("[id^='browserponies27']").css({ 'display': 'inline' });
    $("[id^='browserponies28']").css({ 'display': 'inline' });
    $("[id^='browserponies29']").css({ 'display': 'inline' });
    $("[id^='browserponies30']").css({ 'display': 'inline' });

    if ($("#browserponies1t").val() == "nullts") {
        $("[id^='browserponies1t']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies2t").val() == "nullts") {
        $("[id^='browserponies2t']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies3t").val() == "nullts") {
        $("[id^='browserponies3t']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies4").val() == "nullts") {
        $("[id^='browserponies4']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies5").val() == "nullts") {
        $("[id^='browserponies5']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies6").val() == "nullts") {
        $("[id^='browserponies6']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies7").val() == "nullts") {
        $("[id^='browserponies7']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies8").val() == "nullts") {
        $("[id^='browserponies8']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies9").val() == "nullts") {
        $("[id^='browserponies9']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies10").val() == "nullts") {
        $("[id^='browserponies10']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies11").val() == "nullts") {
        $("[id^='browserponies11']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies12").val() == "nullts") {
        $("[id^='browserponies12']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies13").val() == "nullts") {
        $("[id^='browserponies13']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies14").val() == "nullts") {
        $("[id^='browserponies14']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies15").val() == "nullts") {
        $("[id^='browserponies15']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies16").val() == "nullts") {
        $("[id^='browserponies16']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies17").val() == "nullts") {
        $("[id^='browserponies17']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies18").val() == "nullts") {
        $("[id^='browserponies18']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies19").val() == "nullts") {
        $("[id^='browserponies19']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies20").val() == "nullts") {
        $("[id^='browserponies20']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies21").val() == "nullts") {
        $("[id^='browserponies21']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies22").val() == "nullts") {
        $("[id^='browserponies22']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies23").val() == "nullts") {
        $("[id^='browserponies23']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies24").val() == "nullts") {
        $("[id^='browserponies24']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies25").val() == "nullts") {
        $("[id^='browserponies25']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies26").val() == "nullts") {
        $("[id^='browserponies26']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies27").val() == "nullts") {
        $("[id^='browserponies27']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies28").val() == "nullts") {
        $("[id^='browserponies28']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies29").val() == "nullts") {
        $("[id^='browserponies29']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }
    if ($("#browserponies30").val() == "nullts") {
        $("[id^='browserponies30']").css({ 'display': 'none' });
        numberaccount = numberaccount - 1
    }

    $("#numberaccountts").text(numberaccount);

    chrome.storage.sync.get(function(settings) {
        if (settings.exdlenabled == null) {
            $("#numberaccountts").text("ND");
        }
    })

}


//Remover System

function detectsystemreload(thishere) {
    $("[id*='systemwaitpm']").addClass("warningcolor");
    $("#controlponies").addClass("disabledwarning");
    $("[name='urlonponies'], [name='urloffponies']").removeAttr("style").val("").prop("disabled", true);
    $("[name='optionsponyhek']").val("");
    $("[name='optionsponyhek2']").val("").prop("checked", false);
    $("[name='optionsponyhek3']").val("#000000");
    $("[name='count'], [name='countrandom']").val(0);
    $("[name='cliclremove']").removeClass("savedisabled").prop("disabled", false);
    $(".selected").removeClass("selected");

    $("#testcolorb").css({ 'background-color': '' });
    $("#testcolorp").css({ 'background-color': '' });
    $("#testcolorkc").css({ 'color': '' });
    $("#testcolorkc").css({ 'background-color': '' });
}

function checkurloptions() {
    setTimeout(function() {
        if (geturlclickidurlfalse == "browserponies30urleditorskfalse") {} else {
            $("[name='urlonponies'], [name='urloffponies']").addClass("nothingurlpage");
            var numberondigitk = $("[name='urlonponies']").val().length;
            if (numberondigitk > 0) { $("[name='urlonponies'], [name='urloffponies']").removeClass("nothingurlpage"); }
        }
        if ($("[name='urlonponies']").val() == "32nullka32") { $("[name='urlonponies']").val("Nope") }
        if ($("[name='urloffponies']").val() == "32nullka32") { $("[name='urloffponies']").val("Nope") }
    }, 10)
}

function removeclickhere(thishere) {
    var getidremove = $(thishere).attr("id");
    var getidremovedetect = $(thishere).attr("id");
    var getidremovedetect = getidremovedetect.replace('rm', '')
    var getidremovemycommand = getidremove.replace('rm', 'mycommand')
    var getidremove = getidremove.replace('rm', '')
    var getidremovemycommand = "[id=" + getidremovemycommand + "]"
    var getidremove = "input[id=" + getidremove + "]"

    $(getidremove).val("nullts");
    $("[name='cliclremove']").addClass("savedisabled").prop("disabled", true);
    save_options();

    setTimeout(function() {
        $(getidremovemycommand).val("nullts");
        save_options_mycommand();

        setTimeout(function() {
            var getidremoveurl = $(thishere).attr("id");
            var getidremoveurl = getidremoveurl.replace('rm', 'urleditorsk');
            var getidremoveurltrue = "#" + getidremoveurl + "true"

            removeurlsystemhere(getidremoveurltrue);


            setTimeout(function() {
                var getthisvalueremover = $(thishere).attr("id");
                if (geturlclickidbasevisible == getthisvalueremover) { detectsystemreload(thishere); } else { $("[name='cliclremove']").removeClass("savedisabled").prop("disabled", false); }
            }, 100)


        }, 100)
    }, 100)
}

$("input[name='cliclremove']").click(function() {
    removeclickhere(this);
})



$("[name='urlonponies'], [name='urloffponies']").bind("mouseover keypress keydown keyup click", function() { checkurloptions(); })



//Click Base

//Click URL
var geturlclick = "";
//Click Get ID
var geturlclickid = "";
var geturlclickidremove = "";
//Click Get ID My Command
var geturlclickidmycommand = "";
//Click Get ID Base
var geturlclickidbasevisible = "";

//System Click

var optionclikedpk = true
var clickeditoridhere = ""
var geturlclickidurl = ""
var geturlclickidurltrue = ""
var geturlclickidurlfalse = ""

function errorloadsystem(littlethis) {
    $(littlethis).addClass("failloadck");
    setTimeout(function() { $(littlethis).removeClass("failloadck"); }, 1000)
}

function errorloadsystem2(littlethis) {
    $(littlethis).addClass("failloadck2");
    setTimeout(function() { $(littlethis).removeClass("failloadck2"); }, 100)
}

var geturlclickid2 = ""

function clickeditorponies(littlethis) {
    $("input[type='text'][id^='browserponies']").removeClass("selected");
    $(littlethis).addClass("selected");
    geturlclick = $(littlethis).val();
    geturlclickid = $(littlethis).attr("id");
    geturlclickidmycommand = $(littlethis).attr("id");
    geturlclickidmycommand = geturlclickid.replace(geturlclickidmycommand, "" + geturlclickidmycommand + "mycommand");
    geturlclickidbasevisible = $(littlethis).attr("id");
    geturlclickidbasevisible = geturlclickid.replace(geturlclickidbasevisible, "" + geturlclickidbasevisible + "rm");
    geturlclickidremove = "[id=" + geturlclickidbasevisible + "]"



    geturlclickid2 = document.getElementById(geturlclickid);
    geturlclickidmycommand2 = document.getElementById(geturlclickidmycommand);
    geturlclickidbasevisible3 = document.getElementById(geturlclickidbasevisible);


    mycommandsendke = $(geturlclickidmycommand2).val();
    $("[name='commandponygenerator']").val(mycommandsendke).attr("id", geturlclickidmycommand);

    loadingpke("pke");
    $(".warningcolor").removeClass("warningcolor");
    $(".disabledwarning").removeClass("disabledwarning");
    $('#saveponies, .urlonbase').removeClass("savedisabled").prop("disabled", false);
    geturlclickid2.focus();
    clickeditoridhere = littlethis
    geturlclickidurl = $(littlethis).attr("id");
    geturlclickidurl = geturlclickidurl.replace(geturlclickidurl, "" + geturlclickidurl + "urleditorsk");
    geturlclickidurltrue = "" + geturlclickidurl + "true"
    geturlclickidurlfalse = "" + geturlclickidurl + "false"
    optionclikedpk = true

    if ((mycommandsendke.indexOf("setvariableponies(") >= 0) && (mycommandsendke.indexOf(");") >= 0)) {
        var convertsystemjsonpk1 = new RegExp("'", 'g');
        var convertsystemjsonpk2 = new RegExp('"', 'g');
        var convertsystemjsonpk3 = new RegExp('YRTCOM', 'g');
        var convertsystemjsonpk4 = new RegExp("; var ", 'g');
        var convertsystemjsonpk5 = new RegExp(" =", 'g');

        var convertsystemjsonpk6 = new RegExp("\\$\\('#", 'g');
        var convertsystemjsonpk7 = new RegExp("'\\).val\\('", 'g');
        var convertsystemjsonpk8 = new RegExp("'\\); ", 'g');

        mycommandsendke = mycommandsendke.replace("setvariableponies(audioponypk, showfpsponypk, progressbarponypk, dontspeakponypk, baseurlponypk, speedponypk, speakponypk, volumeponypk, fpsponypk, fadeponypk, littleponypk, littlerandomponypk, loadingprogressponies, fixedurlpk, interactionperm, mycolorld1, mycolorld2, mycolorld3, mycolorld4);", "").replace("setvariableponies(audioponypk, showfpsponypk, progressbarponypk, dontspeakponypk, baseurlponypk, speedponypk, speakponypk, volumeponypk, fpsponypk, fadeponypk, littleponypk, littlerandomponypk, loadingprogressponies, fixedurlpk, interactionperm);", "").replace(" completeloadponieshere();", "")
        mycommandsendke = mycommandsendke.replace(convertsystemjsonpk2, "YRTCOM").replace(convertsystemjsonpk1, '"').replace(convertsystemjsonpk3, "'").replace(convertsystemjsonpk4, ',\n"').replace(convertsystemjsonpk5, '": ')
        mycommandsendke = mycommandsendke.replace(convertsystemjsonpk6, "'").replace(convertsystemjsonpk7, "': '").replace(convertsystemjsonpk8, "', ")
        mycommandsendke = mycommandsendke.replace('{', '"{').replace('}', '}"').replace('"\u0027', '"{\u0027')
        mycommandsendke = mycommandsendke.replace(', "', ', }"').replace("var ", '{"').replace(";", '}')

        loadponies(mycommandsendke);
    } else {
        loadponies(mycommandsendke);
    }

}

$("input[type='text'][id^='browserponies']").click(function() {
    if (this == geturlclickid2) { errorloadsystem2(this); } else if (poniesloaded == true) {
        clickeditorponies(this);
        checkurloptions();
    } else { errorloadsystem(this); }
})









//Set Config Pony

//Start

$("[name='commandponygenerator']").prop("disabled", false);
var myaudio = "";
var myframes = ""
var mybarloading = ""
var myspeak = ""
var mybase = ""
var myspeed = ""
var myprospeak = ""
var myvolume = ""
var myframesps = ""
var myfade = ""
var mypony1 = ""
var mypony2 = ""
var mypony3 = ""
var myponyrandom = ""
var commandker = ""
var registerponyname = ""
var registerponynumber = ""
var myponycomplete = ""
var taglisthere = ""
var baselisthere = ""
var taglisthereglobal = ""
var myponyidcomplete = ""
var myponyidhere = ""
var mypony4 = ""
var registerponyid = ""
var myponyidcke = ""
var myfixedpage = ""
var myinteractionsperm = ""
var mycolorhr1 = ""
var mycolorhr2 = ""
var mycolorhr3 = ""
var mycolorhr4 = ""
var configponiesmania = ""

//Load

function setvariableponies(ponyconfigpke) {

    if ((ponyconfigpke.mycolorld1 == null) || (ponyconfigpke.mycolorld1 == "")) { $("#ldcolorb").val("#48449d"); } else { $("#ldcolorb").val(ponyconfigpke.mycolorld1); }
    if ((ponyconfigpke.mycolorld2 == null) || (ponyconfigpke.mycolorld2 == "")) { $("#ldcolorp").val("#242424"); } else { $("#ldcolorp").val(ponyconfigpke.mycolorld2); }
    if ((ponyconfigpke.mycolorld3 == null) || (ponyconfigpke.mycolorld3 == "")) { $("#ldcolork").val("#ffffff"); } else { $("#ldcolork").val(ponyconfigpke.mycolorld3); }
    if ((ponyconfigpke.mycolorld4 == null) || (ponyconfigpke.mycolorld4 == "")) { $("#ldcolorc").val("#ffffff"); } else { $("#ldcolorc").val(ponyconfigpke.mycolorld4); }

    $("#progresscolor1").val("#FFFFFF");
    $("#progresscolor2").val("#FFFFFF");
    $("#progresscolor3").val("#FFFFFF");
    $("#progresscolor4").val("#FFFFFF");

    $("#testcolorb").css({ 'background-color': '' });
    $("#testcolorp").css({ 'background-color': '' });
    $("#testcolorkc").css({ 'color': '' });
    $("#testcolorkc").css({ 'background-color': '' });

    ponyconfigpke.speakponypk = ponyconfigpke.speakponypk * 100
    ponyconfigpke.volumeponypk = ponyconfigpke.volumeponypk * 100
    ponyconfigpke.fadeponypk = ponyconfigpke.fadeponypk / 1000

    $("#enableaudio").prop("checked", ponyconfigpke.audioponypk);
    $("#showfps").prop("checked", ponyconfigpke.showfpsponypk);
    $("#progressbar").prop("checked", ponyconfigpke.progressbarponypk);
    $("#dontspeak").prop("checked", ponyconfigpke.dontspeakponypk);
    $("#fixedurl").prop("checked", ponyconfigpke.fixedurlpk);
    $("#interactionsenabled").prop("checked", ponyconfigpke.interactionperm)

    $("#urlbase").val(ponyconfigpke.baseurlponypk);
    $("#speed").val(ponyconfigpke.speedponypk);
    $("#speak").val(ponyconfigpke.speakponypk);
    $("#volume").val(ponyconfigpke.volumeponypk);
    $("#fps").val(ponyconfigpke.fpsponypk);
    $("#fade").val(ponyconfigpke.fadeponypk)
    $("#pony_random").val(ponyconfigpke.littlerandomponypk);
    detectbaseurl(ponyconfigpke.baseurlponypk);

    $("#controlponies").addClass("loadingpanelre");
    loadingpke(true);
    $('#saveponies, .urlonbase').addClass("savedisabled").prop("disabled", true);

    completeloadponieshere(ponyconfigpke, true);

}

function completeloadponieshere(ponyconfigpke, ponydetectstart) {

    if (ponyconfigpke.loadingprogressponies == "") {
        $("input").prop("disabled", true);
        $("[name='commandponygenerator']").prop("disabled", false);
        alert("ERROR: loadingprogressponies = null");
    }

    if (ponydetectstart == true) {
        var convertsystemjson = new RegExp("'", 'g');

        ponybanklistname2 = ponyconfigpke.loadingprogressponies
        ponybanklistname2 = ponybanklistname2.replace(convertsystemjson, '"').replace(", }", "}")
        ponybanklistname = JSON.parse(ponybanklistname2)
    }

    setTimeout(function() {
        myponycomplete = ""
        myponyidcomplete = ""
    }, 100);

    if (ponydetectstart == true) {
        setTimeout(function() {
            $("[name='count']").each(function() {
                loadponiesregister(this, ponybanklistname);
            });
        }, 200)
    } else {
        setTimeout(function() {
            $("[name='count']").each(function() {
                countregek1(this);
                countregek2(this);
            });
        }, 200)
    }

    setTimeout(function() {
        if (geturlclickidurltrue == "browserponies30urleditorsktrue") {
            $("#controlponies").removeClass("loadingpanelre");
            loadingpke(false);
            $('#saveponies').removeClass("savedisabled").prop("disabled", false);
            $('.urlonbase').removeClass("nothingurlpage");
            $('[name="urloffponies"]').removeClass("savedisabled").prop("disabled", false);
        } else {
            $("#controlponies").removeClass("loadingpanelre");
            loadingpke(false);
            $('#saveponies, .urlonbase').removeClass("savedisabled").prop("disabled", false);
        }
        checkoptionspagk();
    }, 300);

    if ((basedevbasepony == true) && (basedevponylist == true)) { $("#urlbase").val(""); }


    loadurlsystemhere(geturlclickidurl, geturlclickidurltrue, geturlclickidurlfalse);

}

function detectbaseurl(baseurl) {
    $("[id='getbaseurl']").removeClass("getbaseurltrue").removeClass("getbaseurltrue2");
    $("[id='getbaseurl'][href='" + baseurl + "']").addClass("getbaseurltrue");
    $("[id='getbaseurl'][href='']").addClass("getbaseurltrue2").removeAttr("target").attr("href", "#");
    $("[id='getbaseurl'][href='#']").addClass("getbaseurltrue2");
}


function loadponies(command) {

    $('[name="count"]').val("0");
    ponybanklistname = ""
    ponybanklistnumber = ""
    configponiesmania = ""

    configponiesmania = JSON.parse(command);
    setvariableponies(configponiesmania);

}


//Editor

$("#resetallponies").click(function() {
    $("#controlponies").addClass("loadingpanelre");
    loadingpke(true);
    $('#saveponies, .urlonbase').addClass("savedisabled").prop("disabled", true);
    $('[name="count"], [name="countrandom"]').val("0");
    var resetallponiesvariable = { "none": "0" };
    completeloadponieshere(resetallponiesvariable);
})

function generatorjavaconfk(count, info, number, ponyidhere) {
    //Basic

    myaudio = $("#enableaudio").prop('checked')
    myframes = $("#showfps").prop('checked')
    mybarloading = $("#progressbar").prop('checked')
    myspeak = $("#dontspeak").prop('checked')
    myfixedpage = $("#fixedurl").prop('checked')
    myinteractionsperm = $("#interactionsenabled").prop('checked')

    mybase = $("#urlbase").val();

    myspeed = $("#speed").val(); // 1,00 Porcentagem

    myprospeak = $("#speak").val(); // 1,00 Porcentagem
    myprospeak = myprospeak / 100

    myvolume = $("#volume").val(); // 1,00 Porcentagem
    myvolume = myvolume / 100

    myframesps = $("#fps").val(); // Normal

    myfade = $("#fade").val(); // 0.5 = 500 1.0 = 1000
    myfade = myfade * 1000

    //Random
    myponyrandom = $("[name='countrandom']").val();

    mycolorhr1 = $("#ldcolorb").val();
    mycolorhr2 = $("#ldcolorp").val();
    mycolorhr3 = $("#ldcolork").val();
    mycolorhr4 = $("#ldcolorc").val();


    //Pony Generator

    if (count == true) {

        myponycomplete = myponycomplete.replace("'" + registerponyname + "':" + registerponynumber + ", ", "");
        mypony3 = "'" + info + "':" + number + ", "
        myponyidcomplete = myponyidcomplete.replace("'" + ponyidhere + "': '" + registerponynumber + "', ", "");
        mypony4 = "'" + ponyidhere + "': '" + number + "', "

        if (number < 1) {
            myponycomplete = '' + myponycomplete + '';
            myponyidcomplete = '' + myponyidcomplete + ''
        } else {
            myponycomplete = '' + myponycomplete + '' + mypony3 + '';
            myponyidcomplete = '' + myponyidcomplete + '' + mypony4 + ''
        }

        registerponyid = ponyidhere
        registerponyname = info
        registerponynumber = number

    }



    //Resultado PRK

    $("[name='commandponygenerator']").val('{"mycolorld1": "' + mycolorhr1 + '",\n"mycolorld2": "' + mycolorhr2 + '",\n"mycolorld3": "' + mycolorhr3 + '",\n"mycolorld4": "' + mycolorhr4 + '",\n"audioponypk": ' + myaudio + ',\n"showfpsponypk": ' + myframes + ',\n"progressbarponypk": ' + mybarloading + ',\n"dontspeakponypk": ' + myspeak + ',\n"fixedurlpk": ' + myfixedpage + ',\n"interactionperm": ' + myinteractionsperm + ',\n"baseurlponypk": "' + mybase + '",\n"speedponypk": ' + myspeed + ',\n"speakponypk": ' + myprospeak + ',\n"volumeponypk": ' + myvolume + ',\n"fpsponypk": ' + myframesps + ',\n"fadeponypk": ' + myfade + ',\n"littleponypk": "{' + myponycomplete + '}",\n"littlerandomponypk": ' + myponyrandom + ',\n"loadingprogressponies": "{' + myponyidcomplete + '}"}');

    commandker = $("[name='commandponygenerator']").val();
    generatorjavaconfstart();
    detectbaseurl(mybase);
}

//Resultado

function generatorjavaconfstart() { $("[name='commandponygenerator']").val(commandker) }







//Functions Pony

var ponybanklistname = ""
var ponybanklistname2 = ""
var detectponyvariablenow = ""
var littlevariableponyhere = ""

function loadponiesregister(thisobject, ponybanklistname) {

    myponyidcke = $(thisobject).attr("id");
    detectponyvariablenow = $(thisobject).attr("id");
    littlevariableponyhere = ponybanklistname[detectponyvariablenow];
    $("#" + myponyidcke + "").val(littlevariableponyhere)
    if (($("#" + myponyidcke + "").val() == "") || ($("#" + myponyidcke + "").val() == null) || ($("#" + myponyidcke + "").val() == "undefined")) {
        $("#" + myponyidcke + "").val("0");
    }

    countregek1(thisobject);
    countregek2(thisobject);
}

function countregek1(thisobject) {
    registerponyname = $(thisobject).attr("data-pony");
    registerponynumber = $(thisobject).val();
}

function countregek2(thisobject) {
    mypony1 = $(thisobject).attr("data-pony");
    mypony2 = $(thisobject).val();
    myponyidcke = $(thisobject).attr("id");
    generatorjavaconfk(true, mypony1, mypony2, myponyidcke);
}

$("#urlbase, #speed, #speak, #volume, #fps, #fade, #enableaudio, #showfps, #dontspeak, #fixedurl, #interactionsenabled").bind("keydown keyup click", function() {
    generatorjavaconfk(false);
});

function searchfunctionpk(thisobject) {
    var searchtypehere = document.getElementById("searchtype").value;

    if (searchtypehere == "ponycategory") {
        var searchthis = $(thisobject).val();
        var searchthis = '[data-categories*="' + searchthis + '"]'
        if (!$(thisobject).val()) { $("[id='selectionponyk'], #littletagslist").removeClass("hideponies"); } else {
            $("[id='selectionponyk']").addClass("hideponies");
            $(searchthis).removeClass("hideponies");
            $("#littletagslist").addClass("hideponies");
        }
    } else if (searchtypehere == "ponyname") {
        var searchthis = $(thisobject).val();
        var searchthis = '[id="selectionponyk"]:contains(' + searchthis + ')'
        if (!$(thisobject).val()) { $("[id='selectionponyk'], #littletagslist").removeClass("hideponies"); } else {
            $("[id='selectionponyk']").addClass("hideponies");
            $(searchthis).removeClass("hideponies");
            $("#littletagslist").addClass("hideponies");
        }
    }
}

function settitleponieshek(thisobject) {
    var titlelittlepk = $(thisobject).attr("href");
    $(thisobject).attr("title", titlelittlepk);
}

function updatesearchtime() {
    searchfunctionpk("#searchponies");
}

$("#searchtype").change(function() { updatesearchtime(); });










//Save Pony

$("#saveponies").click(function() {
    if (($("#" + geturlclickidurltrue + "").hasClass("nothingurlpage")) && ($("#" + geturlclickidurlfalse + "").hasClass("nothingurlpage"))) {
        $("#saveponies").addClass("littlefailsave");
        setTimeout(function() { $("#saveponies").removeClass("littlefailsave"); }, 300)
    } else if ((speedlength > 0) && (speaklength > 0) && (volumelength > 0) && (fpslength > 0) && (fadelength > 0) && (speednb > -1) && (speaknb > -1) && (volumenb > -1) && (fpsnb > -1) && (fadenb > -1) && (colorbkss > 6) && (colorbksh == "#") && (colorpkss > 6) && (colorpksh == "#") && (colorkkss > 6) && (colorkksh == "#") && (colorckss > 6) && (colorcksh == "#")) {
        $("#saveponies").addClass("savedisabled").attr("disabled", "disabled");
        saveurlsystemhere(geturlclickidurl, geturlclickidurltrue, geturlclickidurlfalse);
        setTimeout(function() {
            save_options_mycommand();
            $("#saveponies").removeClass("savedisabled").removeAttr("disabled");
        }, 300)
    } else {
        $("#saveponies").addClass("littlefailsave");
        setTimeout(function() { $("#saveponies").removeClass("littlefailsave"); }, 300)
    }
})

$("#browserponies30globalek").click(function() {
    browserponies30globalek = $(this).prop('checked');
    chrome.storage.sync.set({ browserponies30globalek: browserponies30globalek });
})









//Gerador Editor


//Pony List

$("#ponycodeappendhere").click(function() {

    $("#myconfigcode").modal();

    chrome.storage.sync.get({
            ponylistcode: "",
            baseconfigke1: "",
            baseconfigke2: "",
            refreshautoconfig: false,
            customcss: "",
            customlanguage: ""
        },


        function(items) {
            $("[id='ponylistconfig']").val(items.ponylistcode);
            $("[id='baseconfig1']").val(items.baseconfigke1);
            $("[id='baseconfig2']").val(items.baseconfigke2);
            $("[id='refreshautoconfig']").prop("checked", items.refreshautoconfig)
            $("[id='customcss']").val(items.customcss)
            $("[id='customlanguage']").val(items.customlanguage)
        })


    $("#changelgponylist, #changelgponycode2, #changelgcustomcss").removeClass("whitelistsystem");
    if (basedevbasepony == true) { $("#changelgponycode2").addClass("whitelistsystem"); }
    if (basedevponylist == true) { $("#changelgponylist").addClass("whitelistsystem"); }
    if (basedevcustomcss == true) { $("#changelgcustomcss").addClass("whitelistsystem"); }

})



$("#ponylistconfigconfirm").click(function() {

    function resetempty(config) {

        var confirmnotwhitelist = confirm("Você está adicionando arquivos fora da Whitelist. Tem certeza que deseja fazer isso?")
        if (confirmnotwhitelist == true) {
            pkeconfirmpk();
            dateupdatelocalset();
        } else {

            if (config.basedevbasepony == null) {
                chrome.storage.sync.set({ baseconfigke2: "" })
                chrome.storage.local.set({ baseponytext: null })
            }
            if (config.basedevponylist == null) {
                chrome.storage.sync.set({ ponylistcode: "" })
                chrome.storage.local.set({ ponylisttext: null })
            }
            if (config.basedevcustomcss == null) {
                chrome.storage.sync.set({ customcss: "" })
                chrome.storage.local.set({ customcsstext: null })
            }

            systemupdate({
                "ponylist": $("#ponylisttrue").prop("checked"),
                "customcss": $("#customcsstrue").prop("checked"),
                "basepony": $("#codeponytrue").prop("checked"),
                "checksecurity": $("#checksecuritytrue").prop("checked"),
            }, function() { location.reload(); })

        }
    }

    function pkeconfirmpk() {
        $("#customcsshere").prop("disabled", true).remove();
        $("#ponylistconfig, #baseconfig1, #baseconfig2, #customcss, #customlanguage, #refreshautoconfig, #ponylistconfigconfirm, #ponylistconfighelp, #ponylistconfigcancel, #checksecuritytrue").prop("disabled", false);
        $("body").css({ "pointer-events": "" });
        $("#ponylistconfig").val("");
        $("#baseconfig1").val("");
        $("#baseconfig2").val("");
        $("#customcss").val("");
        $("#customlanguage").val("");

        loadingpke(false);

        generatorponieslist();
        detectbaseurl(mybase);

        if (optionclikedpk == true) { location.reload(); return }
        languageset();
        loadextensionstart();

    }

    //Recolher
    ponylistcode = $("#ponylistconfig").val();
    baseconfigke1 = $("#baseconfig1").val();
    baseconfigke2 = $("#baseconfig2").val();
    refreshautoconfig = $("#refreshautoconfig").prop("checked");
    customcss = $("#customcss").val();
    customlanguage = $("#customlanguage").val();

    var googledrivepkxs1 = "https://drive.google.com/file/d/"
    var googledrivepkxs2 = "https://googledrive.com/host/"
    if (ponylistcode.startsWith("https://drive.google.com/file/d/")) {
        ponylistcode = ponylistcode.substring(0, ponylistcode.lastIndexOf("/view"))
        ponylistcode = ponylistcode.replace(googledrivepkxs1, googledrivepkxs2)
    }
    if (baseconfigke1.startsWith("https://drive.google.com/file/d/")) {
        baseconfigke1 = baseconfigke1.substring(0, baseconfigke1.lastIndexOf("/view"))
        baseconfigke1 = baseconfigke1.replace(googledrivepkxs1, googledrivepkxs2)
    }
    if (baseconfigke2.startsWith("https://drive.google.com/file/d/")) {
        baseconfigke2 = baseconfigke2.substring(0, baseconfigke2.lastIndexOf("/view"))
        baseconfigke2 = baseconfigke2.replace(googledrivepkxs1, googledrivepkxs2)
    }
    if (customcss.startsWith("https://drive.google.com/file/d/")) {
        customcss = customcss.substring(0, customcss.lastIndexOf("/view"))
        customcss = customcss.replace(googledrivepkxs1, googledrivepkxs2)
    }
    if (customlanguage.startsWith("https://drive.google.com/file/d/")) {
        customlanguage = customlanguage.substring(0, customlanguage.lastIndexOf("/view"))
        customlanguage = customlanguage.replace(googledrivepkxs1, googledrivepkxs2)
    }


    chrome.storage.sync.set({ ponylistcode: ponylistcode, baseconfigke1: baseconfigke1, baseconfigke2: baseconfigke2, customcss: customcss, customlanguage: customlanguage, refreshautoconfig: refreshautoconfig });
    $("#ponylistconfig, #baseconfig1, #baseconfig2, #customcss, #customlanguage, #refreshautoconfig, #ponylistconfigconfirm, #ponylistconfighelp, #ponylistconfigcancel, #checksecuritytrue").prop("disabled", true);
    $("body").css({ "pointer-events": "none" });
    loadingpke(true);

    systemupdate({
        "basepony": $("#codeponytrue").prop("checked"),
        "interactions": $("#interactionstrue").prop("checked"),
        "ponylist": $("#ponylisttrue").prop("checked"),
        "customcss": $("#customcsstrue").prop("checked"),
        "customlanguage": $("#customlanguagetrue").prop("checked"),
        "checksecurity": $("#checksecuritytrue").prop("checked"),
        "localStart": true
    }, function(config) {
        basedevbasepony = config.basedevbasepony
        basedevponylist = config.basedevponylist
        basedevcustomcss = config.basedevcustomcss
        daterefresh = config.daterefresh
            //if((basedevbasepony == null) || (basedevponylist == null) || (basedevcustomcss == null)){resetempty(config);}
            //else{}
        pkeconfirmpk();
        dateupdatelocalset();
    })

    $("body").css("pointer-events", "none");

})

$(".ponylistconfig, #ponycodeappendhere").bind("mouseover", function() {

    if (optionclikedpk == true) { $("#refreshwarncode").text("ON"); } else if (optionclikedpk == false) { $("#refreshwarncode").text("OFF"); }

})

//Check options

function checkcodeoptions() {
    setTimeout(function() {

        $("#ponylistconfig, #baseconfig2").addClass("nothingitemcode");
        $("#customcss").addClass("nothingitemcode2");
        $("#baseconfig1, #customlanguage").addClass("nothingitemcode nothingitemcode2");

        if (($("#ponylistconfig").val().endsWith(".txt")) || ($("#ponylistconfig").val().startsWith("https://googledrive.com/host/")) || ($("#ponylistconfig").val().startsWith("https://drive.google.com/file/d/")) || ($("#ponylistconfig").val().startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || ($("#ponylistconfig").val().startsWith("https://sonicrainboom.com.br/attachment.php?aid="))) { $("#ponylistconfig").removeClass("nothingitemcode"); }
        if (($("#baseconfig1").val().endsWith(".txt")) || ($("#baseconfig1").val().startsWith("https://googledrive.com/host/")) || ($("#baseconfig1").val().startsWith("https://drive.google.com/file/d/")) || ($("#baseconfig1").val().startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || ($("#baseconfig1").val().startsWith("https://sonicrainboom.com.br/attachment.php?aid="))) { $("#baseconfig1").removeClass("nothingitemcode").removeClass("nothingitemcode2"); } else if (($("#baseconfig1").val() == "")) { $("#baseconfig1").removeClass("nothingitemcode") } else { $("#baseconfig1").removeClass("nothingitemcode2"); }
        if (($("#customlanguage").val().endsWith(".txt")) || ($("#customlanguage").val().startsWith("https://googledrive.com/host/")) || ($("#customlanguage").val().startsWith("https://drive.google.com/file/d/")) || ($("#customlanguage").val().startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || ($("#customlanguage").val().startsWith("https://sonicrainboom.com.br/attachment.php?aid="))) { $("#customlanguage").removeClass("nothingitemcode").removeClass("nothingitemcode2"); } else if (($("#customlanguage").val() == "")) { $("#customlanguage").removeClass("nothingitemcode") } else { $("#customlanguage").removeClass("nothingitemcode2"); }
        if (($("#baseconfig2").val().endsWith(".txt")) || ($("#baseconfig2").val().startsWith("https://googledrive.com/host/")) || ($("#baseconfig2").val().startsWith("https://drive.google.com/file/d/")) || ($("#baseconfig2").val().startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || ($("#baseconfig2").val().startsWith("https://sonicrainboom.com.br/attachment.php?aid="))) { $("#baseconfig2").removeClass("nothingitemcode"); }
        if (($("#customcss").val().endsWith(".css")) || ($("#customcss").val().startsWith("https://googledrive.com/host/")) || ($("#customcss").val().startsWith("https://drive.google.com/file/d/")) || ($("#customcss").val().startsWith("http://sonicrainboom.com.br/attachment.php?aid=")) || ($("#customcss").val().startsWith("https://sonicrainboom.com.br/attachment.php?aid="))) { $("#customcss").removeClass("nothingitemcode2"); }

        $("#changelgponylist, #changelgcustomlanguage, #changelginteractions2, #changelgponycode2, #changelgcustomcss").removeClass("warnhttpsek");
        if ($("#ponylistconfig").val().startsWith("http://")) { $("#changelgponylist").addClass("warnhttpsek"); }
        if ($("#customlanguage").val().startsWith("http://")) { $("#changelgcustomlanguage").addClass("warnhttpsek"); }
        if ($("#baseconfig1").val().startsWith("http://")) { $("#changelginteractions2").addClass("warnhttpsek"); }
        if ($("#baseconfig2").val().startsWith("http://")) { $("#changelgponycode2").addClass("warnhttpsek"); }
        if ($("#customcss").val().startsWith("http://")) { $("#changelgcustomcss").addClass("warnhttpsek"); }

    }, 10)
}

function checkcodelanguagealt() {
    setTimeout(function() {
        if (typeof $("#customlanguage").val() !== customlanguage) { optionclikedpk = true; }
        if (typeof $("#baseconfig2").val() !== baseconfigke2) { optionclikedpk = true; }
    }, 10)
}

$("#ponylistconfig, #baseconfig2, #baseconfig1, #customlanguage, .ponylistconfig, #ponycodeappendhere").bind("mouseover keypress keydown keyup click", function() { checkcodeoptions(); })
$("#baseconfig2, #customlanguage").bind("keypress keydown keyup", function() { checkcodelanguagealt(); })

var urlbaselength = ""
var speedlength = ""
var speaklength = ""
var volumelength = ""
var fpslength = ""
var fadelength = ""
var speednb = ""
var speaknb = ""
var volumenb = ""
var fpsnb = ""
var fadenb = ""
var colorbk = ""
var colorpk = ""
var colorkk = ""
var colorck = ""
var colorbkss = ""
var colorpkss = ""
var colorkkss = ""
var colorckss = ""
var colorbksh = ""
var colorpksh = ""
var colorkksh = ""
var colorcksh = ""


function setprogresscolorex() {
    if ((colorbkss > 6) && (colorbksh == "#")) { $("#testcolorb").css({ 'background-color': colorbk }); } else { $("#testcolorb").css({ 'background-color': '' }); }
    if ((colorpkss > 6) && (colorpksh == "#")) { $("#testcolorp").css({ 'background-color': colorpk }); } else { $("#testcolorp").css({ 'background-color': '' }); }
    if ((colorkkss > 6) && (colorkksh == "#")) { $("#testcolorkc").css({ 'color': colorkk }); } else { $("#testcolorkc").css({ 'color': '' }); }
    if ((colorckss > 6) && (colorcksh == "#")) { $("#testcolorkc").css({ 'background-color': colorck }); } else { $("#testcolorkc").css({ 'background-color': '' }); }
}



function checkoptionspagk() {
    setTimeout(function() {

        $("#speed, #speak, #volume, #fps, #fade, #ldcolorb, #ldcolorp, #ldcolork, #ldcolorc").addClass("nothingitemcode");
        $("#urlbase").addClass("nothingitemcode2");
        $("[for='base']").addClass("warnhttpsek");
        $("#globalbaseurlwarn").removeClass("warningglobalbase2").removeClass("warningglobalbase1");
        urlbaselength = $("#urlbase").val().length;
        speedlength = $("#speed").val().length;
        speaklength = $("#speak").val().length;
        volumelength = $("#volume").val().length;
        fpslength = $("#fps").val().length;
        fadelength = $("#fade").val().length;
        speednb = $("#speed").val();
        speaknb = $("#speak").val();
        volumenb = $("#volume").val();
        fpsnb = $("#fps").val();
        fadenb = $("#fade").val();
        colorbk = $("#ldcolorb").val();
        colorpk = $("#ldcolorp").val();
        colorkk = $("#ldcolork").val();
        colorck = $("#ldcolorc").val();

        if (($("#urlbase").val().startsWith("https://")) || ($("#urlbase").val().startsWith("http://"))) { $("#globalbaseurlwarn").text("\u2714").addClass("warningglobalbase2"); } else { $("#globalbaseurlwarn").text("\u26a0").addClass("warningglobalbase1"); }
        if ($("#urlbase").val().startsWith("https://")) { $("[for='base']").removeClass("warnhttpsek"); }
        if (urlbaselength > 0) { $("#urlbase").removeClass("nothingitemcode2"); }
        if ((speedlength > 0) && (speednb > -1)) { $("#speed").removeClass("nothingitemcode"); }
        if ((speaklength > 0) && (speaknb > -1)) { $("#speak").removeClass("nothingitemcode"); }
        if ((volumelength > 0) && (volumenb > -1)) { $("#volume").removeClass("nothingitemcode"); }
        if ((fpslength > 0) && (fpsnb > -1)) { $("#fps").removeClass("nothingitemcode"); }
        if ((fadelength > 0) && (fadenb > -1)) { $("#fade").removeClass("nothingitemcode"); }

        colorbkss = $("#ldcolorb").val().length;
        colorpkss = $("#ldcolorp").val().length;
        colorkkss = $("#ldcolork").val().length;
        colorckss = $("#ldcolorc").val().length;
        colorbksh = $("#ldcolorb").val().charAt(0);
        colorpksh = $("#ldcolorp").val().charAt(0);
        colorkksh = $("#ldcolork").val().charAt(0);
        colorcksh = $("#ldcolorc").val().charAt(0);



        if ($("#progressbar").is(":checked")) {
            $("#progresscolor1").prop("disabled", false);
            $("#progresscolor2").prop("disabled", false);
            $("#progresscolor3").prop("disabled", false);
            $("#progresscolor4").prop("disabled", false);
            $("#ldcolorb").prop("disabled", false);
            $("#ldcolorp").prop("disabled", false);
            $("#ldcolork").prop("disabled", false);
            $("#ldcolorc").prop("disabled", false);
        } else {
            $("#progresscolor1").prop("disabled", true);
            $("#progresscolor2").prop("disabled", true);
            $("#progresscolor3").prop("disabled", true);
            $("#progresscolor4").prop("disabled", true);
            $("#ldcolorb").prop("disabled", true);
            $("#ldcolorp").prop("disabled", true);
            $("#ldcolork").prop("disabled", true);
            $("#ldcolorc").prop("disabled", true);
        }

        if ((colorbkss > 6) && (colorbksh == "#")) {
            $("#ldcolorb").removeClass("nothingitemcode");
            $("#progresscolor1").val(colorbk);
        } else { $("#progresscolor1").val("#000000"); }
        if ((colorpkss > 6) && (colorpksh == "#")) {
            $("#ldcolorp").removeClass("nothingitemcode");
            $("#progresscolor2").val(colorpk);
        } else { $("#progresscolor2").val("#000000"); }
        if ((colorkkss > 6) && (colorkksh == "#")) {
            $("#ldcolork").removeClass("nothingitemcode");
            $("#progresscolor3").val(colorkk);
        } else { $("#progresscolor3").val("#000000"); }
        if ((colorckss > 6) && (colorcksh == "#")) {
            $("#ldcolorc").removeClass("nothingitemcode");
            $("#progresscolor4").val(colorck);
        } else { $("#progresscolor4").val("#000000"); }

        setprogresscolorex();

    }, 10)
}

function checkoptionspagk2() {
    setTimeout(function() {

        colorbk = $("#progresscolor1").val();
        colorpk = $("#progresscolor2").val();
        colorkk = $("#progresscolor3").val();
        colorck = $("#progresscolor4").val();

        $("#ldcolorb").val(colorbk);
        $("#ldcolorp").val(colorpk);
        $("#ldcolork").val(colorkk);
        $("#ldcolorc").val(colorck);

        generatorjavaconfk(false);
        setprogresscolorex();

    }, 10)
}

$("#urlbase, #speed, #speak, #volume, #fps, #fade").bind("mouseover keypress keydown keyup click", function() { checkoptionspagk(); })

$("#ldcolorb, #ldcolorp, #ldcolork, #ldcolorc, #progressbar").bind("mouseover keypress keydown keyup click", function() {
    checkoptionspagk();
    generatorjavaconfk(false);
})
$("#progresscolor1, #progresscolor2, #progresscolor3, #progresscolor4").bind("change", function() { checkoptionspagk2(); })



//Reset Colors

$("#restartcolors").click(function() {
    $("#ldcolorb").val("#48449d");
    $("#ldcolorp").val("#242424");
    $("#ldcolork").val("#ffffff");
    $("#ldcolorc").val("#ffffff");
    checkoptionspagk();
    generatorjavaconfk(false);
    setprogresscolorex();
})