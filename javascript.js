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
	var bestelling = prompt("Welke bestelling wilt u toevoegen?", "Fris / bier / wijn / snack").toLowerCase();
	if (bestelling == "fris"){
		var aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?")
		fris += parseInt(aantal);
} 	else if (bestelling == "bier"){
		var aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?")
		bier += parseInt(aantal);
}	else if (bestelling == "wijn"){
		var aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?")
		wijn += parseInt(aantal);
}	else if (bestelling == "snack"){
		var aantal = prompt("Hoeveel " + bestelling + " wilt u bestellen?")
		snack += parseInt(aantal);
} 	else {
	window.confirm("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
	}
	if (window.confirm("Wilt u nog wat bestellen?")){
		go();
	} else {
		rekening();
	}
}

function rekening() {
	var frisprijs = fris * FRISPRIJS;
	var bierprijs = bier * BIERPRIJS;
	var wijnprijs = wijn * WIJNPRIJS;
	var snackprijs = snack * SNACKPRIJS;
	var totaalprijs = frisprijs + bierprijs + wijnprijs + snackprijs;
	if (fris != 0) {
		document.write("De " + fris  + " fris kost " + frisprijs + " euro." + "<br>");
	}
	if (bier != 0) {
		document.write("De " + bier + " bier kost " + bierprijs + " euro." + "<br>");
	}
	if (wijn != 0) {
		document.write("De " + wijn + " wijn kost " + wijnprijs + " euro." + "<br>");
	}
	if (snack != 0) {
		document.write("De " + snack + " snack kost " + snackprijs + " euro." + "<br>");
	}
	document.write('<hr>');
	document.write("De totaalprijs is " + totaalprijs + " euro.")
}