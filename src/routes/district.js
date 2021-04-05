const { Router } = require('express');
const district = require('../controllers/district');

const router = Router();

router.post('/create', district.create);
router.get('/all', district.findAll);
router.get('/:id', district.findById);
router.put('/:id', district.update);
router.delete('/:id', district.delete);

module.exports = router;