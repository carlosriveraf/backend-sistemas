const { Router } = require('express');
const zone = require('../controllers/zone');

const router = Router();

router.post('/create', zone.create);
router.get('/all', zone.findAll);
router.get('/:id', zone.findById);
router.put('/:id', zone.update);
router.delete('/:id', zone.delete);

module.exports = router;