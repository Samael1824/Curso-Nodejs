//funciones de manera asincrona

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./texto.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./texto2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })