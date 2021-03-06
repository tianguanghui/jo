App = {
	load: function() {
		jo.load();
		
		// grab the HTML for our about box
		var about = joDOM.get("about").innerHTML;
	
		document.body.addEventListener('touchmove', function(e) {
		    e.preventDefault();
			joEvent.stop(e);
		}, false);
		
		// this is a more complex UI with a nav bar and a toolbar
		this.scn = new joScreen(
			new joContainer([
				new joFlexcol([
					this.nav = new joNavbar(),
					this.stack = new joStack()
				]),
				this.toolbar = new joToolbar("This is a footer, neat huh?")
			]).setStyle({position: "absolute", top: "0", left: "0", bottom: "0", right: "0"})
		);
		
		this.nav.setStack(this.stack);
		
		joCache.set("about", function() {
			var card = new joCard(about).setTitle("About");
			
			return card;
		});
			
		this.stack.push(joCache.get("menu"));
		console.log(this);
		
		joGesture.backEvent.subscribe(this.stack.pop, this.stack);
	}
};
