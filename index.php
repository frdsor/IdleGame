<!DOCTYPE html>

<html lang="no">
	<head>
		<title>KlappeSpill</title>
		<link rel="stylesheet" type="text/css" href="interface.css" />
		<meta charset="utf-8"/>
	</head>
	<body>
		<h1> Herru you, klappe?!</h1>
		<div class="min-boks">Klapp katten<br />
		<ul>
			<li><a href="meny.html">Upgrades </a></li>
			<li><a href="#">Stats </a></li>
		</ul>
	</div>
		<div class="boks2"> 
			<img src="https://loremflickr.com/320/240" alt="placeholder"/>
			<p style="
	    		width: 25%;
	    		background-color: powderblue;
				"> #Klapp: <span style="color:blue;font-weight:bold" id="click"> </span> </p>

			<button type="click" onclick="normalClick(1)">Klapp pusen</button>
			<button type="upgrade" onclick="upgradeFirst()" > 
			#Klappere: <span id="cursors">0</span> <br />
			Pris: <span id="cursorsCost">10</span>
			</button>
		</br>
		</div>
			<script type="text/javascript" src="main.js"></script>
	</body>
	</html>