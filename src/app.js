const express = require('express')
require('./infra/database/mongo')
const router = require('./routes')

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.server.use(express.json())
    }
    routes() {
        router(this.server)
    }
}
module.exports = new App().server 
