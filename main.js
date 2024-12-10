/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let bibberLink = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
// bibberLink.addEventListener...
bibberLink.addEventListener('click', bibber)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function bibber(){
bibberLink.classList.toggle('bibber')
}
// vallen 
let valLink = document.querySelector('a:nth-of-type(2)')

valLink.addEventListener('click', val)

function val(){
  valLink.classList.toggle('val')
}

// roteer
let roteerLink = document.querySelector('a:nth-of-type(3)')

roteerLink.addEventListener('click', roteer)

function roteer(){
  roteerLink.classList.toggle('roteer')
}

interaction.addEventListener('animationend', roteer)
