const express = require('express');
const router = express.Router();
const controller = require('./Controllers/preference.controller');

router.get('/routes', controller.getAllRoutes);
router.post('/routes', controller.postRoute);
router.get('/:km/:scenery', controller.getRoute);
router.put('/setToTrue/:id', controller.changeToTrue);
router.put('/setToFalse/:id', controller.changeToFalse);
module.exports = router;
