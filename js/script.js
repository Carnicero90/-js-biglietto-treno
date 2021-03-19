var coeffKm = 0.21; // prezzo al chilometro
var senior = 65;
var minor = 18;
var coeffSenior = 0.6; // sconto over 65
var coeffMinor = 0.8; //sconto under 18

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
if (etaUtente < minor) {
    prezzo = prezzo * coeffMinor;
    scontoApplicato = "20%";
} else if (etaUtente > senior) {
    prezzo = prezzo * coeffSenior;
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