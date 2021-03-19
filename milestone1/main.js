// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

$(document).ready(function() {
  // Creo un array con i vari gatti e le loro proprietà
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

  // uso la funzione .forEach per stampare tutti i gatti

  let lista = $('ul');
  gatti.forEach((item, i) => {
    lista.append(`<li> ${gatti[i].nome} il suo colore è ${gatti[i].colore} </li>`);
  });


}); // fine ready
