const express = require('express');

const route = express.Router();

/**
 * This module is responsible for all the routes related to images
 */
module.exports = (app) => {

    console.log('starting image api');

    app.use('/public-feed', route);

    app.get('/public-feed', (req, res) => {
        res.send('Hello world');
    })
}