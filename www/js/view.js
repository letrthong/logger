

function  viewText(id) {
    this.id  = id;
    this.txt = "";
    this.doc = document.getElementById(id);

    this.updateTxt = function(txt){
        this.setTxt(txt);
        this.showTxt();
    };

    this.setTxt = function(txt){
        this.txt  =txt;
    };

    this.showTxt = function(){
        this.doc.innerHTML = this.txt;
    };

    this.getTxt= function() {
        return  this.txt;
    };

    this.getDoc = function(){
    	return this.doc;
    };

    this.clearTxt= function(){
        this.doc.innerHTML = "";
    };
}




function selectWiew(id){
	this.id  = id;
    this.doc = document.getElementById(this.id);

    this.ClearOption= function() {
        
    };
     
     //array= ["Banana", "Orange", "Apple", "Mango"];
    this.InitOption= function(array) {

    	for(i = 0; i < array.length; i++){
    		var option = document.createElement("option");
   		 	option.text = array[i];
        	this.doc.add(option);
    	}
    };

    this.getValue =function(){
    	return this.doc.value;
    };

    this.setValue = function(value){
    	this.doc.value = value;
    }
}

function checkBoxView(id){
	this.id  = id;
    this.doc = document.getElementById(this.id);

    this.getChecked = function(){
    	return this.doc.checked ;
    };

    this.setChecked = function(checked) {
    	this.doc.checked = checked;// true or false
    };
}


function divView(id){
	this.id  = id;
    this.doc = document.getElementById(this.id);
}


function mouseScroll(id){
    this.id = id;
    this.move  = 0;
    this.doc = document.getElementById(this.id);

    this.updateScroll = function(){
        if (this.move == 0) {
            this.doc.scrollTop += 500;
            console.log("\nupdateScroll scroll=" + this.doc.scrollTop);
        }
     };

     this.setscrollTop = function(line){
        if (this.move == 0) {
            this.doc.scrollTop = line*18 + 10000;
            //console.log("\nsetscrollTop scroll=" + this.doc.scrollTop);
        }
     };

     this.stopScroll = function(){
         this.move = 1;
     };


     this.startScroll = function(flag){
         this.move = 0;
     };
}