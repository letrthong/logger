function StypeTxt(id){
	this.doc  = document.getElementById(id);

	this.setBackgroundColor = function(color){
		this.doc.style.backgroundColor = color;
	};

	this.setColor  = function(color){
		this.doc.style.color = color;
	};

	this.setHight = function(hight){
		this.doc.style.height = hight+"px";//50"
	};

	this.getHight  = function(){
		return  this.doc.style.height;
	};

	this.setwidth = function(width){
		this.doc.style.width = width+"px";//50"
	};

	this.getWidth = function(){
		return this.doc.style.width;
	};

	this.setShow = function(){
		this.doc.style.visibility = "visible"; 
	};

	this.setHidden = function(){
		this.doc.style.visibility = "hidden"; 
	};

	this.setscroll = function(){
		this.doc.style.overflow = "scroll";
	}
}


function StypeLeftSceense001(){
	var myinfo = new Info();
    var mydiv1 = new StypeTxt("ID_View_Div_Logger_001");
    var mydiv3 = new StypeTxt("ID_View_Div_Search_001");
    mydiv1.setHight((myinfo.getHeighOfScreen() * 0.70));
    mydiv3.setHight((myinfo.getHeighOfScreen() * 0.15));
}