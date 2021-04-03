const express = require("express")
const server = express()
const routes = require("./routes")

// habilitar o uso do req.body
server.use(express.urlencoded( {extended: true }))

//usando template engine
server.set('view engine', 'ejs')

//habilitar os arquivos statics
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))