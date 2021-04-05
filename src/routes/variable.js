const { Router } = require('express');
const variable = require('../controllers/variable');

const router = Router();

router.post('/create', variable.create);
router.get('/all', variable.findAll);
router.get('/:id', variable.findById);
router.put('/:id', variable.update);
router.delete('/:id', variable.delete);

module.exports = router;