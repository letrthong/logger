function ModelText(url){

	this.getData = function(){
		return "ModelText";
	};

	this.httpRequest =function( line ) {
		var d = new Date();
		return  line.toString() + " " + d.toLocaleTimeString() + ": " + "ThongLT" +  "\n";
	};
}

function  ModelSceense001Configure(url){
    this.getSelect = function(){
    	var array = ["all", "gw", "cli", "light"];
    	return array;
    }
}