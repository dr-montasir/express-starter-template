const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

// Overwrite defaultLayout by the admin route
router.all('/*', (req, res, next) => {
	req.app.locals.layout = 'admin';
	next();
});

// The Admin  Posts Route
router.get('/', (req, res) => {
	// Get data from the database
	Post.find({}).then(posts => {
		res.render('admin/posts', {posts: posts});
	});
});

// Create Post Route
router.get('/create', (req, res) => {
	res.render('admin/posts/create');
});

// Create Post Route
router.post('/create', (req, res) => {
	let allowComments = true;
	if (req.body.allowComments) {
		allowComments = true;
	} else {
		allowComments = false;
	}
	// Post Objects
	const newPost = new Post({
		title: req.body.title,
		status: req.body.status,
		allowComments: allowComments,
		description: req.body.description
	});

	newPost.save().then(savedPost => {

		// console.log(savedPost);
		res.redirect('/admin/posts');

	}).catch(error => {

		console.log('could not save post');

	});
	// console.log(req.body);
});


module.exports = router;