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

//Nivell 1 Exercici 1


const getEmployee= (emp,newID) => {
    let found = emp.find( empleat => empleat.id === newID )
    return new Promise(function(resolve, reject) {
        if(found != undefined)
        resolve (found);
        else
        reject (new Error(`La ID: "${newID}" no esta a la llista d'empleats`));
        });
};


const getSalary = (employee) => { 
    return new Promise(function(resolve, reject) {
        let salari = (salaries.find( empleat => empleat.id === employee.id )).salary
        if(salari != undefined)
        resolve (salari);
        else
        reject(new Error(`No hi ha la ID seleccionada`));
        });

}


getEmployee(employees,4)
    .then(employee => getSalary(employee))
    .then(salary => console.log(salary))
    .catch(err=> console.log(err.message))


    //Nivell 1 Exercici 2

async function dadesEmpleat(ID) {
    let nom = (employees.find(empleat => empleat.ID === employees.id)).name

    getEmployee(employees,ID)
    .then (employee => getSalary(employee))
    .then(salary => console.log(`Empleat: ${nom} te un salari de ${salary}`))
    .catch (err=> console.log(err.message))

}
dadesEmpleat(2);

//Nivell 2 Exercici 1


const dosSeg = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (`hola`);
        }, 2000)
    })
}
async function nivell2(){
    try{
        const msg = await dosSeg()
        console.log(msg)
    } catch(err){
        console.log(err)
    }
  }

nivell2();

//Nivell 3 Exercici 1

