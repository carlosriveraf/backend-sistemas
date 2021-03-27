const express = require('express')
const router = express.Router()
const connection = require('../database')
const usuario = require('../controllers/usuario')

module.exports = app => {
    
    router.get('/', usuario.findAll )

    app.use(router)
}