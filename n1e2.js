
//Nivell 1 Exercici 1

(() => {
    console.log(2+2);
  })()
 
  // Nivell 2 Exercici 1

  let n1ex1 = param =>{
     const cotxe = {preu: param}
     return cotxe;
};

// Nivell 2 Exercici 2
class Persona {
    constructor(nom){
        this.nom = nom;
    }
    dirNom() { 
        console.log(this.nom);
    }
}
var persona1 = new Persona("ferran");
persona1.dirNom();

//Nivell 3 Exercici 1


class objecte {
    constructor(nom,tipo){
        if(new.target === objecte){
            throw new Error(`Abstract class cannot be instantiated`);
        }
        this.nom = nom;
        this.tipo = tipo;
    }
    
}
    
objecte.prototype.write = function(){    
    console.log(`hola, ${this.target} es un: ${this.tipo} `);
}

function ObjecteHereu (...args) { 
    objecte.apply(this, args);
 }

ObjecteHereu.prototype = Object.create(objecte.prototype);

var nouObj = new ObjecteHereu('audi','vehicle');

function crearObj(objName) { 

    objName = new ObjecteHereu('paret','construccio')
 }
/*
function CreacioObj(...args){
   objecte.apply(this,args);
}
*/

var nouObj2 = new ObjecteHereu('taula','moble');
//console.log(nouObj);
//console.log(nouObj2);