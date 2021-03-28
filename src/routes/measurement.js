const express = require('express')
const router = express.Router()
const measurement = require('../controllers/measurement')

router.post('/create', measurement.create)
router.get('/all', measurement.findAll)
router.get('/:id', measurement.findById)
router.put('/:id', measurement.update)
router.delete('/:id', measurement.delete) 

module.exports = router