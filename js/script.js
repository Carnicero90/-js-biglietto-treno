var coeffKm = 0.21; // prezzo al chilometro
var senior = 65; // età minima per accedere a sconti senior
var junior = 18; // età massima per accedere a sconti junior
var scontoSenior = 0.4; // sconto senior
var scontoJunior = 0.2; //sconto junior

// Validazione dati utente
alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = parseInt(prompt('Quanti anni hai?'));
var kmPercorsi = parseInt(prompt('Quanti chilometri devi percorrere?'));

if (isNaN(etaUtente) || isNaN(kmPercorsi)) {
    alert('inseriti dati non validi, riprovare')
    location.reload();
}

// Calcolo sconto
var fattorePrezzo = 1;
if (etaUtente < junior) {
    fattorePrezzo -= scontoJunior;
} else if (etaUtente > senior) {
    fattorePrezzo -= scontoSenior;
}
var prezzo = kmPercorsi * coeffKm;

document.getElementById('prezzo-base').innerHTML = prezzo.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

prezzo *= fattorePrezzo;
scontoApplicato = Math.round((1 - fattorePrezzo) * 100).toString() + "%";

var prezzoFinale = prezzo.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

document.getElementById('km').innerHTML = kmPercorsi.toLocaleString("it-IT");
document.getElementById('sconto').innerHTML = scontoApplicato;
document.getElementById('totale').innerHTML = prezzoFinale;