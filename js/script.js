var coeffKm = 0.21; // prezzo al chilometro
var coeffOver65 = 0.6; // sconto over 65
var coeffUnder18 = 0.8; //sconto under 18

var etaUtente = parseInt(prompt("Quanti anni hai?"));
var kmPercorsi = parseInt(prompt("Quanti chilometri devi percorrere?"));

//Calcolo prezzo base
var prezzo = kmPercorsi * coeffKm;

// Calcolo sconti in base a età
if (etaUtente < 18) {
    prezzo = prezzo * coeffUnder18;
}

if (etaUtente > 65) {
    prezzo = prezzo * coeffOver65;
}
// Arrotondo a 2 cifre decimali
var prezzoFinale = prezzo.toFixed(2);

// Alert utente spesa totale
alert(`spenderai ${prezzoFinale} euro`);