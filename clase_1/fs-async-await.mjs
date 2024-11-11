//funciones de manera asincrona
import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./texto.txt', 'utf-8')
console.log('primer texto:', text)


//console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const Secondetext = await readFile('./texto2.txt','utf-8')
console.log('Leyendo segundo texto:',Secondetext)
