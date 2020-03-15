const express = require('express');
const router = express.Router();

// Overwrite defaultLayout by the index route
router.all('/*', (req, res, next) => {
	req.app.locals.layout = 'index';
	next();
});

// The Home Route
router.get('/', (req, res) => {
	res.render('pages/home');
});

// The Login Route
router.get('/login', (req, res) => {
	res.render('pages/login');
});

// The Register Route
router.get('/register', (req, res) => {
	res.render('pages/register');
});

module.exports = router;