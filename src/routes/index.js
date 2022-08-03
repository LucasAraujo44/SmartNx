const { Router } = require('express')
//const post = require('./car.router')

module.exports = (server) => {
    server.use((req, res, next) => {
        post(server, new Router())
        next()
    })

}