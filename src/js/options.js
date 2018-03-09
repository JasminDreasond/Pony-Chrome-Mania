function rest_save(items, finalresult) {
    chrome.storage.sync.set({
        ponylistcode: items.ponylistcode,
        baseconfigke1: items.baseconfigke1,
        baseconfigke2: items.baseconfigke2,
        customlanguage: items.customlanguage,
        browserponies30globalek: items.browserponies30globalek,
        refreshautoconfig: items.refreshautoconfig,
        laguageoptions: items.laguageoptions,
        customcss: items.customcss,
        exdlenabled: items.exdlenabled,
        browserponies1turleditorsktrue: items.browserponies1turleditorsktrue,
        browserponies2turleditorsktrue: items.browserponies2turleditorsktrue,
        browserponies3turleditorsktrue: items.browserponies3turleditorsktrue,
        browserponies4urleditorsktrue: items.browserponies4urleditorsktrue,
        browserponies5urleditorsktrue: items.browserponies5urleditorsktrue,
        browserponies6urleditorsktrue: items.browserponies6urleditorsktrue,
        browserponies7urleditorsktrue: items.browserponies7urleditorsktrue,
        browserponies8urleditorsktrue: items.browserponies8urleditorsktrue,
        browserponies9urleditorsktrue: items.browserponies9urleditorsktrue,
        browserponies10urleditorsktrue: items.browserponies10urleditorsktrue,
        browserponies11urleditorsktrue: items.browserponies11urleditorsktrue,
        browserponies12urleditorsktrue: items.browserponies12urleditorsktrue,
        browserponies13urleditorsktrue: items.browserponies13urleditorsktrue,
        browserponies14urleditorsktrue: items.browserponies14urleditorsktrue,
        browserponies15urleditorsktrue: items.browserponies15urleditorsktrue,
        browserponies16urleditorsktrue: items.browserponies16urleditorsktrue,
        browserponies17urleditorsktrue: items.browserponies17urleditorsktrue,
        browserponies18urleditorsktrue: items.browserponies18urleditorsktrue,
        browserponies19urleditorsktrue: items.browserponies19urleditorsktrue,
        browserponies20urleditorsktrue: items.browserponies20urleditorsktrue,
        browserponies21urleditorsktrue: items.browserponies21urleditorsktrue,
        browserponies22urleditorsktrue: items.browserponies22urleditorsktrue,
        browserponies23urleditorsktrue: items.browserponies23urleditorsktrue,
        browserponies24urleditorsktrue: items.browserponies24urleditorsktrue,
        browserponies25urleditorsktrue: items.browserponies25urleditorsktrue,
        browserponies26urleditorsktrue: items.browserponies26urleditorsktrue,
        browserponies27urleditorsktrue: items.browserponies27urleditorsktrue,
        browserponies28urleditorsktrue: items.browserponies28urleditorsktrue,
        browserponies29urleditorsktrue: items.browserponies29urleditorsktrue,
        browserponies30urleditorsktrue: items.browserponies30urleditorsktrue,
        browserponies1turleditorskfalse: items.browserponies1turleditorskfalse,
        browserponies2turleditorskfalse: items.browserponies2turleditorskfalse,
        browserponies3turleditorskfalse: items.browserponies3turleditorskfalse,
        browserponies4urleditorskfalse: items.browserponies4urleditorskfalse,
        browserponies5urleditorskfalse: items.browserponies5urleditorskfalse,
        browserponies6urleditorskfalse: items.browserponies6urleditorskfalse,
        browserponies7urleditorskfalse: items.browserponies7urleditorskfalse,
        browserponies8urleditorskfalse: items.browserponies8urleditorskfalse,
        browserponies9urleditorskfalse: items.browserponies9urleditorskfalse,
        browserponies10urleditorskfalse: items.browserponies10urleditorskfalse,
        browserponies11urleditorskfalse: items.browserponies11urleditorskfalse,
        browserponies12urleditorskfalse: items.browserponies12urleditorskfalse,
        browserponies13urleditorskfalse: items.browserponies13urleditorskfalse,
        browserponies14urleditorskfalse: items.browserponies14urleditorskfalse,
        browserponies15urleditorskfalse: items.browserponies15urleditorskfalse,
        browserponies16urleditorskfalse: items.browserponies16urleditorskfalse,
        browserponies17urleditorskfalse: items.browserponies17urleditorskfalse,
        browserponies18urleditorskfalse: items.browserponies18urleditorskfalse,
        browserponies19urleditorskfalse: items.browserponies19urleditorskfalse,
        browserponies20urleditorskfalse: items.browserponies20urleditorskfalse,
        browserponies21urleditorskfalse: items.browserponies21urleditorskfalse,
        browserponies22urleditorskfalse: items.browserponies22urleditorskfalse,
        browserponies23urleditorskfalse: items.browserponies23urleditorskfalse,
        browserponies24urleditorskfalse: items.browserponies24urleditorskfalse,
        browserponies25urleditorskfalse: items.browserponies25urleditorskfalse,
        browserponies26urleditorskfalse: items.browserponies26urleditorskfalse,
        browserponies27urleditorskfalse: items.browserponies27urleditorskfalse,
        browserponies28urleditorskfalse: items.browserponies28urleditorskfalse,
        browserponies29urleditorskfalse: items.browserponies29urleditorskfalse,
        browserponies30urleditorskfalse: items.browserponies30urleditorskfalse
    }, function() { finalresult(); })
}



function save_options(setpke, items, finalresult) {
    if (setpke == true) {
        chrome.storage.sync.set({
            browserponies1t: items.browserponies1t,
            browserponies2t: items.browserponies2t,
            browserponies3t: items.browserponies3t,
            browserponies4: items.browserponies4,
            browserponies5: items.browserponies5,
            browserponies6: items.browserponies6,
            browserponies7: items.browserponies7,
            browserponies8: items.browserponies8,
            browserponies9: items.browserponies9,
            browserponies10: items.browserponies10,
            browserponies11: items.browserponies11,
            browserponies12: items.browserponies12,
            browserponies13: items.browserponies13,
            browserponies14: items.browserponies14,
            browserponies15: items.browserponies15,
            browserponies16: items.browserponies16,
            browserponies17: items.browserponies17,
            browserponies18: items.browserponies18,
            browserponies19: items.browserponies19,
            browserponies20: items.browserponies20,
            browserponies21: items.browserponies21,
            browserponies22: items.browserponies22,
            browserponies23: items.browserponies23,
            browserponies24: items.browserponies24,
            browserponies25: items.browserponies25,
            browserponies26: items.browserponies26,
            browserponies27: items.browserponies27,
            browserponies28: items.browserponies28,
            browserponies29: items.browserponies29,
            browserponies30: items.browserponies30
        }, function() { finalresult(); })
    } else {
        chrome.storage.sync.set({
                browserponies1t: $('#browserponies1t').val(),
                browserponies2t: $('#browserponies2t').val(),
                browserponies3t: $('#browserponies3t').val(),
                browserponies4: $('#browserponies4').val(),
                browserponies5: $('#browserponies5').val(),
                browserponies6: $('#browserponies6').val(),
                browserponies7: $('#browserponies7').val(),
                browserponies8: $('#browserponies8').val(),
                browserponies9: $('#browserponies9').val(),
                browserponies10: $('#browserponies10').val(),
                browserponies11: $('#browserponies11').val(),
                browserponies12: $('#browserponies12').val(),
                browserponies13: $('#browserponies13').val(),
                browserponies14: $('#browserponies14').val(),
                browserponies15: $('#browserponies15').val(),
                browserponies16: $('#browserponies16').val(),
                browserponies17: $('#browserponies17').val(),
                browserponies18: $('#browserponies18').val(),
                browserponies19: $('#browserponies19').val(),
                browserponies20: $('#browserponies20').val(),
                browserponies21: $('#browserponies21').val(),
                browserponies22: $('#browserponies22').val(),
                browserponies23: $('#browserponies23').val(),
                browserponies24: $('#browserponies24').val(),
                browserponies25: $('#browserponies25').val(),
                browserponies26: $('#browserponies26').val(),
                browserponies27: $('#browserponies27').val(),
                browserponies28: $('#browserponies28').val(),
                browserponies29: $('#browserponies29').val(),
                browserponies30: $('#browserponies30').val()
            },

            function() {

                restore_options();

            });
    }
}



function save_options_mycommand(setpke, items, finalresult) {
    if (setpke == true) {
        chrome.storage.sync.set({
            browserponies1tmycommand: items.browserponies1tmycommand,
            browserponies2tmycommand: items.browserponies2tmycommand,
            browserponies3tmycommand: items.browserponies3tmycommand,
            browserponies4mycommand: items.browserponies4mycommand,
            browserponies5mycommand: items.browserponies5mycommand,
            browserponies6mycommand: items.browserponies6mycommand,
            browserponies7mycommand: items.browserponies7mycommand,
            browserponies8mycommand: items.browserponies8mycommand,
            browserponies9mycommand: items.browserponies9mycommand,
            browserponies10mycommand: items.browserponies10mycommand,
            browserponies11mycommand: items.browserponies11mycommand,
            browserponies12mycommand: items.browserponies12mycommand,
            browserponies13mycommand: items.browserponies13mycommand,
            browserponies14mycommand: items.browserponies14mycommand,
            browserponies15mycommand: items.browserponies15mycommand,
            browserponies16mycommand: items.browserponies16mycommand,
            browserponies17mycommand: items.browserponies17mycommand,
            browserponies18mycommand: items.browserponies18mycommand,
            browserponies19mycommand: items.browserponies19mycommand,
            browserponies20mycommand: items.browserponies20mycommand,
            browserponies21mycommand: items.browserponies21mycommand,
            browserponies22mycommand: items.browserponies22mycommand,
            browserponies23mycommand: items.browserponies23mycommand,
            browserponies24mycommand: items.browserponies24mycommand,
            browserponies25mycommand: items.browserponies25mycommand,
            browserponies26mycommand: items.browserponies26mycommand,
            browserponies27mycommand: items.browserponies27mycommand,
            browserponies28mycommand: items.browserponies28mycommand,
            browserponies29mycommand: items.browserponies29mycommand,
            browserponies30mycommand: items.browserponies30mycommand
        }, function() { finalresult(); })
    } else {
        chrome.storage.sync.set({
                browserponies1tmycommand: $('#browserponies1tmycommand').val(),
                browserponies2tmycommand: $('#browserponies2tmycommand').val(),
                browserponies3tmycommand: $('#browserponies3tmycommand').val(),
                browserponies4mycommand: $('#browserponies4mycommand').val(),
                browserponies5mycommand: $('#browserponies5mycommand').val(),
                browserponies6mycommand: $('#browserponies6mycommand').val(),
                browserponies7mycommand: $('#browserponies7mycommand').val(),
                browserponies8mycommand: $('#browserponies8mycommand').val(),
                browserponies9mycommand: $('#browserponies9mycommand').val(),
                browserponies10mycommand: $('#browserponies10mycommand').val(),
                browserponies11mycommand: $('#browserponies11mycommand').val(),
                browserponies12mycommand: $('#browserponies12mycommand').val(),
                browserponies13mycommand: $('#browserponies13mycommand').val(),
                browserponies14mycommand: $('#browserponies14mycommand').val(),
                browserponies15mycommand: $('#browserponies15mycommand').val(),
                browserponies16mycommand: $('#browserponies16mycommand').val(),
                browserponies17mycommand: $('#browserponies17mycommand').val(),
                browserponies18mycommand: $('#browserponies18mycommand').val(),
                browserponies19mycommand: $('#browserponies19mycommand').val(),
                browserponies20mycommand: $('#browserponies20mycommand').val(),
                browserponies21mycommand: $('#browserponies21mycommand').val(),
                browserponies22mycommand: $('#browserponies22mycommand').val(),
                browserponies23mycommand: $('#browserponies23mycommand').val(),
                browserponies24mycommand: $('#browserponies24mycommand').val(),
                browserponies25mycommand: $('#browserponies25mycommand').val(),
                browserponies26mycommand: $('#browserponies26mycommand').val(),
                browserponies27mycommand: $('#browserponies27mycommand').val(),
                browserponies28mycommand: $('#browserponies28mycommand').val(),
                browserponies29mycommand: $('#browserponies29mycommand').val(),
                browserponies30mycommand: $('#browserponies30mycommand').val()
            },

            function() {

                restore_options();

            });
    }
}




function restore_options(confirmmore, finalresult) {
    var nullsystempker = "nullts"
    var nullsystempker2 = "32nullka32"
    chrome.storage.sync.get({
            laguageoptions: "portuguesebr",
            customcss: "",
            ponylistcode: "",
            baseconfigke1: "",
            baseconfigke2: "",
            customlanguage: "",
            exdlenabled: null,
            browserponies30globalek: false,
            refreshautoconfig: false,
            browserponies1t: nullsystempker,
            browserponies2t: nullsystempker,
            browserponies3t: nullsystempker,
            browserponies4: nullsystempker,
            browserponies5: nullsystempker,
            browserponies6: nullsystempker,
            browserponies7: nullsystempker,
            browserponies8: nullsystempker,
            browserponies9: nullsystempker,
            browserponies10: nullsystempker,
            browserponies11: nullsystempker,
            browserponies12: nullsystempker,
            browserponies13: nullsystempker,
            browserponies14: nullsystempker,
            browserponies15: nullsystempker,
            browserponies16: nullsystempker,
            browserponies17: nullsystempker,
            browserponies18: nullsystempker,
            browserponies19: nullsystempker,
            browserponies20: nullsystempker,
            browserponies21: nullsystempker,
            browserponies22: nullsystempker,
            browserponies23: nullsystempker,
            browserponies24: nullsystempker,
            browserponies25: nullsystempker,
            browserponies26: nullsystempker,
            browserponies27: nullsystempker,
            browserponies28: nullsystempker,
            browserponies29: nullsystempker,
            browserponies30: nullsystempker,
            browserponies1tmycommand: nullsystempker,
            browserponies2tmycommand: nullsystempker,
            browserponies3tmycommand: nullsystempker,
            browserponies4mycommand: nullsystempker,
            browserponies5mycommand: nullsystempker,
            browserponies6mycommand: nullsystempker,
            browserponies7mycommand: nullsystempker,
            browserponies8mycommand: nullsystempker,
            browserponies9mycommand: nullsystempker,
            browserponies10mycommand: nullsystempker,
            browserponies11mycommand: nullsystempker,
            browserponies12mycommand: nullsystempker,
            browserponies13mycommand: nullsystempker,
            browserponies14mycommand: nullsystempker,
            browserponies15mycommand: nullsystempker,
            browserponies16mycommand: nullsystempker,
            browserponies17mycommand: nullsystempker,
            browserponies18mycommand: nullsystempker,
            browserponies19mycommand: nullsystempker,
            browserponies20mycommand: nullsystempker,
            browserponies21mycommand: nullsystempker,
            browserponies22mycommand: nullsystempker,
            browserponies23mycommand: nullsystempker,
            browserponies24mycommand: nullsystempker,
            browserponies25mycommand: nullsystempker,
            browserponies26mycommand: nullsystempker,
            browserponies27mycommand: nullsystempker,
            browserponies28mycommand: nullsystempker,
            browserponies29mycommand: nullsystempker,
            browserponies30mycommand: nullsystempker,
            browserponies1turleditorsktrue: nullsystempker2,
            browserponies2turleditorsktrue: nullsystempker2,
            browserponies3turleditorsktrue: nullsystempker2,
            browserponies4urleditorsktrue: nullsystempker2,
            browserponies5urleditorsktrue: nullsystempker2,
            browserponies6urleditorsktrue: nullsystempker2,
            browserponies7urleditorsktrue: nullsystempker2,
            browserponies8urleditorsktrue: nullsystempker2,
            browserponies9urleditorsktrue: nullsystempker2,
            browserponies10urleditorsktrue: nullsystempker2,
            browserponies11urleditorsktrue: nullsystempker2,
            browserponies12urleditorsktrue: nullsystempker2,
            browserponies13urleditorsktrue: nullsystempker2,
            browserponies14urleditorsktrue: nullsystempker2,
            browserponies15urleditorsktrue: nullsystempker2,
            browserponies16urleditorsktrue: nullsystempker2,
            browserponies17urleditorsktrue: nullsystempker2,
            browserponies18urleditorsktrue: nullsystempker2,
            browserponies19urleditorsktrue: nullsystempker2,
            browserponies20urleditorsktrue: nullsystempker2,
            browserponies21urleditorsktrue: nullsystempker2,
            browserponies22urleditorsktrue: nullsystempker2,
            browserponies23urleditorsktrue: nullsystempker2,
            browserponies24urleditorsktrue: nullsystempker2,
            browserponies25urleditorsktrue: nullsystempker2,
            browserponies26urleditorsktrue: nullsystempker2,
            browserponies27urleditorsktrue: nullsystempker2,
            browserponies28urleditorsktrue: nullsystempker2,
            browserponies29urleditorsktrue: nullsystempker2,
            browserponies30urleditorsktrue: "",
            browserponies1turleditorskfalse: nullsystempker2,
            browserponies2turleditorskfalse: nullsystempker2,
            browserponies3turleditorskfalse: nullsystempker2,
            browserponies4urleditorskfalse: nullsystempker2,
            browserponies5urleditorskfalse: nullsystempker2,
            browserponies6urleditorskfalse: nullsystempker2,
            browserponies7urleditorskfalse: nullsystempker2,
            browserponies8urleditorskfalse: nullsystempker2,
            browserponies9urleditorskfalse: nullsystempker2,
            browserponies10urleditorskfalse: nullsystempker2,
            browserponies11urleditorskfalse: nullsystempker2,
            browserponies12urleditorskfalse: nullsystempker2,
            browserponies13urleditorskfalse: nullsystempker2,
            browserponies14urleditorskfalse: nullsystempker2,
            browserponies15urleditorskfalse: nullsystempker2,
            browserponies16urleditorskfalse: nullsystempker2,
            browserponies17urleditorskfalse: nullsystempker2,
            browserponies18urleditorskfalse: nullsystempker2,
            browserponies19urleditorskfalse: nullsystempker2,
            browserponies20urleditorskfalse: nullsystempker2,
            browserponies21urleditorskfalse: nullsystempker2,
            browserponies22urleditorskfalse: nullsystempker2,
            browserponies23urleditorskfalse: nullsystempker2,
            browserponies24urleditorskfalse: nullsystempker2,
            browserponies25urleditorskfalse: nullsystempker2,
            browserponies26urleditorskfalse: nullsystempker2,
            browserponies27urleditorskfalse: nullsystempker2,
            browserponies28urleditorskfalse: nullsystempker2,
            browserponies29urleditorskfalse: nullsystempker2,
            browserponies30urleditorskfalse: ""
        },


        function(items) {

            $('#laguageoptions').val(items.laguageoptions);
            $("[id='browserponies1t']").val(items.browserponies1t);
            $("[id='browserponies2t']").val(items.browserponies2t);
            $("[id='browserponies3t']").val(items.browserponies3t);
            $("[id='browserponies4']").val(items.browserponies4);
            $("[id='browserponies5']").val(items.browserponies5);
            $("[id='browserponies6']").val(items.browserponies6);
            $("[id='browserponies7']").val(items.browserponies7);
            $("[id='browserponies8']").val(items.browserponies8);
            $("[id='browserponies9']").val(items.browserponies9);
            $("[id='browserponies10']").val(items.browserponies10);
            $("[id='browserponies11']").val(items.browserponies11);
            $("[id='browserponies12']").val(items.browserponies12);
            $("[id='browserponies13']").val(items.browserponies13);
            $("[id='browserponies14']").val(items.browserponies14);
            $("[id='browserponies15']").val(items.browserponies15);
            $("[id='browserponies16']").val(items.browserponies16);
            $("[id='browserponies17']").val(items.browserponies17);
            $("[id='browserponies18']").val(items.browserponies18);
            $("[id='browserponies19']").val(items.browserponies19);
            $("[id='browserponies20']").val(items.browserponies20);
            $("[id='browserponies21']").val(items.browserponies21);
            $("[id='browserponies22']").val(items.browserponies22);
            $("[id='browserponies23']").val(items.browserponies23);
            $("[id='browserponies24']").val(items.browserponies24);
            $("[id='browserponies25']").val(items.browserponies25);
            $("[id='browserponies26']").val(items.browserponies26);
            $("[id='browserponies27']").val(items.browserponies27);
            $("[id='browserponies28']").val(items.browserponies28);
            $("[id='browserponies29']").val(items.browserponies29);
            $("[id='browserponies30']").val(items.browserponies30);

            $("[id='browserponies1tmycommand']").val(items.browserponies1tmycommand);
            $("[id='browserponies2tmycommand']").val(items.browserponies2tmycommand);
            $("[id='browserponies3tmycommand']").val(items.browserponies3tmycommand);
            $("[id='browserponies4mycommand']").val(items.browserponies4mycommand);
            $("[id='browserponies5mycommand']").val(items.browserponies5mycommand);
            $("[id='browserponies6mycommand']").val(items.browserponies6mycommand);
            $("[id='browserponies7mycommand']").val(items.browserponies7mycommand);
            $("[id='browserponies8mycommand']").val(items.browserponies8mycommand);
            $("[id='browserponies9mycommand']").val(items.browserponies9mycommand);
            $("[id='browserponies10mycommand']").val(items.browserponies10mycommand);
            $("[id='browserponies11mycommand']").val(items.browserponies11mycommand);
            $("[id='browserponies12mycommand']").val(items.browserponies12mycommand);
            $("[id='browserponies13mycommand']").val(items.browserponies13mycommand);
            $("[id='browserponies14mycommand']").val(items.browserponies14mycommand);
            $("[id='browserponies15mycommand']").val(items.browserponies15mycommand);
            $("[id='browserponies16mycommand']").val(items.browserponies16mycommand);
            $("[id='browserponies17mycommand']").val(items.browserponies17mycommand);
            $("[id='browserponies18mycommand']").val(items.browserponies18mycommand);
            $("[id='browserponies19mycommand']").val(items.browserponies19mycommand);
            $("[id='browserponies20mycommand']").val(items.browserponies20mycommand);
            $("[id='browserponies21mycommand']").val(items.browserponies21mycommand);
            $("[id='browserponies22mycommand']").val(items.browserponies22mycommand);
            $("[id='browserponies23mycommand']").val(items.browserponies23mycommand);
            $("[id='browserponies24mycommand']").val(items.browserponies24mycommand);
            $("[id='browserponies25mycommand']").val(items.browserponies25mycommand);
            $("[id='browserponies26mycommand']").val(items.browserponies26mycommand);
            $("[id='browserponies27mycommand']").val(items.browserponies27mycommand);
            $("[id='browserponies28mycommand']").val(items.browserponies28mycommand);
            $("[id='browserponies29mycommand']").val(items.browserponies29mycommand);
            $("[id='browserponies30mycommand']").val(items.browserponies30mycommand);

            ksremoveoptions();
            if (confirmmore == true) { finalresult(items); }

        });


}

$(document).ready(function() { restore_options(); })


$("#browserponies1t, #browserponies2t, #browserponies3t, #browserponies4, #browserponies5, #browserponies6, #browserponies7, #browserponies8, #browserponies9, #browserponies10, #browserponies11, #browserponies12, #browserponies13, #browserponies14, #browserponies15, #browserponies16, #browserponies17, #browserponies18, #browserponies19, #browserponies20, #browserponies21, #browserponies22, #browserponies23, #browserponies24, #browserponies25, #browserponies26, #browserponies27, #browserponies28, #browserponies29, #browserponies30").change(function() {
    var getidpkex12 = $(this).attr("id");
    if ($("#" + getidpkex12).val() == "nullts") { $("#" + getidpkex12).val("Nope");
        save_options(); } else { save_options(); }
})

function startmyresetopk(finalresulttrue, finalresult) {
    var nullsystempker = "nullts"
    var nullsystempker2 = "32nullka32"
    chrome.storage.sync.set({
            exdlenabled: true,
            browserponies1t: nullsystempker,
            browserponies2t: nullsystempker,
            browserponies3t: nullsystempker,
            browserponies4: nullsystempker,
            browserponies5: nullsystempker,
            browserponies6: nullsystempker,
            browserponies7: nullsystempker,
            browserponies8: nullsystempker,
            browserponies9: nullsystempker,
            browserponies10: nullsystempker,
            browserponies11: nullsystempker,
            browserponies12: nullsystempker,
            browserponies13: nullsystempker,
            browserponies14: nullsystempker,
            browserponies15: nullsystempker,
            browserponies16: nullsystempker,
            browserponies17: nullsystempker,
            browserponies18: nullsystempker,
            browserponies19: nullsystempker,
            browserponies20: nullsystempker,
            browserponies21: nullsystempker,
            browserponies22: nullsystempker,
            browserponies23: nullsystempker,
            browserponies24: nullsystempker,
            browserponies25: nullsystempker,
            browserponies26: nullsystempker,
            browserponies27: nullsystempker,
            browserponies28: nullsystempker,
            browserponies29: nullsystempker,
            browserponies30: "None",
            browserponies1tmycommand: nullsystempker,
            browserponies2tmycommand: nullsystempker,
            browserponies3tmycommand: nullsystempker,
            browserponies4mycommand: nullsystempker,
            browserponies5mycommand: nullsystempker,
            browserponies6mycommand: nullsystempker,
            browserponies7mycommand: nullsystempker,
            browserponies8mycommand: nullsystempker,
            browserponies9mycommand: nullsystempker,
            browserponies10mycommand: nullsystempker,
            browserponies11mycommand: nullsystempker,
            browserponies12mycommand: nullsystempker,
            browserponies13mycommand: nullsystempker,
            browserponies14mycommand: nullsystempker,
            browserponies15mycommand: nullsystempker,
            browserponies16mycommand: nullsystempker,
            browserponies17mycommand: nullsystempker,
            browserponies18mycommand: nullsystempker,
            browserponies19mycommand: nullsystempker,
            browserponies20mycommand: nullsystempker,
            browserponies21mycommand: nullsystempker,
            browserponies22mycommand: nullsystempker,
            browserponies23mycommand: nullsystempker,
            browserponies24mycommand: nullsystempker,
            browserponies25mycommand: nullsystempker,
            browserponies26mycommand: nullsystempker,
            browserponies27mycommand: nullsystempker,
            browserponies28mycommand: nullsystempker,
            browserponies29mycommand: nullsystempker,
            browserponies30mycommand: defaultmycommand,
            browserponies1turleditorsktrue: nullsystempker2,
            browserponies2turleditorsktrue: nullsystempker2,
            browserponies3turleditorsktrue: nullsystempker2,
            browserponies4urleditorsktrue: nullsystempker2,
            browserponies5urleditorsktrue: nullsystempker2,
            browserponies6urleditorsktrue: nullsystempker2,
            browserponies7urleditorsktrue: nullsystempker2,
            browserponies8urleditorsktrue: nullsystempker2,
            browserponies9urleditorsktrue: nullsystempker2,
            browserponies10urleditorsktrue: nullsystempker2,
            browserponies11urleditorsktrue: nullsystempker2,
            browserponies12urleditorsktrue: nullsystempker2,
            browserponies13urleditorsktrue: nullsystempker2,
            browserponies14urleditorsktrue: nullsystempker2,
            browserponies15urleditorsktrue: nullsystempker2,
            browserponies16urleditorsktrue: nullsystempker2,
            browserponies17urleditorsktrue: nullsystempker2,
            browserponies18urleditorsktrue: nullsystempker2,
            browserponies19urleditorsktrue: nullsystempker2,
            browserponies20urleditorsktrue: nullsystempker2,
            browserponies21urleditorsktrue: nullsystempker2,
            browserponies22urleditorsktrue: nullsystempker2,
            browserponies23urleditorsktrue: nullsystempker2,
            browserponies24urleditorsktrue: nullsystempker2,
            browserponies25urleditorsktrue: nullsystempker2,
            browserponies26urleditorsktrue: nullsystempker2,
            browserponies27urleditorsktrue: nullsystempker2,
            browserponies28urleditorsktrue: nullsystempker2,
            browserponies29urleditorsktrue: nullsystempker2,
            browserponies30urleditorsktrue: "",
            browserponies1turleditorskfalse: nullsystempker2,
            browserponies2turleditorskfalse: nullsystempker2,
            browserponies3turleditorskfalse: nullsystempker2,
            browserponies4urleditorskfalse: nullsystempker2,
            browserponies5urleditorskfalse: nullsystempker2,
            browserponies6urleditorskfalse: nullsystempker2,
            browserponies7urleditorskfalse: nullsystempker2,
            browserponies8urleditorskfalse: nullsystempker2,
            browserponies9urleditorskfalse: nullsystempker2,
            browserponies10urleditorskfalse: nullsystempker2,
            browserponies11urleditorskfalse: nullsystempker2,
            browserponies12urleditorskfalse: nullsystempker2,
            browserponies13urleditorskfalse: nullsystempker2,
            browserponies14urleditorskfalse: nullsystempker2,
            browserponies15urleditorskfalse: nullsystempker2,
            browserponies16urleditorskfalse: nullsystempker2,
            browserponies17urleditorskfalse: nullsystempker2,
            browserponies18urleditorskfalse: nullsystempker2,
            browserponies19urleditorskfalse: nullsystempker2,
            browserponies20urleditorskfalse: nullsystempker2,
            browserponies21urleditorskfalse: nullsystempker2,
            browserponies22urleditorskfalse: nullsystempker2,
            browserponies23urleditorskfalse: nullsystempker2,
            browserponies24urleditorskfalse: nullsystempker2,
            browserponies25urleditorskfalse: nullsystempker2,
            browserponies26urleditorskfalse: nullsystempker2,
            browserponies27urleditorskfalse: nullsystempker2,
            browserponies28urleditorskfalse: nullsystempker2,
            browserponies29urleditorskfalse: nullsystempker2,
            browserponies30urleditorskfalse: ""
        },

        function() { if (finalresulttrue == true) { finalresult(); } });
}

$("#resetlinks").click(function() {
    var defresetall = confirm(confirmalertsystem)
    if (defresetall == true) {
        startmyresetopk(true, function() { location.reload(); });
    }
})




function resetsystempker(finalresulttrue, finalresult) {
    var toRemove = [];

    function deletealllocal() {
        chrome.storage.local.get(function(Items) {
            $.each(Items, function(index, value) {

                toRemove.push(index);
            });




            chrome.storage.local.remove(toRemove, function(Items) {


                chrome.storage.local.get(function(Items) {
                    $.each(Items, function(index, value) {

                    });
                });

                if (finalresulttrue == true) { finalresult(); }

            });
        });
    }

    function deleteallsync() {
        chrome.storage.sync.get(function(Items) {
            $.each(Items, function(index, value) {

                toRemove.push(index);
            });




            chrome.storage.sync.remove(toRemove, function(Items) {


                chrome.storage.sync.get(function(Items) {
                    $.each(Items, function(index, value) {

                    });
                });

                deletealllocal();

            });
        });
    }

    deleteallsync();
}

$("#resetlinks2").click(function() {
    var defresetall = confirm(confirmalertsystem)
    if (defresetall == true) { resetsystempker(true, function() { location.reload(); }); }
});