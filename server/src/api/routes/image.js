const express = require('express');
const bodyParser = require('body-parser');
const ImageService = require('../../services/image');

const route = express.Router();

/**
 * This module is responsible for all the routes related to images
 */
module.exports = (app) => {

    console.log('starting image service...');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    const imageServiceInstance = new ImageService();

    // This will return the public feed of flickr api
    app.get('/public-feed', async (req, res) => {

        let data = await imageServiceInstance.getPublicFeed();

        res.send(data);
    });

    // This will return photos searched by the tag names
    // User will pass a comma separated query parameter called 'text'
    // TODO: Implement pagination
    app.get('/search', async (req, res) => {

        if (req.query.text) {
            let text = req.query.text;
            let data = await imageServiceInstance.searchByString(text);
            res.send(data);
        } else {
            res.status(400).send({ status: 400, message: 'Parameter text is not present' });
        }
    })
}