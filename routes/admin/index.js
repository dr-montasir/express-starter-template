const express = require('express');
const router = express.Router();

// Overwrite defaultLayout by the admin route
router.all('/*', (req, res, next) => {
	req.app.locals.layout = 'admin';
	next();
});

// The Admin  Dashboard (Admin  Index) Route
router.get('/', (req, res) => {
	res.render('admin/index');
});

module.exports = router;