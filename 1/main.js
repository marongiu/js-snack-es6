$(document).ready(function() {
  // Creare un array di oggetti:
  //  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  //  Stampare a schermo la bici con peso minore utilizzando destructuring
  //   e template literal

  // Creo un array di oggetti
  // con le proprietà: nome e peso

  const biciclette = [
    {
      nome: "Olympia",
      peso: 5,
    },
    {
      nome: "Scott",
      peso: 2,
    },
    {
      nome: "Santa Cruz",
      peso: 7
    }
  ];

  // stampo a schermo la bici con peso minore
  // parto dall'indice 0 della prima bici
  let pesoMin = biciclette[0];
  // creo il ciclo for e scorro tutte le biciclette
  for (let i = 0; i < biciclette.length; i++) {
    // creo un if mettendo a paragone tutte le bici
    if (biciclette[i].peso < pesoMin.peso) {
      pesoMin = biciclette[i];
    }
  }

// Stampare a schermo la bici con peso minore utilizzando destructuring
  const {peso, nome} = pesoMin;

// template literal

console.log(`La bici con peso minore è: ${nome} ed il suo peso è ${peso}kg`);

}); // fine ready
