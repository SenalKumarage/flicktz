const cors = require('cors');
const config = require('../config');
const routes = require('../api');

module.exports = (app) => {

    app.enable('trust proxy');

    app.use(cors());

    app.use(config.api.prefix, routes());

}

