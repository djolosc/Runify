const express = require('express');
const router = express.Router();
const controller = require('./Controllers/preference.controller');

router.get('/routes', controller.getAllRoutes);
router.post('/routes', controller.postRoute);

module.exports = router;
