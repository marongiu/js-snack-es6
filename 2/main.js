// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi
// contengono solo nomi e falli subiti e stampiamo tutto in console.

$(document).ready(function() {

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 const squadre = [
   {
     nome: "Juventus",
     punti: 0,
     falli: 0
   },
   {
     nome: "Milan",
     punti: 0,
     falli: 0
   },
   {
     nome: "Roma",
     punti: 0,
     falli: 0
   }
 ];


// Generare numeri random al posto degli 0 nelle proprietà:
for (var i = 0; i < squadre.length; i++) {
  // genero casualmente con una function i punti e i falli
  squadre[i].punti = randomNumber(1,100);
  squadre[i].falli = randomNumber(1,100);
}
console.log(squadre);



}); // fine ready


//function

function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non hai inserito correttamente i dati");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
