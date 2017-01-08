/*
  {
	"proName" : "gate",
	"type"    :  "debug",
	"fileName": "json.cpp",
	"funcName":  "parse",
	"line"	  : "100",
	"msg"	  : "Hello"
  }
*/


function stringToLogger(str) {
	var  proName  = "";
	var  type     =  "";
	var  fileName = "";
	var  funcName = "";
	var  line 	  = "";
	var  msg	  = "";
	this.getProName  = function(){
		this.proName = JSON.parse(str).proName;
		return this.proName;
	};

	this.getType  = function(){
		this.type = JSON.parse(str).type;
		return this.type;
	};

	this.getFileName = function(){
		this.fileName = JSON.parse(str).fileName;
		return  this.fileName;
	};

	this.getFuncName = function(){
		this.funcName =  JSON.parse(str).funcName;
		//this.funcName = this.object.funcName;
		return this.funcName;
	};

	this.getLine = function(){
		this.line = JSON.parse(str).line;
		return this.line;
	};

	this.getMsg = function(){
		//this.msg = this.myobject.msg;
		this.msg =  JSON.parse(str).msg;
		return this.msg;
	};

	this.getString = function(){
		return  this.getProName() + " " + this.getFileName() + " " + this.getFuncName() +" [" +this.getLine() +  "] ["  +this.getType() + "]:"  +this.getMsg();
	};
};