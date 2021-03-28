const express = require('express')
const router = express.Router()
const variable = require('../controllers/variable')

router.post('/create', variable.create)
router.get('/all', variable.findAll)
router.get('/:id', variable.findById)
router.put('/:id', variable.update)
router.delete('/:id', variable.delete)

module.exports = router