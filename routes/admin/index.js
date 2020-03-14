const express = require('express');
const router = express.Router();

// The Admin  Dashboard (Admin  Index) Route
router.get('/', (req, res) => {
	res.render('admin/dashboard');
});

module.exports = router;