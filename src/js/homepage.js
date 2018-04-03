var specialpagesource = true

function basicremovebppage() {

    $("h2:contains(What is this?)").addClass('hide');
    $("h2:contains(Short URL)").addClass('hide');
    $("h2:contains(Make a Bookmarklet)").addClass('hide');
    $("p:contains(Browser Ponies lets you place )").addClass('hide');
    $("p:contains(This is a reimplementation of )").addClass('hide');
    $("p:contains(Browser Ponies work best with )").addClass('hide');
    $("p:contains(The artwork used is from the )").addClass('hide');
    $("p:contains(You can put ponies on a website by simply putting )").addClass('hide');
    $("p:contains(Note that not all websites allow embedding in an iframe )").addClass('hide');
    $("p:contains(You can also bookmark the control links above in order to have control over ponies on any website.)").addClass('hide');
    $("h2:contains(Best Pony)").addClass('hide');
    $("p:contains(What is your favourite pony? Resort the list to tell me!)").addClass('hide');
    $("iframe").addClass('hide');


    $("p:contains(In Internet Explorer I managed to control GIF animation playback using iframes)").addClass("advancedinfo");
    $("pre:contains(toggleBrowserPoniesToBackground)").addClass("advancedinfo");
    $("pre:contains(#main)").addClass("advancedinfo");
    $("p:contains(In addition to that it defines these style rules:)").addClass("advancedinfo");
    $("p:contains(For instance, this webpage defines the toggleBrowserPoniesToBackground function like so)").addClass("advancedinfo");
    $("p:contains(In order to support the Toggle ponies in background )").addClass("advancedinfo");
    $("h3:contains(Toggle ponies in background)").addClass("advancedinfo");
    $("p:contains(Firefox has a bug concerning the animation speed of animated GIFs)").addClass("advancedinfo");
    $("h3:contains(Browser Support)").addClass("advancedinfo");
    $("h2:contains(Advanced User Stuff)").empty().append($("<a>", { href: "javascript:void(0)", id: "openadvanceduser", title: "Click Here" }).append($("<h2>").text("Advanced User Stuff")));

    $(".advancedinfo").addClass("hideinfo");


    $("p:contains(The code of this software is licensed under the MIT license)").addClass("licenceinfo");
    $("p:contains(Copyright © 2011-2013 Mathias Panzenböck)").addClass("licenceinfo");
    $("p:contains(Permission is hereby granted, free of charge)").addClass("licenceinfo");
    $("p:contains(The above copyright notice and this permission)").addClass("licenceinfo");
    $('p:contains(THE SOFTWARE IS PROVIDED "AS IS", WITHOUT)').addClass("licenceinfo");
    $("h2:contains(License)").empty().append($("<a>", { href: "javascript:void(0)", id: "openlicenceuser", title: "Click Here" }).append($("<h2>").text("License")));

    $(".licenceinfo").addClass("hideinfo");

    var advanceduserpk = false

    function openadvanced() {
        if (advanceduserpk == false) {
            advanceduserpk = true;
            $(".advancedinfo").removeClass("hideinfo");
        } else if (advanceduserpk == true) {
            advanceduserpk = false;
            $(".advancedinfo").addClass("hideinfo");
        }
    }

    $("#openadvanceduser").click(openadvanced);

    var licenceuserpk = false

    function openlicense() {
        if (licenceuserpk == false) {
            licenceuserpk = true;
            $(".licenceinfo").removeClass("hideinfo");
        } else if (licenceuserpk == true) {
            licenceuserpk = false;
            $(".licenceinfo").addClass("hideinfo");
        }
    }

    $("#openlicenceuser").click(openlicense);

}


if ($(location).attr('href').indexOf('?editormode') > -1) {

    basicremovebppage();
    $("h3:contains(Using your own ponies)").addClass('hide');
    $("p:contains(If you want to use your own ponies you can convert the INI files to JavaScript using)").addClass('hide');
    $("p:contains(This currently only works with Firefox and Chrome)").addClass('hide');
    $("h3:contains(Your Ponies:)").addClass('hide');
    $("[class='dropzone']").addClass('hide');
    $("h4:contains(Your Ponies:)").addClass('hide');
    $("p:contains(As a next step you may need to adapt the URLs)").addClass('hide');
    $("p:contains(If the files are all at some more or less random location)").addClass('hide');
    $("p:contains(As a third option you can also embed the files directly)").addClass('hide');
    $("h4:contains(Your Interacions:)").addClass('hide');
    $("p:contains(Base URL:)").addClass('hide');
    $("[onclick='inisToJS();']").addClass('hide');
    $("p:contains(your-ponies.js:)").addClass('hide');
    $("h2:contains(Download)").addClass('hide');
    $("p:contains(You can download the source without images/sounds here)").addClass('hide');
    $("p:contains(Or with images/sounds)").addClass('hide');
    $("p:contains(Of course you need to replace http://example.org/your-ponies.js)").addClass('hide');
    $("p:contains(If you want to you can also copy the browserponies.js)").addClass('hide');
    $("p:contains(Note that none of the images are made by me.)").addClass('hide');
    $("p:contains(A git repository can be found here)").addClass('hide');
    $("p:contains(Then put the contents of the text area above into a file called e.g. )").addClass('hide');
    $("pre:contains(http://example.org/your-ponies.js)").addClass('hide');

}

if ($(location).attr('href').indexOf('?custommode') > -1) {

    basicremovebppage();
    $("#bookmarkswrapper").addClass('hide');
    $("h3:contains(Bookmarks Menu)").addClass('hide');
    $("p:contains(If you'd like you can download a bookmarks file)").addClass('hide');
    $("table:contains(Width)").addClass('hide');
    $("p:contains(Or if you don't want to include my script directly in your webp)").addClass('hide');
    $("p:contains(Or paste this into your webpage)").addClass('hide');
    $("p:contains(Choose your ponies belown and then drag this link into your Bookmark Toolbar)").addClass('hide');
    $("p:contains(Click it whenever you feel a website needs more ponies)").addClass('hide');
    $("p:contains(Or if you don't want to include my script directly in your webpage you can use this embed code to confine the ponies into an iframe)").addClass('hide');
    $("table:contains(Show Paddock)").addClass('hide');
    $("#iframewrap").addClass('hide');

    $("#filterwrapper, #ponylist, #embedcode, #bookmarkletwrapper").addClass('hide');

}