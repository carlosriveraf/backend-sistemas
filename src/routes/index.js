const express = require('express')
const router = express.Router()
const connection = require('../database')

module.exports = app => {
    
    router.get('/', (req, res) => {
        connection.query("SELECT * FROM usuario", (err, result, fields) => {
            if (err) throw err;
            console.log(result);
        })
        res.send('works')
    })

    app.use(router)
}