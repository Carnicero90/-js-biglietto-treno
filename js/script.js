const coeffKm = 0.21; // prezzo al chilometro
const senior = 65; // età minima per accedere a sconti senior
const junior = 18; // età massima per accedere a sconti junior
const scontoSenior = 0.4; // sconto senior
const scontoJunior = 0.2; //sconto junior

// Validazione dati utente
alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente)
var kmPercorsi = parseInt(prompt('Quanti chilometri devi percorrere?'));

if (isNaN(etaUtente) || isNaN(kmPercorsi)) {
    alert('inseriti dati non validi, riprovare')
    location.reload();
}

// Calcolo sconto
var fattorePrezzo = 1;
var sconto = 0;
if (etaUtente < junior) {
    fattorePrezzo = 1 - scontoJunior;
    sconto = scontoJunior;
} else if (etaUtente > senior) {
    fattorePrezzo = 1 - scontoSenior;
    sconto = scontoSenior;
}
var prezzoBase = kmPercorsi * coeffKm;

var prezzoFinale = prezzoBase * fattorePrezzo;

// .html output
document.getElementById('prezzo-base').innerHTML = prezzoBase.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
document.getElementById('km').innerHTML = kmPercorsi.toLocaleString("it-IT");
document.getElementById('sconto').innerHTML = (sconto * 100).toString() + "%"; // alla fine non l'ho giudicato così criptico scritto così: si capisce, no?
document.getElementById('totale').innerHTML = prezzoFinale.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});;