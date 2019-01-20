var game = document.getElementById("game");
var result = document.getElementById("result");
var colors = ["red", "blue", "green", "yellow", "pink", "purple"];
var currentColors = [-1, -1, -1, -1];
var picked = [RandomColor(), RandomColor(), RandomColor(), RandomColor()];
var user = [null,null,null,null];
var activeRow = 0;
var holdcolor = ""
var showButton =  new Array(12);
for (var i = 0; i < 12; i++) {
  showButton[i] = new Array(4);
}
		console.log(showButton);
		console.log(picked);
		console.log(user);

alert("Welkom bij Mastermind");
alert("het doel van het spel is om de geheime code te kraken");
alert("De rode vierkanten staan voor een goede kleur, terwijl de zwarte staan voor een goede kleur en een goede plek!");
alert("veel succes");

for(var rowOne=0; rowOne< 12; rowOne++){ 
    var row = document.createElement("div");
    row.setAttribute("id", "row" + rowOne);
    for(var columnOne=0; columnOne< 4; columnOne++){
    		var pionOne = document.createElement("div");
    		pionOne.setAttribute("id", "pionOne_" + rowOne + "_" + columnOne);
			pionOne.setAttribute("class", "pionOne");
			pionOne.onclick = setholdcolor;

if(rowOne > activeRow){
			pionOne.style.display = 'inline-block';
		}else{

		}

		row.appendChild(pionOne);

	}
	game.appendChild(row);
}

for (var secondRow = 0; secondRow < 12; secondRow++) {
	var rowTwo = document.createElement("div");
	rowTwo.setAttribute("id", "rowTwo_" + secondRow);
	for (var columnTwo = 0; columnTwo < 4; columnTwo++) {
		var pionTwo = document.createElement("div");
		pionTwo.setAttribute("id", "pionTwo_" + secondRow + "_" + columnTwo);
		pionTwo.setAttribute("class", "pionTwo");
		rowTwo.appendChild(pionTwo);
	}
	result.appendChild(rowTwo);
}

for (i = 0; i < 6; i++) {
	var ding = document.createElement("button");
	ding.id="button"+i;
	ding.innerHTML = i;
	ding.onclick = setcolor;
	document.getElementById("inventory").appendChild(ding);
}

document.getElementById("button0").innerHTML = "Rood!";
document.getElementById("button1").innerHTML = "Blauw!";
document.getElementById("button2").innerHTML = "Groen!";
document.getElementById("button3").innerHTML = "Geel!";
document.getElementById("button4").innerHTML = "Roze!";
document.getElementById("button5").innerHTML = "Paars!";


function RandomColor(){							//creert de geheime code
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}
function setcolor(){
	var kleurkeuze = this.id.replace("button", "");
	holdcolor = colors[kleurkeuze]
	}

function setholdcolor(){
	this.style.backgroundColor = holdcolor;
}

function checkcolors(){
	for (i = 0; i < 4; i++){
	var input = document.getElementById(["pionOne_" + activeRow + "_" + i]).style.backgroundColor
	console.log(input);
	if(input == picked[i]){
		document.getElementById("pionTwo_" + activeRow + "_" + i).style.backgroundColor = "black"
		document.getElementById("pionOne_" + activeRow + "_" + i).id = "chosen"
			//moet nog vervangen worden om ervoor te zorgen dat array iets vervangen wordt, daardoor wordt hij niet opnieuw gescheckd	
	}else if(picked.indexOf(input) >= 0 ){
		document.getElementById("pionTwo_" + activeRow + "_" + i).style.backgroundColor = "red"
		document.getElementById("pionOne_" + activeRow + "_" + i).id = "chosen"
	}else{
		document.getElementById("pionTwo_" + activeRow + "_" + i).style.backgroundColor = "white"
		document.getElementById("pionOne_" + activeRow + "_" + i).id = "chosen"
	}
	}
	activeRow++
}


function reset(){
location.reload(); //niet netjes maar tijdnood en om verder te kunnen "checken"
}


function loser (){
if(activeRow == 12){
	 function loser(){
	 	confirm("Helaas het is je niet gelukt");
	 	reset();
	 }
}
}


//DIT IS DE MEEST RECENTSTE CODE !!!!!!


