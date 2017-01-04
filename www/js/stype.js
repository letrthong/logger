function StypeTxt(doc){
	this.doc  = doc;

	this.setBackgroundColor = function(color){
		this.doc.style.backgroundColor = color;
	};

	this.setColor  = function(color){
		this.doc.style.color = color;
	};

	this.setHight = function(hight){
		this.doc.style.height = hight;///50px"
	};

	this.getHight  = function(){
		return  this.doc.style.height;
	};

	this.setwidth = function(width){
		this.doc.style.width = width;///50px"
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