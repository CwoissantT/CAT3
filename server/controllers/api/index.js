const router = require('express').Router();
const userRoutes = require('./userRoutes')
const apiRoutes = require('./apiRoutes');

router.use('/', apiRoutes);
router.use('/user', userRoutes);

module.exports = router;