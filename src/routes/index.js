const { Router } = require('express')
const post = require('./post.router')
const comment = require('./comment.router')

module.exports = (server) => {
    server.use((req, res, next) => {
        post(server, new Router())
        next()
    })
    server.use((req, res, next) => {
        comment(server, new Router())
        next()
    })
}