function ControllerText(){
	this.getData = function(id){
		var view  = new  viewText("demo");
		var model = new  ModelText("")
		var data  = model.getData();
		view.updateTxt(data);

		//CSS
		var css = new StypeTxt(view.getDoc());
		css.setBackgroundColor("lightblue");
		css.setColor("red");
	};
}
