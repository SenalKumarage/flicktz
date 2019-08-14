const dotenv = require('dotenv');

// Setting the environment to development by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if(!env) {

    throw new Error('Environment not found');
}

module.exports = {

    port: process.env.PORT,

    api: {

        prefix: '/api'
    }
};
