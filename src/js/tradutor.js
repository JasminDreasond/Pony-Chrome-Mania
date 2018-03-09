//Tradução

var confirmalertsystem = ""
var addnewsystemnow = ""
var warnstartdatenow = ""
var warnponiescompleteld = ""

function languageset() {
    chrome.storage.sync.get(function(settings) {

        chrome.extension.sendMessage({ text: "updatelgsystem" }, function(reponse) { if (reponse.type == "updatelgsystemts") {} });

        if ((settings.laguageoptions == "portuguesebr") || (settings.laguageoptions == null)) {

            //Padrão

            confirmalertsystem = "Favor confirme sua ação:";
            addnewsystemnow = "Nome do Grupo:";
            warnstartdatenow = "Começar sistema de armazenamento?";
            warnponiescompleteld = "Completo!";
            document.title = "Pony Chrome Mania - Opções";

            $("#removeglobalponies30").val("Desfazer");

            $("#infobackup").text("Clicando em importar você irá enviar o código para dentro do sistema, e em exportar você irá receber o código. Evite de colocar códigos modificados para evitar corrupção do sistema!");
            $("#backupimport").val("Importar");
            $("#backupexport").val("Exportar");

            $("#baseurlappendhere").text("Converter - Criar Código");
            $("#ponycodeappendhere").text("Opções de Código - URL");

            $("#refreshsystem").attr("title", "Atualizar Arquivos");
            $("#infoautake1").text("Atualizador Automático");
            $("#infoautake2").text("OBS: Ative apenas com endereços confiaveis!");
            $("#infoautake3").text("Forçar Whitelist");

            $("#customcssstsk").text("CSS Personalizável:");
            $("#changelgponycode1").text("Código Pônei");
            $("#changelgbasefolder").text("Pasta Base:");
            $("#changelgponyini").text("Pônei (pony.ini):");
            $("#changelginteractions1").text("Interações (interactions.ini):");
            $("#changelgponylist").text("Lista de Pôneis:");
            $("#changelgponycode2").text("Código Pônei:");
            $("#changelginteractions2").text("Interações:");
            $("#changelgcustomcss").text("CSS Personalizável:");
            $("#changelgcustomlanguage").text("Idioma Personalizável:");
            $("#changelgrefreshwarn").text("Alerta de Refresh:");
            $("#changelgponypage").text("Lista do Pônei:");
            $("#configmodal").text("Configurações");

            $("#changelgfileponylist").text("Lista de Pôneis - Arquivo .txt");
            $("#changelgfileponycode").text("Código Pônei - Arquivo .txt");
            $("#changelgfileinteractions").text("Interações - Arquivo .txt");
            $("#changelgfilecssfile").text("CSS Personalizável - Arquivo .css");
            $("#changelgfiletemplatehtml").text("Template Lista de Pôneis - ARQUIVO");
            $("#changelgfiletemplatecss").text("Template CSS Personalizável - ARQUIVO");
            $("#changelgfiletemplatelanguage").text("Template Idioma Personalizável - ARQUIVO").attr("href", "/downloads/customlanguage (PT-BR).txt");

            $("#urlonponies").attr("placeholder", "http://vocêaqui.com.br/");
            $("#urloffponies").attr("placeholder", "http://vocêaqui1.com.br/, http://vocêaqui2.com.br/, http://vocêaqui3.com.br/");
            $("#ponylistconfig").attr("placeholder", "Insira um Pony Code");
            $("#baseconfig2").attr("placeholder", "Insira seus pôneis");
            $("#baseconfig1").attr("placeholder", "Insira suas interações");
            $("#customcss").attr("placeholder", "Insira um CSS");
            $("#customlanguage").attr("placeholder", "Insira um Idioma");

            $("#errorponycode").text("ERROR! Código inseguro ou inválido!");
            $("#ponyerrorss").text("Aquivo Inválido!");

            $("[for='enableaudio']").text("Ativar Áudio");
            $("#hasaudio").text("(Seu Navegador precisa suportar HTML 5 Audio.)");
            $("[for='showfps']").text("Mostrar Frames por Segundo");
            $("[for='progressbar']").text("Mostrar Barra de Carregamento");
            $("[for='dontspeak']").text("Nunca Falar");
            $("[for='interactionsenabled']").text("Ativar arquivo interactions.ini");
            $("#browserponies30globalek").attr("title", "Ativar Global");

            $("#loadinglg").text("Carregando");
            $("#testcolors").val("Exemplo da Barra de Progresso");

            $("[for='base']").text("Base URL:");
            $("[for='speed']").text("Multiplicador de Velocidade:");
            $("[for='speak']").text("Probabilidade de Fala:");
            $("[for='volume']").text("Volume:");
            $("[for='fps']").text("Frames por Segundo:");
            $("[for='fade']").text("Duração do Fade:");
            $("[for='progressbarcolor']").text("Cor da Barra de Progresso:");
            $("[for='fixedurl']").text("URL Fixo").attr("title", "Beta (Em breve)");
            $("label[for='_count']").text("Contagem: ");
            $("#restartcolors").val("Cor Padrão");

            $("#customlgnamecolorb").text("Hex Color - Cor B:");
            $("#customlgnamecolorp").text("Hex Color - Cor P:");
            $("#customlgnamecolork").text("Hex Color - Cor K:");
            $("#customlgnamecolorc").text("Hex Color - Cor C:");

            $("#aviso1").text("Selecione um grupo para editar seus pôneis.");
            $("#aviso2").text("Sua lista de Grupos:");
            $("#openpnpage").text("Fábrica de Pôneis");
            $("#openpnpageoc").text("Fábrica de OCs");
            $("#deviantart").text("Deviantart");
            $("#tumblr").text("Tumblr");
            $("#openmyprivacy").text("Política de Privacidade");

            $("#resetlinks").val("Limpar");
            $("#updateconfig").val("Atualizar");
            $("#addconfig").val("Adicionar");
            $("#opendonate").val("Doar");
            $("[name='backupmsg']").val("Backup");
            $("[name='backupmsg2']").text("Backup");
            $("#resetlinks2").val("Resetar");

            $("#thanksfordonate").text("Obrigado pela sua Doação!");
            $(".pagseguro").removeClass("antipagseguro");
            $("#donatepage").removeClass("donatepagep2");

            $("#taglistname").text("Lista de Etiquetas");
            $("#baselistname").text("Lista de URLs registradas");
            $("[value='Remove']").val("Remover");
            $("[value='Open URL']").val("Abrir URL");
            $("[name='optionspage']").text("Página de Opções");
            $("[name='filecenterpage'] div").text("Central de Arquivo");
            $("#saveponies").val("Salvar Pôneis");
            $("#wariningnothing").text("AVISO: Por Favor selecione um grupo!");
            $("#searchtext").text("Procurar:");
            $("#searchopenlist").text("{Lista de Etiquetas}");
            $("[id='getbaseurl']").text("{Base URL}");
            $("[value='ponycategory']").text("Categoria");
            $("#resetallponies").val("Setar todos os pôneis para 0");
            $("[name='confirmbaseconfigs']").text("Confirmar");
            $("[name='helpbaseconfigs']").val("Ajuda");
            $("[name='helpbaseconfigs2']").text("Ajuda");
            $("#customcssstskconfirm").text("Converter CSS");
            $("[name='cancelbaseconfigs']").text("Cancelar");
            $("[name='closebaseconfigs']").text("Fechar");
            $("[value='ponyname']").text("Nome");
            $("#logo").addClass("logobr");

            $("[id='helpponies']").attr("src", "images/Pony Codes(BR).png").attr("href", "images/Pony Codes(BR).png");
            $("[id='helpInteractions']").attr("src", "images/Interactions(BR).png").attr("href", "images/Interactions(BR).png");
            $("#englishtranslation").addClass("hideenglishcr");














            //panzi.github.io

            if ($(location).attr('href').indexOf('https://jasmindreasond.github.io/Browser-Ponies/') > -1) {

                $("#hasaudio").text("(Seu Navegador suporta HTML 5 Audio.)");
                $("#noaudio").text("(Seu Navegador não suporta HTML 5 Audio.)");
                $("[for='iframe-width']").text("Largura:");
                $("[for='iframe-height']").text("Altura:");
                $("h3:contains(Change settings and choose your ponies)").text("Trocar configurações e escolher seus pôneis");
                $("[for='addcat']").text("Categoria de Filtros");
                $("[for='paddock']").text("Mostrar Paddock");
                $("[for='grass']").text("Mostrar Grama");
                $("[onclick='setAllZero();']").text("Setar todos os pôneis para 0");
                $("[onclick='setAllZero();']").text("Setar todos os pôneis para 0");
                $("p:contains(Choose your ponies belown and then drag this link into your Bookmark Toolbar:)").text("Escolha seus pôneis abaixo e depois puxe este link para dentro da sua barra de Favoritos:");
                $("#bookmarklet").text("Pôneis!");
                $("p:contains(Click it whenever you feel a website needs more ponies.)").text("Clicle quando você sentir que um site precisa de mais pôneis.");
                $("p:contains(Or paste this into your webpage:)").text("Ou cole isso em seu website:");
                $("[for='iframe']").text("Ou você pode incluir meu script diretamente em sua página da web usando este embed code para confinar os pôneis dentro de uma Iframe:");
                $("#openadvanceduser").text("Material para Usuário Avançado").attr("title", "Clique Aqui");



                $("h3:contains(Using your own ponies)").text("Usando seus própios pôneis");
                $("h4:contains(Your Ponies)").text("Seus Pôneis:");
                $("h4:contains(Your Interacions)").text("Suas interações:");
                $("p:contains(If you want to use your own ponies you can convert the INI files to JavaScript using)").text("Se você quiser usar seus próprios pôneis você pode converter os arquivos INI para JavaScript usando as ferramentas abaixo. Basta carregar os arquivos INI, corrigir os nomes de arquivos / URLs, se necessário e gerar o JavaScript. O script pônei resultante irá usar as configurações a partir de cima, exceto para os quais pônei é carregado.");
                $("p:contains(This currently only works with Firefox and Chrome)").empty().append($("<p>").text("Isto só funciona com Firefox e Chrome. Opera atualmente não suporta arquivos que estão sendo descartados (então clique para usar o arquivo de diálogo aberto) e Internet Explorer atualmente não pode ler arquivos tudo em JavaScript (provavelmente na versão 10 será capaz de fazer isso).").prepend($("<strong>").text("Nota: ")));

                $("p:contains(As a next step you may need to adapt the URLs of the images and sounds to where they)").text("Como próximo passo pode ser necessário adaptar as URLs das imagens e sons para onde eles realmente estão hospedados. Se eles estão hospedados em algum servidor web com os arquivos de cada pônei em um diretório distinta separada você só precisa mudar a URL base para a localização da referida diretório. Não se esqueça do / (barra) no final da URL base e, por favor, note que a web é sensível à letras maiúsculas. Isto significa que os nomes de arquivos como eles estão no servidor tem que exatamente os definidos aqui.");
                $("p:contains(If the files are all at some more or less random location)").text("Se os arquivos estão todos em algum local mais ou menos aleatório, você precisa adaptar todas as URLs individualmente. Neste caso, basta digitar uma URL absoluta nos domínios de URL de cada arquivo. Se a URL de um arquivo é absoluto a URL base será ignorado.");
                $("p:contains(As a third option you can also embed the files directly in the generated script)").text("Como terceira opção, você também pode incorporar os arquivos diretamente no script gerado. Note que este codifica os arquivos inteiros em URLs de dados, o que pode fazer com que o script gerado para ser muito maior do que o tamanho soma de todos os arquivos. Também Internet Explorer não suporta URLs do comprimento de 2048 caracteres de dados, e os sprites de pônei são geralmente uma ordem de magnitude maior do que isso.");
                $("p:contains(Then put the contents of the text area above into a file called e.g)").text('Em seguida, coloque o conteúdo da área de texto acima em um arquivo chamado, por exemplo, "Your-ponies.js" e hospede ele em algum lugar na web. Então você pode incorporar seus pôneis no seu site, adicionando este código em algum lugar no código HTML de seu web site (eu recomendo algum lugar entre <head> e </ head>):');
                $("p:contains(Of course you need to replace http://example.org/your-ponies.js)").text("Claro que você precisa para substituir http://example.org/your-ponies.js com o URL onde você realmente hospedar o arquivo.");
                $("p:contains(If you want to you can also copy the browserponies.js)").text("Se você quiser, você também pode copiar o arquivo browserponies.js e servir-lo sozinho. Este servidor aqui não tem o melhor tempo de atividade para que você pode querer fazer isso.");
                $("p:contains(If you'd like you can download a bookmarks file)").text("Se você preferir, pode baixar um arquivo de bookmarks/marcadores com links para adicionar um certo ponei e os controles do topo desta pagina. Apenas clique com o botão direito em salvar este link e importe o arquivo resultante para seu navegador (Testado apenas no Chrome e Firefox):");
                $("#openlicenceuser").text("License").attr("title", "Clique Aqui");





                $("p:contains(In Internet Explorer I managed to control GIF animation playback using iframes)").text("No Intenert Explorer eu consegui controlar a reprodução da animação GIF usando iFrames, mas você não pode fazer eles transparentes ou sem borda. No Google Chrome, iFrames não sofrerão desta limitação.");
                $("p:contains(In addition to that it defines these style rules:)").text("Além de que define estas regras de estilo:");
                $("p:contains(For instance, this webpage defines the toggleBrowserPoniesToBackground function like so)").text("Por exemplo, a página define a função toggleBrowserPoniesToBackground assim:");
                $("p:contains(In order to support the Toggle ponies in background )").text("Em ordem de surportar a função de  Alternação de Poneis no Fundo, websites precisam definir uma função especial chamada toggleBrowserPoniesToBackground. Essa função muda o z-index de tudo que deveria aparecer na frente dos poneis. Os poneis tem um z-index de 9000000 + distância do topo da borda da janela até inferior do pônei. Os balões de fala tem um z-index de 9009000 (Eu presumo que nenhum tenha uma tela maior que 9000 pixels.)");
                $("h3:contains(Toggle ponies in background)").text("Alternar Pôneis no Fundo");
                $("p:contains(Firefox has a bug concerning the animation speed of animated GIFs)").text("Firefox tem um bug a respeito da velocidade de animação dos GIFs animados ( Eu tentei trabalhar em volta disso através da diminuição de todos as durações de efeitos quando usando o Firefox). Também não encontrei nenhuma forma de controlar a reprodução da animação de imagens individuais no Firefox, que as vezes causa erros de animação (Quando um efeito é mostrado duas vezes ambas as animações de efeito são sincronizados).");
                $("h3:contains(Browser Support)").text("Suporte de Site");

            }

        }



















        //English
        else if (settings.laguageoptions == "english") {

            confirmalertsystem = "Please confirm your action:";
            addnewsystemnow = "Group Name:";
            warnstartdatenow = "Start Date?";
            warnponiescompleteld = "Complete!";
            document.title = "Pony Chrome Mania - Options";

            $("#removeglobalponies30").val("Undo");

            $("#infobackup").text("Click in export to you send a code to the Text Area, or in import to you send code to the system. Please, not send modified code!");
            $("#backupimport").val("Import");
            $("#backupexport").val("Export");

            $("#baseurlappendhere").text("Convert - Create Code");
            $("#ponycodeappendhere").text("Code Options - URL");

            $("#refreshsystem").attr("title", "File Update");
            $("#infoautake1").text("Auto Update");
            $("#infoautake2").text("WARN: Enable only with reliable url!");
            $("#infoautake3").text("Force Whitelist");

            $("#customcssstsk").text("Custom CSS:");
            $("#changelgponycode1").text("Pony Code");
            $("#changelgbasefolder").text("Base Folder:");
            $("#changelgponyini").text("Pony (pony.ini):");
            $("#changelginteractions1").text("Interactions (interactions.ini):");
            $("#changelgponylist").text("Pony List:");
            $("#changelgponycode2").text("Pony Code:");
            $("#changelginteractions2").text("Interactions:");
            $("#changelgcustomcss").text("Custom CSS:");
            $("#changelgcustomlanguage").text("Custom Language:");
            $("#changelgrefreshwarn").text("Refresh Warn:");
            $("#changelgponypage").text("Pony List:");
            $("#configmodal").text("Settings");


            $("#changelgfileponylist").text("Pony List - File .txt");
            $("#changelgfileponycode").text("Pony Code - File .txt");
            $("#changelgfileinteractions").text("Interactions - File .txt");
            $("#changelgfilecssfile").text("Custom CSS - File .css");
            $("#changelgfiletemplatehtml").text("Template Pony List - FILE");
            $("#changelgfiletemplatecss").text("Template Custom CSS - FILE");
            $("#changelgfiletemplatelanguage").text("Template Custom Language - FILE").attr("href", "/downloads/customlanguage (EN).txt");

            $("#urlonponies").attr("placeholder", "http://youhere.com/");
            $("#urloffponies").attr("placeholder", "http://youhere1.com/, http://youhere2.com/, http://youhere3.com/");
            $("#ponylistconfig").attr("placeholder", "Insert a Pony Code");
            $("#baseconfig2").attr("placeholder", "Insert your ponies");
            $("#baseconfig1").attr("placeholder", "Insert your interactions");
            $("#customcss").attr("placeholder", "Insert a CSS");
            $("#customlanguage").attr("placeholder", "Insert a Language");

            $("#errorponycode").text("ERROR! Insecure code or invalid!");
            $("#ponyerrorss").text("Invalid File!");

            $("[for='enableaudio']").text("Enable Audio");
            $("#hasaudio").text("(Your browser need supports HTML 5 Audio.)");
            $("[for='showfps']").text("Show Frames per Second");
            $("[for='progressbar']").text("Show Progress Bar");
            $("[for='dontspeak']").text("Never Speak");
            $("[for='interactionsenabled']").text("Enable interactions.ini file");
            $("#browserponies30globalek").attr("title", "Enable Global");

            $("#loadinglg").text("Loading");
            $("#testcolors").val("Example Progress Bar");

            $("[for='base']").text("Base URL:");
            $("[for='speed']").text("Speed Multiplier:");
            $("[for='speak']").text("Random Speak Probability:");
            $("[for='volume']").text("Volume:");
            $("[for='fps']").text("Frames per Second:");
            $("[for='fade']").text("Fade Duration:");
            $("[for='progressbarcolor']").text("Progress Bar Color:");
            $("[for='fixedurl']").text("Fixed URL").attr("title", "Beta (Coming Soon)");
            $("label[for='_count']").text("Count: ");
            $("#restartcolors").val("Default Color");

            $("#customlgnamecolorb").text("Hex Color - B:");
            $("#customlgnamecolorp").text("Hex Color - P:");
            $("#customlgnamecolork").text("Hex Color - K:");
            $("#customlgnamecolorc").text("Hex Color - C:");

            $("#aviso1").text("Select a group to edit yours ponies.");
            $("#aviso2").text("Your list of groups:");
            $("#openpnpage").text("Ponies Factory");
            $("#openpnpageoc").text("OCs Factory");
            $("#deviantart").text("Deviantart");
            $("#tumblr").text("Tumblr");
            $("#openmyprivacy").text("Privacy Policy");

            $("#resetlinks").val("Clean");
            $("#updateconfig").val("Update");
            $("#addconfig").val("Add");
            $("#opendonate").val("Donate");
            $("[name='backupmsg']").val("Backup");
            $("[name='backupmsg2']").text("Backup");
            $("#resetlinks2").val("Reset");

            $("#thanksfordonate").text("Thanks for your Donation!");
            $(".pagseguro").addClass("antipagseguro");
            $("#donatepage").addClass("donatepagep2");

            $("#taglistname").text("Tag List");
            $("#baselistname").text("Registered Urls List");
            $("[value='Remover']").val("Remove");
            $("[value='Abrir URL']").val("Open URL");
            $("[name='optionspage']").text("Options Page");
            $("[name='filecenterpage'] div").text("File Center");
            $("#saveponies").val("Save Ponies");
            $("#wariningnothing").text("WARNING: Please select an group!");
            $("#searchtext").text("Search:");
            $("#searchopenlist").text("{Tag List}");
            $("[id='getbaseurl']").text("{Base URL}");
            $("[value='ponycategory']").text("Category");
            $("#resetallponies").val("Set all Ponies to 0");
            $("[name='confirmbaseconfigs']").text("Confirm");
            $("[name='helpbaseconfigs']").val("Help");
            $("[name='helpbaseconfigs2']").text("Help");
            $("#customcssstskconfirm").text("Convert CSS");
            $("[name='cancelbaseconfigs']").text("Cancel");
            $("[name='closebaseconfigs']").text("Close");
            $("[value='ponyname']").text("Name");
            $("#logo").removeClass("logobr");

            $("[id='helpponies']").attr("src", "images/Pony Codes.png").attr("href", "images/Pony Codes.png");
            $("[id='helpInteractions']").attr("src", "images/Interactions.png").attr("href", "images/Interactions.png");
            $("#englishtranslation").removeClass("hideenglishcr");

            $("#openadvanceduser").text("Advanced User Stuff")

        }







        //Custom Language

        if ((specialpagesource == true) || (customlanguagest == "") || (customlanguagest == null)) {} else {

            if (typeof customlanguagest.titlepage !== "undefined") { document.title = "PC.M - " + customlanguagest.titlepage + ""; }

            if (typeof customlanguagest.confirmalertsystem !== "undefined") { confirmalertsystem = customlanguagest.confirmalertsystem; }
            if (typeof customlanguagest.addnewsystemnow !== "undefined") { addnewsystemnow = customlanguagest.addnewsystemnow; }
            if (typeof customlanguagest.warnstartdatenow !== "undefined") { warnstartdatenow = customlanguagest.warnstartdatenow; }
            if (typeof customlanguagest.warnponiescompleteld !== "undefined") { warnponiescompleteld = customlanguagest.warnponiescompleteld; }

            if (typeof customlanguagest.removeglobalponies30 !== "undefined") { $("#removeglobalponies30").val(customlanguagest.removeglobalponies30); }

            if (typeof customlanguagest.infobackup !== "undefined") { $("#infobackup").text(customlanguagest.infobackup); }
            if (typeof customlanguagest.backupimport !== "undefined") { $("#backupimport").val(customlanguagest.backupimport); }
            if (typeof customlanguagest.backupexport !== "undefined") { $("#backupexport").val(customlanguagest.backupexport); }

            if (typeof customlanguagest.baseurlappendhere !== "undefined") { $("#baseurlappendhere").text(customlanguagest.baseurlappendhere); }
            if (typeof customlanguagest.ponycodeappendhere !== "undefined") { $("#ponycodeappendhere").text(customlanguagest.ponycodeappendhere); }

            if (typeof customlanguagest.refreshsystem !== "undefined") { $("#refreshsystem").attr("title", customlanguagest.refreshsystem); }
            if (typeof customlanguagest.infoautake1 !== "undefined") { $("#infoautake1").text(customlanguagest.infoautake1); }
            if (typeof customlanguagest.infoautake2 !== "undefined") { $("#infoautake2").text(customlanguagest.infoautake2); }
            if (typeof customlanguagest.infoautake3 !== "undefined") { $("#infoautake3").text(customlanguagest.infoautake3); }

            if (typeof customlanguagest.customcssstsk !== "undefined") { $("#customcssstsk").text(customlanguagest.customcssstsk); }
            if (typeof customlanguagest.changelgponycode1 !== "undefined") { $("#changelgponycode1").text(customlanguagest.changelgponycode1); }
            if (typeof customlanguagest.changelgbasefolder !== "undefined") { $("#changelgbasefolder").text(customlanguagest.changelgbasefolder); }
            if (typeof customlanguagest.changelgponyini !== "undefined") { $("#changelgponyini").text(customlanguagest.changelgponyini); }
            if (typeof customlanguagest.changelginteractions1 !== "undefined") { $("#changelginteractions1").text(customlanguagest.changelginteractions1); }
            if (typeof customlanguagest.changelgponylist !== "undefined") { $("#changelgponylist").text(customlanguagest.changelgponylist); }
            if (typeof customlanguagest.changelgponycode2 !== "undefined") { $("#changelgponycode2").text(customlanguagest.changelgponycode2); }
            if (typeof customlanguagest.changelginteractions2 !== "undefined") { $("#changelginteractions2").text(customlanguagest.changelginteractions2); }
            if (typeof customlanguagest.changelgcustomcss !== "undefined") { $("#changelgcustomcss").text(customlanguagest.changelgcustomcss); }
            if (typeof customlanguagest.changelgcustomlanguage !== "undefined") { $("#changelgcustomlanguage").text(customlanguagest.changelgcustomlanguage); }
            if (typeof customlanguagest.changelgrefreshwarn !== "undefined") { $("#changelgrefreshwarn").text(customlanguagest.changelgrefreshwarn); }
            if (typeof customlanguagest.changelgponypage !== "undefined") { $("#changelgponypage").text(customlanguagest.changelgponypage); }
            if (typeof customlanguagest.configmodal !== "undefined") { $("#configmodal").text(customlanguagest.configmodal); }

            if (typeof customlanguagest.changelgfileponylist !== "undefined") { $("#changelgfileponylist").text(customlanguagest.changelgfileponylist); }
            if (typeof customlanguagest.changelgfileponycode !== "undefined") { $("#changelgfileponycode").text(customlanguagest.changelgfileponycode); }
            if (typeof customlanguagest.changelgfileinteractions !== "undefined") { $("#changelgfileinteractions").text(customlanguagest.changelgfileinteractions); }
            if (typeof customlanguagest.changelgfilecssfile !== "undefined") { $("#changelgfilecssfile").text(customlanguagest.changelgfilecssfile); }
            if (typeof customlanguagest.changelgfiletemplatehtml !== "undefined") { $("#changelgfiletemplatehtml").text(customlanguagest.changelgfiletemplatehtml); }
            if (typeof customlanguagest.changelgfiletemplatecss !== "undefined") { $("#changelgfiletemplatecss").text(customlanguagest.changelgfiletemplatecss); }
            if (typeof customlanguagest.changelgfiletemplatelanguage !== "undefined") { $("#changelgfiletemplatelanguage").text(customlanguagest.changelgfiletemplatelanguage); }

            if (typeof customlanguagest.urlonponies !== "undefined") { $("#urlonponies").attr("placeholder", customlanguagest.urlonponies); }
            if (typeof customlanguagest.urloffponies !== "undefined") { $("#urloffponies").attr("placeholder", customlanguagest.urloffponies); }
            if (typeof customlanguagest.ponylistconfig !== "undefined") { $("#ponylistconfig").attr("placeholder", customlanguagest.ponylistconfig); }
            if (typeof customlanguagest.baseconfig2 !== "undefined") { $("#baseconfig2").attr("placeholder", customlanguagest.baseconfig2); }
            if (typeof customlanguagest.baseconfig1 !== "undefined") { $("#baseconfig1").attr("placeholder", customlanguagest.baseconfig1); }
            if (typeof customlanguagest.customcss !== "undefined") { $("#customcss").attr("placeholder", customlanguagest.customcss); }
            if (typeof customlanguagest.customlanguage !== "undefined") { $("#customlanguage").attr("placeholder", customlanguagest.customlanguage); }

            if (typeof customlanguagest.errorponycode !== "undefined") { $("#errorponycode").text(customlanguagest.errorponycode); }
            if (typeof customlanguagest.ponyerrorss !== "undefined") { $("#ponyerrorss").text(customlanguagest.ponyerrorss); }

            if (typeof customlanguagest.enableaudio !== "undefined") { $("[for='enableaudio']").text(customlanguagest.enableaudio); }
            if (typeof customlanguagest.hasaudio !== "undefined") { $("#hasaudio").text(customlanguagest.hasaudio); }
            if (typeof customlanguagest.showfps !== "undefined") { $("[for='showfps']").text(customlanguagest.showfps); }
            if (typeof customlanguagest.progressbar !== "undefined") { $("[for='progressbar']").text(customlanguagest.progressbar); }
            if (typeof customlanguagest.dontspeak !== "undefined") { $("[for='dontspeak']").text(customlanguagest.dontspeak); }
            if (typeof customlanguagest.interactionsenabled !== "undefined") { $("[for='interactionsenabled']").text(customlanguagest.interactionsenabled); }
            if (typeof customlanguagest.browserponies30globalek !== "undefined") { $("#browserponies30globalek").attr("title", customlanguagest.browserponies30globalek); }

            if (typeof customlanguagest.testcolors !== "undefined") { $("#testcolors").val(customlanguagest.testcolors); }

            if (typeof customlanguagest.base !== "undefined") { $("[for='base']").text(customlanguagest.base); }
            if (typeof customlanguagest.speed !== "undefined") { $("[for='speed']").text(customlanguagest.speed); }
            if (typeof customlanguagest.speak !== "undefined") { $("[for='speak']").text(customlanguagest.speak); }
            if (typeof customlanguagest.volume !== "undefined") { $("[for='volume']").text(customlanguagest.volume); }
            if (typeof customlanguagest.fps !== "undefined") { $("[for='fps']").text(customlanguagest.fps); }
            if (typeof customlanguagest.fade !== "undefined") { $("[for='fade']").text(customlanguagest.fade); }
            if (typeof customlanguagest.progressbarcolor !== "undefined") { $("[for='progressbarcolor']").text(customlanguagest.progressbarcolor); }
            if (typeof customlanguagest.count !== "undefined") { $("label[for='_count']").text(customlanguagest.count); }
            if (typeof customlanguagest.restartcolors !== "undefined") { $("#restartcolors").val(customlanguagest.restartcolors); }

            if (typeof customlanguagest.customlgnamecolorb !== "undefined") { $("#customlgnamecolorb").text(customlanguagest.customlgnamecolorb); }
            if (typeof customlanguagest.customlgnamecolorp !== "undefined") { $("#customlgnamecolorp").text(customlanguagest.customlgnamecolorp); }
            if (typeof customlanguagest.customlgnamecolork !== "undefined") { $("#customlgnamecolork").text(customlanguagest.customlgnamecolork); }
            if (typeof customlanguagest.customlgnamecolorc !== "undefined") { $("#customlgnamecolorc").text(customlanguagest.customlgnamecolorc); }

            if (typeof customlanguagest.aviso1 !== "undefined") { $("#aviso1").text(customlanguagest.aviso1); }
            if (typeof customlanguagest.aviso2 !== "undefined") { $("#aviso2").text(customlanguagest.aviso2); }
            if (typeof customlanguagest.openpnpage !== "undefined") { $("#openpnpage").text(customlanguagest.openpnpage); }
            if (typeof customlanguagest.openpnpageoc !== "undefined") { $("#openpnpageoc").text(customlanguagest.openpnpageoc); }
            if (typeof customlanguagest.deviantart !== "undefined") { $("#deviantart").text(customlanguagest.deviantart); }
            if (typeof customlanguagest.tumblr !== "undefined") { $("#tumblr").text(customlanguagest.tumblr); }
            if (typeof customlanguagest.openmyprivacy !== "undefined") { $("#openmyprivacy").text(customlanguagest.openmyprivacy); }

            if (typeof customlanguagest.resetlinks !== "undefined") { $("#resetlinks").val(customlanguagest.resetlinks); }
            if (typeof customlanguagest.updateconfig !== "undefined") { $("#updateconfig").val(customlanguagest.updateconfig); }
            if (typeof customlanguagest.addconfig !== "undefined") { $("#addconfig").val(customlanguagest.addconfig); }
            if (typeof customlanguagest.opendonate !== "undefined") { $("#opendonate").val(customlanguagest.opendonate); }
            if (typeof customlanguagest.openbackup !== "undefined") { $("[name='backupmsg']").val(customlanguagest.openbackup); }
            if (typeof customlanguagest.openbackup !== "undefined") { $("[name='backupmsg2']").text(customlanguagest.openbackup); }
            if (typeof customlanguagest.resetlinks2 !== "undefined") { $("#resetlinks2").val(customlanguagest.resetlinks2); }

            if (typeof customlanguagest.thanksfordonate !== "undefined") { $("#thanksfordonate").text(customlanguagest.thanksfordonate); }

            if (typeof customlanguagest.taglistname !== "undefined") { $("#taglistname").text(customlanguagest.taglistname); }
            if (typeof customlanguagest.baselistname !== "undefined") { $("#baselistname").text(customlanguagest.baselistname); }
            if (typeof customlanguagest.remover !== "undefined") { $("[value='Remover']").val(customlanguagest.remover); }
            if (typeof customlanguagest.openurl !== "undefined") { $("[value='Abrir URL']").val(customlanguagest.openurl); }
            if (typeof customlanguagest.optionspage !== "undefined") { $("[name='optionspage']").text(customlanguagest.optionspage); }
            if (typeof customlanguagest.filecenterpage !== "undefined") { $("[name='filecenterpage'] div").text(customlanguagest.filecenterpage); }
            if (typeof customlanguagest.saveponies !== "undefined") { $("#saveponies").val(customlanguagest.saveponies); }
            if (typeof customlanguagest.wariningnothing !== "undefined") { $("#wariningnothing").text(customlanguagest.wariningnothing); }
            if (typeof customlanguagest.searchtext !== "undefined") { $("#searchtext").text(customlanguagest.searchtext); }
            if (typeof customlanguagest.searchopenlist !== "undefined") { $("#searchopenlist").text(customlanguagest.searchopenlist); }
            if (typeof customlanguagest.getbaseurl !== "undefined") { $("[id='getbaseurl']").text(customlanguagest.getbaseurl); }
            if (typeof customlanguagest.ponycategory !== "undefined") { $("[value='ponycategory']").text(customlanguagest.ponycategory); }
            if (typeof customlanguagest.resetallponies !== "undefined") { $("#resetallponies").val(customlanguagest.resetallponies); }
            if (typeof customlanguagest.confirmbaseconfigs !== "undefined") { $("[name='confirmbaseconfigs']").text(customlanguagest.confirmbaseconfigs); }
            if (typeof customlanguagest.helpbaseconfigs !== "undefined") { $("[name='helpbaseconfigs']").val(customlanguagest.helpbaseconfigs); }
            if (typeof customlanguagest.helpbaseconfigs !== "undefined") { $("[name='helpbaseconfigs2']").val(customlanguagest.helpbaseconfigs); }
            if (typeof customlanguagest.helpbaseconfigs !== "undefined") { $("#customcssstskconfirm").text(customlanguagest.customcssstskconfirm); }
            if (typeof customlanguagest.cancelbaseconfigs !== "undefined") { $("[name='cancelbaseconfigs']").text(customlanguagest.cancelbaseconfigs); }
            if (typeof customlanguagest.closebaseconfigs !== "undefined") { $("[name='closebaseconfigs']").text(customlanguagest.closebaseconfigs); }
            if (typeof customlanguagest.ponyname !== "undefined") { $("[value='ponyname']").text(customlanguagest.ponyname); }

            if (typeof customlanguagest.copyright !== "undefined") { $("#extracopyright").text(customlanguagest.copyright); }
            if (typeof customlanguagest.translationcopyright !== "undefined") {
                $("#extracopyright2").text(customlanguagest.translationcopyright);
                $("#englishtranslation").addClass("hideenglishcr");
            }

        }










    })
}

function languageaction() {
    var languageke = document.getElementById("laguageoptions").value;

    if (languageke == "portuguesebr") {
        chrome.storage.sync.set({ laguageoptions: languageke })
    } else if (languageke == "english") {
        chrome.storage.sync.set({ laguageoptions: languageke })
    }

    languageset();

}

if ($(location).attr('href').indexOf('https://jasmindreasond.github.io/Browser-Ponies/') > -1) {} else { $("#laguageoptions").change(function() { languageaction(); }); }

if ($(location).attr('href') == 'https://jasmindreasond.github.io/Browser-Ponies/') {} else { languageset(); }