// Nivell 1 Exercici 1

const recur =() =>{

    console.log(`Ha pasat un altre segon`)
}

var myVar = setInterval(recur, 1000);

//Nivell 1 exercici 2

const fs = require('fs')

const content = 'this is a test'

const escriure =()=> {
fs.writeFile('text.txt',content, err=>{
    if(err) {
        console.error(err)

        return
    }
})
}

escriure();

//Nivell 1 Exercici 3

const llegir =()=>{
    fs.readFile('text.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })
}

llegir();

//Nivell 2 Exercici 1

const zlib = require('zlib');

const gzip = zlib.createGzip()
const inp = fs.createReadStream('text.txt')

const out = fs.createWriteStream('text.txt.gz')

inp.pipe(gzip).pipe(out)

//

const testFolder = './';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

//Nivell 3 Exercici 1


