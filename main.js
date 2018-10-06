var click = 0;
var klappere = 0;
var totalClick = 0;



function normalClick(number){
	click = click + number;
	document.getElementById("click").innerHTML = prettify(click);
};

function getTotal(){
	console.log("kek");
	document.getElementById("totalClick").innerHTML = prettify(totalClick);
}


function upgradeFirst(){
	var klappereCost = Math.floor(10  * Math.pow(1.1,klappere));
	if(click >= klappereCost){
		klappere = klappere + 1;
		click = click - klappereCost;
		document.getElementById('klappere').innerHTML = prettify(klappere);
		document.getElementById('click').innerHTML = prettify(click);
	};
	var nextCost = Math.floor(10* Math.pow(1.1,klappere));
	document.getElementById("klappereCost").innerHTML = prettify(nextCost);
};

function prettify(number){
    var output = Math.round(number * 1000000)/1000000;
	return output;
}

function save(){
	var save = {
		click: click,
		klappere: klappere,
		klappereCost: klappereCost
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.click !== "undefined"){
	 click = savegame.click;
	}
	if (typeof savegame.klappere !== "undefined"){
	 klappere = savegame.klappere;
	 }
	 if(typeof savegame.klappereCost !== "undefined"){
	 	klappereCost = savegame.klappereCost;
	 }
}

function reset(){
	localStorage.removeItem("save");
}

window.setInterval(function(){
normalClick(klappere);
}, 1000);