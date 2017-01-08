function ControllerText() {
    this.getData = function(id) {
        var view = new viewText("demo");
        var model = new ModelText("")
        var data = model.getData();
        view.updateTxt(data);

        //CSS
        var css = new StypeTxt(view.getDoc());
        css.setBackgroundColor("lightblue");
        css.setColor("red");
    };
}


function start() {


    var myscroll = new mouseScroll("ID_View_Div_Logger_001");
    var myview = new viewTextOutput("ID_View_Txt_Logger_001");
    var mymodel = new ModelText("/api");

    var myresults = new viewTextOutput("ID_View_Txt_Search_001");
    var searchview = new viewTextInput("ID_Configuration_TXT_Search_001")

    var myinfo = new Info();
    var mydiv1 = new StypeTxt("ID_View_Div_Logger_001");
    var mydiv3 = new StypeTxt("ID_View_Div_Search_001");
    mydiv1.setHight((myinfo.getHeighOfScreen() * 0.70));
    mydiv3.setHight((myinfo.getHeighOfScreen() * 0.15));

    var buton1 = new registerEvent("ID_Controller_BT_Start_001");
    buton1.ClickMouse(clickButtonStart);


    var buton2 = new registerEvent("ID_Controller_BT_Stop_001");
    buton2.ClickMouse(clickButtonStop);


    var buton3 = new registerEvent("ID_Controller_BT_Save_001");
    buton3.ClickMouse(clickButtonSave);

    var buton4 = new registerEvent("ID_Controller_BT_Clear_001");
    buton4.ClickMouse(clickButtonClear);


    var buton5 = new registerEvent("ID_Configuration_BT_Search_001");
    buton5.ClickMouse(clickButtonSearch);


    var div1 = new registerEvent("ID_View_Div_Logger_001");
    div1.mouseOver(CallMouseMove);
    div1.mouseOut(CallMouseOut)


    var buffer = "";
    var flag = 1;
    var num = 0;
    setInterval(myTimer, 2);
    setInterval(refreshUI, 100);

    function refreshUI() {
        if (flag == 0) {
            myscroll.setscrollTop(num);
        }

        myview.appendTxt(buffer);
        buffer ="";
    }

    function myTimer() {
        if (flag != 0) {
            return;
        }

        buffer += mymodel.httpRequest(num);
        num = num + 1;
    }

    function clickButtonStart() {
        flag = 0;
    }

    function clickButtonStop() {
        flag = 1;
    }

    function clickButtonClear() {
        myview.clearTxt();
        txt = "";
        num = 0;
    }


    function clickButtonSearch() {
        var key = searchview.getTxt();
        var string =  myview.getTxt();

        if (string == "" || key == "") {
            myresults.updateTxt("Not Found");
            return;
        }

        myresults.updateTxt("search ....\n");

       
        var array = string.split("\n");
        var result = "";

        for (i = 0; i < array.length; i++) {
            if (array[i].toUpperCase().indexOf(key.toUpperCase()) >= 0) {
                result = result + array[i] + "\n";
            }
        }

        if(result == ""){
        	result = "Not Found:" +  key;
        }
        myresults.updateTxt(result);
        
    }

    function handleKeyPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            clickButtonSearch();
        }
    }


    function clickButtonSave() {
        var text =  myview.getTxt();
        num = 0;

        var d = new Date();
        var filename = d.toLocaleTimeString() + "-" + d.toLocaleDateString() + "-Logger"
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, filename + ".txt");
    }


    function CallMouseMove() {
        myscroll.stopScroll();
    }

    function CallMouseOut() {
        myscroll.startScroll();
    }
}