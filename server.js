const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-hbs');
const bodyParser = require('body-parser');

// Include the config.js file
const config = require('./config/config');


const app = express();

// --- CONNECTING TO DATABASE
mongoose.connect(config.MONGODB_ADDON_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(db => {
		console.log('Successfully connected to database');
	})
	.catch(error => {
		console.log('Could not connected. ' + error);
	});

// Set Up Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Load Routes
const pages = require('./routes/pages/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

// Use Routes
app.use('/', pages);
app.use('/admin', admin);
app.use('/admin/posts', posts);

// ---- LISTENING PORT
app.listen(config.PORT, () => {
	console.log(`Server listening on port ${config.PORT}`);
});