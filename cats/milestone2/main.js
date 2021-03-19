// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

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
      eta: 5,
      colore: "marrone",
      sesso: "M",
    },
    {
      nome: "Briciola",
      eta: 4,
      colore: "panna",
      sesso: "F",
    }
  ];

  // Dividere i gatti in due contenitori distinti in base al sesso
    // creo due array M e F utilizzando il filter per il sesso
  const maschi = gatti.filter((item) => item.sesso == "M");
  const femmine = gatti.filter((item) => item.sesso == "F");

  // Ora devo assegnare un fiocco in base al sesso
  maschi.forEach((item) => {
    $('ul').append(`<li> Il gatto ${item.nome} di colore ${item.colore} è un ${item.sesso} </li>`)
  });

  femmine.forEach((item) => {
    $('ul').append(`<li> La gatta ${item.nome} di colore ${item.colore} è una ${item.sesso} </li>`)
  });



}); // fine ready
