<!DOCTYPE html>

<html lang="no">
	<head>
		<title>KlappeSpill</title>
		<link rel="stylesheet" type="text/css" href="interface.css" />
		<meta charset="utf-8"/>
	</head>
	<body>
		<h1> Herru you, klappe?!</h1>
		<br />
		<div class="min-boks"> 
		<ul>
			<li><a href="meny.html">Upgrades </a></li>
			<li><a href="stats.html">Stats </a></li>

		</ul>
	</div>
	<br />
		<div class="boks2">
		<br /> 
			<img src="https://loremflickr.com/320/240" alt="placeholder"/>
			<p style="width: 25%; background-color: powderblue; text-align: center;">
			#Klapp: <span style="color:blue;font-weight:bold" id="click"> </span> </p>
			<div class ="klikkeButtons">
				<button type="click" onclick="normalClick(1)">Klapp pusen </button>
				<button type="upgrade" onclick="upgradeFirst()"> 
				#Klappere: <span id="klappere">0</span> <br />
				Pris: <span id="klappereCost">10</span>
				</button>
			</div>
		</br>
		</div>
		<br />
		<div class ="save">
			<button class="saveLoad" onclick="save()">Save</button>
			<button class="saveLoad" onclick="load()"> Load</button> 
			<button class="reset" onclick="reset()">Reset</button>
		</div>
			<script type="text/javascript" src="main.js"></script>
	</body>
	</html>


	<!-- TODO: 
		Upgrade:	Kattemat - Klikkeklapper blir bedre.
					Katteleker Ende bedre klappere. 4 til normalClick elns
					Kattehus - Flere katter (?)

		Endre desimaler/tall
		Bytte kattebilde ved X klapp
		Achivmentzorz 
	-->

