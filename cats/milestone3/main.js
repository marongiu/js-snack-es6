// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
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
      colore: "panna",
      sesso: "M",
    },
    {
      nome: "Kikia",
      eta: 14,
      colore: "panna",
      sesso: "F",
    }
  ];

  // Dividere i gatti in due contenitori distinti in base al sesso
    // creo due array M e F utilizzando il filter per il sesso
  const maschi = gatti.filter((item) => item.sesso == "M");
  const femmine = gatti.filter((item) => item.sesso == "F");

// utilizzando  l'operatore Spread unisco le due array inserendo solamente nome e colore e opacità del fiocco per ogni gatto.
const gattiUniti = [...femmine,...maschi];
gattiUniti.forEach((item, i) => {
  // faccio il controllo maschio femmina per appendere
  if (gattiUniti[i].sesso == "M") {
    $('ul').append(`<li> <i style="opacity: ${item.eta / 10}" class="fas fa-ribbon blue"></i> Il gatto ${item.nome} di colore ${item.colore}</li>`);
  } else {
      $('ul').append(`<li> <i style="opacity: ${item.eta / 10}" class="fas fa-ribbon pink"></i> Il gatto ${item.nome} di colore ${item.colore}</li>`);
  }
});




}); // fine ready
