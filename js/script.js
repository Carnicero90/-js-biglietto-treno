const coeffKm = 0.21; // prezzo al chilometro
const senior = 65; // età minima per accedere a sconti senior
const junior = 18; // età massima per accedere a sconti junior
const scontoSenior = 0.4; // sconto senior
const scontoJunior = 0.2; //sconto junior

function debug(f) {
    return f;
}

// Validazione dati utente
alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = prompt('Quanti anni hai?');
debug(console.log(etaUtente));
/* pazzescamente se dopo almeno un primo valore numerico inserisco dei caratteri non numerici, mi considera il valore valido e 
"taglia" dal primo carattere non valido (es: 10er433f diventa 10)! Dovrò spostare "a valle" il parseInt? */
debug(console.log("10 e caratteri random" * 1));
//questa sembra una buona soluzione per assicurarsi un NaN, no?
var kmPercorsi = prompt('Quanti chilometri devi percorrere?');

etaUtente = parseInt((etaUtente * 1));
kmPercorsi = parseInt((kmPercorsi * 1));

if (isNaN(etaUtente) || isNaN(kmPercorsi) || etaUtente <= 0 || kmPercorsi <= 0) {
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