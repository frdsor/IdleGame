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

function save(){
	var save = {
		click: click,
		cursors: cursors,
		cursorsCost: cursorsCost
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.click !== "undefined"){
	 click = savegame.click;
	}
	if (typeof savegame.cursors !== "undefined"){
	 cursors = savegame.cursors;
	 }
	 if(typeof savegame.cursorsCost !== "undefined"){
	 	cursorsCost = savegame.cursorsCost;
	 }
}

function reset(){
	localStorage.removeItem("save");
}

window.setInterval(function(){
normalClick(cursors);
}, 1000);