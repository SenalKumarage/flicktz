const express = require('express');

const route = express.Router();
module.exports = (app) => {

    console.log('starting image api');

    app.use('/public-feed', route);

    app.get('/public-feed', (req,res) => {
        res.send('Hello world');
    })
}