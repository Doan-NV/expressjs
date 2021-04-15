const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controllers')
const requireAuth = require('../middlewares/auth.middleware')
router.get('/login', requireAuth.requireAuth, adminController.getLogin);
router.post('/login', adminController.postLogin)

router.get('/dashboard', requireAuth.requireAuth, adminController.dashboard);


module.exports = router;