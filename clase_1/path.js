const path = require('node:path')

// barra separadora de carpeta segun Sistema operativo (SO)
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

// Nombre de un archivo
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)