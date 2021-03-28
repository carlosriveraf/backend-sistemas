const express = require('express')
const router = express.Router()
const user = require('../controllers/user')

router.post('/create', user.create)
router.get('/all', user.findAll)
router.get('/:id', user.findById)
router.put('/:id', user.update)
router.delete('/:id', user.delete)

module.exports = router