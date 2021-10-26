
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


class objeto {
    constructor(tipo){
        if(new.target === objeto){
            throw new Error(`Abstract class cannot be instantiated`);
        }
        this.tipo = tipo;
    }
    write(){
        console.log(`hola, esto es un:${this.tipo} `);
    }
}

class vehiculo extends objeto{
    constructor(tipo,color){
        super(tipo);
        this.color = color;
    }
    metColor(){
        console.log(this.color);
    }
}


function creacioObj(){
    var audi =new vehiculo(`coche`, `rojo`);

}
creacioObj();
audi.metColor();
//audi.write();