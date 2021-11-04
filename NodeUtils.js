// Nivell 1 Exercici 1

const recur =() =>{

    console.log(`Ha pasat un altre segon`)
}

var myVar = setInterval(recur, 1000);

const { constants } = require('buffer');
//Nivell 1 exercici 2

const fs = require('fs');
const { buffer } = require('stream');


const escriure =(arxiu,content)=> {
fs.writeFile(arxiu,content, err=>{
    if(err) {
        console.error(err)

        return
    }
})
}

escriure('text.txt','this is a test2');

//Nivell 1 Exercici 3

const llegir =(document)=>{
    fs.readFile(document, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })
}

llegir('text.txt');

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

fs.readFile('text.txt', 'utf8', function msg (err,data) {
  if (err) {
    return console.log(err);
  }
  let temp = Buffer.from(data).toString('base64')
  escriure('text64.txt',temp)
  temp = Buffer.from(data).toString('hex')
  escriure('textHex.txt',temp)
});

//part 2

const crypto = require("crypto");

const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(24);

const encriptar = (doc,type)=>{
  fs.readFile(doc, type , (err, data) => {
    if (err) {
      console.error(err.message)
    }
    else{ 
      console.log(`hey this is ${doc} -  ${data}` )
    var cipher = crypto.createCipheriv('aes-192-cbc', Securitykey, initVector);
     var encryptedData = cipher.update(data, type, "hex");
     encryptedData += cipher.final("hex");

     console.log("Encrypted message: " + encryptedData); 

     escriure(`nou${doc}`,encryptedData)
     fs.unlinkSync(doc)
    }
  })
}

encriptar('text.txt','utf-8')
encriptar('text64.txt','base64')
encriptar('textHex.txt','hex')
