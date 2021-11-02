//Nivell 1 Exercici 1

function suma(src) {
    return new Promise(function(resolve, reject) {
        let resultat = src + 2;
      if(resultat === 4) {
          resolve(console.log(`No errors, the result is ${resultat}`));
        }
      else reject(new Error(`Load error for ${src}`));
    });
  }
  suma(2);

//Nivell 1 Exercici 2 
setTimeout(() => {
    return 2;
}, 1000);

const ex2 = x => {

}


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

const getEmployee= (emp,id) => {
    let found;
    if(id<emp.length){
        for(let x = 0; x<=id;x++){
            if(emp[x].id === id){
                found = emp[x].name;
            }
        }
        return Promise.resolve(found);
    }
    else {
        reject(new Error(`La ID: ${id} no esta a la llista d'empleats`))
    }
};

getEmployee(employees,2)
    .then(res =>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err.message);
    })

//Nivell 2 Exercici 2 

let getSalary = (employee) => { 
    let salari;
    for(let x = 0; x<=employee.id;x++){
        if(salaries[x].id === employee.id){
            salari =  salaries[x].salary;
        }
    }
    return new Promise(function(resolve, reject) {
        resolve (salari);
        reject(new Error("No s'ha trobat"));
        });

}

getSalary(employees[1])
    .then(res =>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err.message);
    })

//Nivell 2 Exercici 3

getEmployee(employees,2)
    .then(res =>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err.message);
    })
