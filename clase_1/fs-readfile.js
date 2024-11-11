/*

//Sincrono

const fs = require('node:fs')

const text = fs.readFileSync('./texto.txt','utf-8')

console.log(text)
*/

//  asincrono
const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./texto.txt', 'utf-8', (err,text) => {
    console.log('primer texto:',text)
})
//console.log('primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./texto2.txt', 'utf-8', (err,Secondetext) => 
    console.log(Secondetext)
)
//console.log('segundo texto:', secondText)