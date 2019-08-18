const dotenv = require('dotenv');

// Setting the environment to development by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (!env) {

    throw new Error('Environment not found');
}

/**
 * This file contains all the config values
 * important: secrets are not directly included here, include the secrets in .env file
 */
module.exports = {

    port: process.env.PORT,

    api: {

        prefix: '/api'
    },

    flickrApi: process.env.FLICKR_API_KEY
};
