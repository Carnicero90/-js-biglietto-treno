var coeffKm = 0.21; // prezzo al chilometro
var coeffOver65 = 0.6; // sconto over 65
var coeffUnder18 = 0.8; //sconto under 18

alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = parseInt(prompt('Quanti anni hai?'));
var kmPercorsi = parseInt(prompt('Quanti chilometri devi percorrere?'));

if (isNaN(etaUtente) || isNaN(kmPercorsi)) {
    alert('inseriti dati non validi, riprovare')
    location.reload();
}
//Calcolo prezzo base
var prezzo = kmPercorsi * coeffKm;
document.getElementById('prezzo-base').innerHTML = prezzo.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
var scontoApplicato = "0%";


// Calcolo sconti in base a età
if (etaUtente < 18) {
    prezzo = prezzo * coeffUnder18;
    scontoApplicato = "20%";
} else if (etaUtente > 65) {
    prezzo = prezzo * coeffOver65;
    scontoApplicato = "40%";
}

// Arrotondo a 2 cifre decimali
var prezzoFinale = prezzo.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

var messaggio = `spenderai ${prezzoFinale} euro`;
document.getElementById('km').innerHTML = kmPercorsi.toLocaleString("it-IT");
document.getElementById('sconto').innerHTML = scontoApplicato;
document.getElementById('totale').innerHTML = prezzoFinale;