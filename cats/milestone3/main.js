// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e opacità del fiocco per ogni gatto.
$(document).ready(function() {
  // ricopio l'array del precedente esercizio
  const gatti = [
    {
      nome: "Romeo",
      eta: 2,
      colore: "nero",
      sesso: "M",
    },
    {
      nome: "Luna",
      eta: 1,
      colore: "bianco",
      sesso: "F",
    },
    {
      nome: "Leo",
      eta: 3,
      colore: "marrone",
      sesso: "M",
    },
    {
      nome: "Briciola",
      eta: 5,
      colore: "panna",
      sesso: "F",
    },
    {
      nome: "Virgo",
      eta: 4,
      colore: "rosso",
      sesso: "M",
    },
    {
      nome: "Kikia",
      eta: 14,
      colore: "giallo",
      sesso: "F",
    }
  ];

// mi ricopio la divisione di maschi e femmine con il filter
const maschi = gatti.filter((item) => item.sesso == "M");
const femmine = gatti.filter((item) => item.sesso == "F");

// utilizzando  l'operatore Spread unisco le due array inserendo solamente nome e colore e opacità del fiocco per ogni gatto.
let gattiUniti = [...femmine,...maschi];

gattiUniti.forEach((item, i) => {
  console.log(gattiUniti[i].nome, gattiUniti[i].colore);
});



}); // fine ready
