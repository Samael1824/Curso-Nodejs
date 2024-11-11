const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234


const processRequest = (request,response) => {
    response.setHeader('Content-Type', 'text/html;charset=utf8')
    
    if(request.url === '/') {
        response.statusCode = 200 
        response.end('<h1>Bienvenidos a la páginas payasos</h1>')
    }else if (request.url === '/imagen'){
        fs.readFile('./yo.png',(err,data) => {
            if(err) {
                response.statusCode = 500
                response.end('<h1> 500 internal server error</h1>')
            }else {
                response.setHeader('Content-Type', 'image/png')
                response.end(data)
            }
        })
    }
    else if(request.url === '/contacto'){
        response.statusCode = 200 
        response.end('<h1>Pagina Contacto</h1>')
    }else {
        response.statusCode = 404 
        response.end('<h1>404</h1>')
    }

}

    const server = http.createServer(processRequest)

    server.listen(desiredPort,() => {
        console.log(`La direccion del puerto es http://localhost:${desiredPort}`)
    })

