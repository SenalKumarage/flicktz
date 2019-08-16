const express = require('express');
const ImageService = require('../../services/image');

const route = express.Router();

/**
 * This module is responsible for all the routes related to images
 */
module.exports = (app) => {

    console.log('starting image api');
    const imageServiceInstance = new ImageService();

    app.use('/public-feed', route);

    app.get('/public-feed', (req, res) => {

        let { response, body } = imageServiceInstance.getPublicFeed();

        res.send(body);
    })
}