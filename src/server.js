const express = require("express")
const server = express()


//request, response
server.get('/', (request, response) => {
    return response.send('E ae, Marujo!')
})

server.listen(3000, ()=> console.log('rodando, rodando...'))