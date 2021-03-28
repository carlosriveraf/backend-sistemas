const express = require('express')
const router = express.Router()
const district = require('../controllers/district')

router.post('/create', district.create)
router.get('/all', district.findAll)
router.get('/:id', district.findById)

module.exports = router;