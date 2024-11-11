//funciones de manera asincrona
import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./texto.txt', 'utf-8'),
    readFile('./texto2.txt','utf-8')
]).then(([text,Secondetext]) => {
    console.log('primer texto:', text),
    console.log('Leyendo segundo texto:',Secondetext)
})


