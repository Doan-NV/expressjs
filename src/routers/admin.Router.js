const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controllers');
const requireAuth = require('../middlewares/auth.middleware');

router.get('/', requireAuth.requireAuth, adminController.index);

router.get('/login', requireAuth.requireAuthGetLogin, adminController.getLogin);
router.post('/login', adminController.postLogin);

router.get('/dashboard/', requireAuth.dashboard, adminController.dashboard);
router.get('/dashboard/:page', requireAuth.dashboard, adminController.dashboard);
router.get('/logout', adminController.logout);

// router.get('/dashboard', requireAuth.requireAuth, adminController.dashboard);


module.exports = router;