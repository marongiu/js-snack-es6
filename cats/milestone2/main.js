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

  // Ora devo assegnare un fiocco in base al sesso
    // Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio. divido per 10 per rendere opacity possibile
  maschi.forEach((item) => {
    $('ul').append(`<li> <i style="opacity: ${item.eta / 10}" class="fas fa-ribbon blue"></i> Il gatto ${item.nome} di colore ${item.colore} è un ${item.sesso} la sua età è di ${item.eta} anni/o</li>`);
  });
  // Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio divido per 10 per rendere opacity possibile
  femmine.forEach((item) => {
    $('ul').append(`<li> <i  style="opacity: ${item.eta / 10}" class="fas fa-ribbon pink"></i> La gatta ${item.nome} di colore ${item.colore} è una ${item.sesso} la sua età è di ${item.eta} anni/o </li>`);
  });


// alernativa opacity

// if (item.eta <= 3) {
//       $('ul li i.blue').css('opacity', '0.5');
//     }

// if (item.eta <= 3) {
//       $('ul li i.pink').css('opacity', '0.5');
//     }





}); // fine ready
