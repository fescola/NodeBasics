
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
    console.log(`hola, ${this.nom} es un/a: ${this.tipo} `);
}

function ObjHereu(n,t)
{
this.nom=n;
this.tipo = t;
}

ObjHereu.prototype=Object.create(objecte.prototype);

var newObj=new ObjHereu("rx7","vehicle");
var newObj2 = new ObjHereu("RTX 3070", "Targeta Grafica");
var newObj3 = new ObjHereu("Bagette", "Aliment");

newObj.write();
newObj2.write();
newObj3.write();

