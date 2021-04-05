const { Router } = require('express');
const measurement = require('../controllers/measurement');

const router = Router();

router.post('/create', measurement.create);
router.get('/all', measurement.findAll);
router.get('/:id', measurement.findById);
router.put('/:id', measurement.update);
router.delete('/:id', measurement.delete);

module.exports = router;