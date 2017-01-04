function ModelText(url){

	this.getData = function(){
		return "ModelText";
	};


	this.httpRequest =function( line ) {
		var d = new Date();
		return  line.toString() + " " + d.toLocaleTimeString() + ": " + "ThongLT" +  "\n";
	}

}