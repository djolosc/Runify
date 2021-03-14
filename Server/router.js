const express = require('express');
const router = express.Router();
const preferenceController = require('./Controllers/preference.controller');
const userController = require('./controllers/user.controller');
const authMiddleware = require('./Middlewares/auth');

router.get('/routes', preferenceController.getAllRoutes);
router.post('/routes', preferenceController.postRoute);
router.get('/:km/:scenery', preferenceController.getRoute);
router.put('/setToTrue/:id', preferenceController.changeToTrue);
router.put('/setToFalse/:id', preferenceController.changeToFalse);

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.profile);
router.post('/logout', authMiddleware, userController.logout);

module.exports = router;
