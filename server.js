const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

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
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Load Routes
const pages = require('./routes/pages/index');
const admin = require('./routes/admin/index');

// Use Routes
app.use('/', pages);
app.use('/admin', admin);

// ---- LISTENING PORT
app.listen(config.PORT, () => {
	console.log(`Server listening on port ${config.PORT}`);
});