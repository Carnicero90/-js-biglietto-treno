var coeffKm = 0.21;
var coeffVeci = 0.6;
var coeffGiovani = 0.8;

var etaUtente = parseInt(prompt("età"));
var kmPercorsi = parseInt(prompt("quanti km"));

var prezzo = kmPercorsi * coeffKm;

if (etaUtente < 18) {
    prezzo = prezzo * coeffGiovani;
}

if (etaUtente > 65) {
    prezzo = prezzo * coeffVeci;
}

var prezzoFinale = prezzo.toFixed(2);
alert(`spenderai ${prezzoFinale} euro`);