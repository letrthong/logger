function ModelText(url){

	this.getData = function(){
		return "ModelText";
	};

	this.httpRequest =function() {
		var  data = '{"proName": "gate", "type": "debug", "fileName": "json.cpp", "funcName": "parse","line": "100", "msg": "Hello" }';
		return  data;
	};
}

function  ModelSceense001Configure(url){
    this.getSelect = function(){
    	var array = ["all", "gw", "cli", "light"];
    	return array;
    }
}