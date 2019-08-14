const express = require('express');
const image = require('./routes/image');

const app = express.Router();

module.exports = () => {
	image(app);

	return app;
};