//Nivell 1 exercici 1

function nomUsuari(usuari) {
  console.log(`El nom es: ${usuari}` );
}
nomUsuari(`Ferran`);

//Nivell 2 Excercici 1

const nom = `Ferran`;
const cognom = `Escolà`;

console.log(`Hola ${nom} ${cognom} `);

//Nivell 2 Excercici 2

function retornValor() {
  return 8;
}
  console.log(`
   Hola ${nom}  ${cognom}
   El teu valor es ${retornValor()}
   Bona tarda`);


retornValor();

//Nivell 3 Exercici 1

var matriu = [10];
for (let i = 0; i < 10; i++) {
  matriu[i] = function () {
    for (let j = 0; j < 10; j++) {
      matriu[i][j] = j;
    }
  };
  matriu[i]();
}
for (let i = 0 ;i < 10 ;i++) {
  for (let j = 0; j < 10; j++) {
    console.log(matriu[i][j]);
  }
}


//Nivell 3 exercici 2


let usuari = `escolasarabia@gmail.com`;
(function () {
  console.log(`Usuari introduit: ${usuari} `);
})(usuari);
