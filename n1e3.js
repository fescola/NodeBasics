//Nivell 1 Exercici 1

function suma(src) {
    return new Promise(function(resolve, reject) {
        let resultat = src + 2;
        console.log(`resultat: ${resultat}`)
      if(resultat === 4) {resolve(console.log(`No errors, the result is ${resultat}`));}
      else reject(new Error(`Load error for ${src}`));
    });
  }
//suma(2); //resol correctament
//suma(3); //salta error

//Nivell 1 Exercici 2 
/*
let rand = 3;

const funcCallback = (msg) => {
console.log(`${msg} was printed`);
setTimeout(funcCallback,2000);
}

let exer2 = (result, cb) => { 
    return new Promise(function(resolve, reject) {
    resolve (
        console.log(2),
        cb(result)
        );
    reject(new Error("Whoops!"));
    });
}

exer2(rand,funcCallback);
*/

//Nivell 2 Exercici 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = (emp,id) => { 
    let found ;
    for(let x = 0; x<=id;x++){
        if(emp[x].id === id){
            found = emp[x].name;
        }
    }
    return new Promise(function(resolve, reject) {
        resolve (found);
        reject(new Error("Whoops!"));
        });

}

console.log(getEmployee(employees,2));

//Nivell 2 Exercici 2 

var getSalary = (emp) =>{
    for(let x = 0; x<=ID;x++){
        if(emp[x].id === ID){
            return emp[x].name;
        }
    }
}