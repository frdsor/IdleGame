var click = 0;
var cursors = 0;


function normalClick(number){
	click = click + number;
	document.getElementById("click").innerHTML = click;
};


function upgradeFirst(){
	var cursorsCost = Math.floor(10  * Math.pow(1.1,cursors));
	if(click >= cursorsCost){
		cursors = cursors + 1;
		click = click - cursorsCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('click').innerHTML = click;
	};
	var nextCost = Math.floor(10* Math.pow(1.1,cursors));
	document.getElementById("cursorsCost").innerHTML = nextCost;
};

window.setInterval(function(){
normalClick(cursors);
}, 1000);