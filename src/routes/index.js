const { Router } = require('express')
//const post = require('./post.router')

module.exports = (server) => {
    server.use((req, res, next) => {
        post(server, new Router())
        next()
    })

}