const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

/*
lo que esta abajo comentareado es lo mismo que la linea 9 xd
pero mas es el detalle a detalle de lo que esta haciendo
*/

// app.use((req,res, next) => {

//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type'] !== 'application/json') return next()

//     //aqui solo llegan request que sean post y que el header sea tipo json
//     let body = ''
//     req.on('data',chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp = Date.now()
//         req.body = data
//         next()
//     })
// })

app.get('/', (req,res) => {
    res.json(ditto)
})

app.post('/pokemon', (req,res) => {
    // el req.body deberiamos guardar en base de datos
    res.status(201).json(req.body)
})

// la ultima a llegar
app.use((req,res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:1234')
})