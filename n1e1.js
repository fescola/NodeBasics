//Nivell 1 exercici 1

var usuari = prompt("Introdueix Nom");
function nomUsuari(usuari) {
  console.log("El nom es:" + usuari);
}
nomUsuari(usuari);

//Nivell 2 Excercici 1

const nom = prompt("Introdueix el teu nom de pila");
const cognom = prompt("Introdueix el teu cognom");

console.log(`Hola ${nom} ${cognom} `);

//Nivell 2 Excercici 2

function retornValor() {
  let valor = prompt("introdueix un valor");
  console.log(`
   Hola ${nom}  ${cognom}
   El teu valor es ${valor}
   Bona tarda`);
}

retornValor();

//Nivell 3 Exercici 1

var matriu = [10];
for (let i = 0; i < 10; i++) {
  matriu[i] = function () {
    for (let j = 0; j < 10; j++) {
      console.log(j);
    }
  };
  matriu[i]();
}



//Nivell 3 exercici 2

(function () {
  console.log(`Usuari introduit: ${usuari} `);
})(usuari);
