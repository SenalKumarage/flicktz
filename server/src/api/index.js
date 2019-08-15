const express = require('express');
const image = require('./routes/image');

const app = express.Router();

/**
 * All the routes will be loaded here
 */
module.exports = () => {
	image(app);

	return app;
};