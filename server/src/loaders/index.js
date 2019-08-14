const expressLoader = require('./express-loader');

module.exports = async (app) => {
    await expressLoader(app);
}