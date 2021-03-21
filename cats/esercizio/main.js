// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
$(document).ready(function() {

  const gatti = [
    {
      nome: "Romeo",
      eta: 3,
      colore: "black",
      sesso: "Maschio",
    },
    {
      nome: "Luna",
      eta: 5,
      colore: "white",
      sesso: "Femmina",
    },
    {
      nome: "Leo",
      eta: 5,
      colore: "brown",
      sesso: "Maschio",
    },
    {
      nome: "Briciola",
      eta: 8,
      colore: "blue",
      sesso: "Femmina",
    }
  ];

  // Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
  gatti.forEach((item) => {
    $('ul#gatti').append(`<li> <i style="color: ${item.colore}" class="fas fa-cat"></i> ${item.nome} </li>`);
  });

  // Milestone 2
  // Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
  //  Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

  // divido i gatti in due contenitori

  const maschi = gatti.filter((item) => item.sesso == "Maschio");
  const femmine = gatti.filter((item) => item.sesso == "Femmina");


  // assegno il fiocco
  maschi.forEach((item) => {
    $('ul#maschi').append(`<li> <i style="color: ${item.colore}" class="fas fa-cat"></i> ${item.nome} <i style= "opacity: ${item.eta / 10}; color: blue" class="fas fa-ribbon"></i> </li>`);
  });

  femmine.forEach((item) => {
    $('ul#femmine').append(`<li> <i style="color: ${item.colore}" class="fas fa-cat"></i> ${item.nome} <i style= "opacity: ${item.eta / 10}; color: pink" class="fas fa-ribbon"></i> </li>`);
  });


  // creo le opacita
  let opacitaM = [];
  let opacitaF = [];

  maschi.forEach((item) => {
    let itemopacita;
    itemopacita = {...item, opacita: item.eta / 10};
    opacitaM.push(itemopacita);
  });

  femmine.forEach((item) => {
    let itemopacita;
    itemopacita = {...item, opacita: item.eta / 10};
    opacitaF.push(itemopacita);
  });


  // Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore  e opacità del fiocco per ogni gatto.
  const gattiUniti = [...opacitaF,...opacitaM];

  // utilizzo map per passare solo alcune proprieta

  const gattiProprieta =  gattiUniti.map((item) => {
    const {nome,colore, opacita} = item;
    return {nome,colore, opacita}
  });

  // appendo

  console.log(gattiProprieta);







}); // fine ready










// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
//  Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
