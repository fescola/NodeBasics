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

escriure('text.txt','Missatge nou');

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
const os = require('os')
const testFolder = os.homedir()
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
const { Console } = require('console');

const initVector = Buffer.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const Securitykey = '123456781234567812345678';

var cipher = crypto.createCipheriv('aes-192-cbc', Securitykey, initVector);
cipher.setAutoPadding(true);

var decipher = crypto.createDecipheriv('aes-192-cbc', Securitykey, initVector);
decipher.setAutoPadding(true);

const encriptar2 = (data,type)=>{
  return new Promise(function(resolve, reject) {
     var encryptedData = cipher.update(data,type,'binary');
     encryptedData += cipher.final('binary');
     
     console.log(`This is encrypted data: 
     ${encryptedData}`),
     resolve( 
       encryptedData)
       reject(new Error('error a encriptar2'))
      //encriptar2(missatge,'utf-8'));
 });
}

const desencriptar2 = (data,type)=>{
  return new Promise(function(resolve, reject) {
     var decryptedData = decipher.update(data,'binary',type);
     console.log(`decrypted data : ${data}`)
     decryptedData += decipher.final(type);
     resolve( decryptedData)
     reject(new Error('error a desencriptar2'))
      //encriptar2(missatge,'utf-8'));
 });
}

const encriptarTest = (doc,type)=>{
  fs.readFile(doc, type , (err, data) => {
    if (err) {
      console.error(err.message)
    }
    else{ 
     encriptar2(data,type)
        .then(encriptar => escriure(`nou${doc}`,encriptar.toString()))
        .then (fs.unlinkSync(doc))
        .catch(err=> console.log(err.message))
    }
  });
}
const desencriptarTest = (doc,type)=>{
  fs.readFile(doc, type , (err, data) => {
    if (err) {
      console.error(err.message)
    }
    else{ 
      desencriptar2(data,type)
        .then(desencriptar => console.log(`Missatge desencriptat: ${desencriptar}`))
        .catch (err=> console.log(err.message))
    }
  });
}
encriptarTest('text.txt','utf8')
desencriptarTest('noutext.txt','utf8');

//He aconseguit que funcioni amb utf8, base64 em dona errors i hex em dona uns altres
