const { Router } = require('express');
const user = require('../controllers/user');

const router = Router();

router.post('/create', user.create);
router.get('/all', user.findAll);
router.get('/:id', user.findById);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

module.exports = router;