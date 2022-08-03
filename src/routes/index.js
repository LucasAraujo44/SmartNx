const { Router } = require('express')

module.exports = (server) => {
    server.use((req, res, next) => {
        post(server, new Router())
        next()
    })

}