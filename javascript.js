var fris = 0;
var bier = 0;
var wijn = 0;
var snack = 0;

var frisprijs = 0;
var bierprijs = 0;
var wijnprijs = 0;
var snackprijs = 0;

var totaalprijs = 0;

const FRISPRIJS = 2.00;
const BIERPRIJS = 4.00;
const WIJNPRIJS = 5.00;
const SNACKPRIJS = 0.20;

function go() {
	var x = prompt("Welke bestelling wilt u toevoegen?", "Fris / bier / wijn / snack").toLowerCase();
	if (x == "fris"){
	var z = prompt("Hoeveel " + x + " wilt u bestellen?")
} 	if (x == "bier"){
	var z = prompt("Hoeveel " + x + " wilt u bestellen?")
}	if (x == "wijn"){
	var z = prompt("Hoeveel " + x + " wilt u bestellen?")
}	if (x == "snack"){
	var z = prompt("Hoeveel " + x + " wilt u bestellen?")
} else {
	window.confirm("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
	}
if (window.confirm("Wilt u nog wat bestellen?")){
	go();
}	
}