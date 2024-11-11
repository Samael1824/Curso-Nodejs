const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((request,response) => {
    console.log('request received')
    response.end('hola mundo')
})
// aqui ponemos que este sea el puerto por default sin embargo
// cuando lo corremos antes del node agreagamos un puerto y ese nos servira
// como desarrollo ejemplo, $env:PORT=2000
//node http.js



findAvailablePort(desiredPort).then(port => {
    server.listen(port,() => {
        console.log(`La direccion del puerto es http://localhost:${port}`)
    })
})

// server.listen(0, ()=>{
//     console.log(`La direccion del puerto es http://localhost:${server.address().port}`)
// })