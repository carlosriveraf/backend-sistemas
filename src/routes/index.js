const { Router } = require('express');

const router = Router();

router.use('/', require('./home'));
router.use('/user', require('./user'));
router.use('/district', require('./district'));
router.use('/zone', require('./zone'));
router.use('/variable', require('./variable'));
router.use('/measurement', require('./measurement'));

module.exports = router;