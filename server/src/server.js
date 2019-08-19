const express = require('express');
const config = require('./config');
const app = express();

const startServer = async () => {

    // This will load all the loaders
    await require('./loaders')(app);

    app.listen(config.port, err => {

        if (err) {
            process.exit(1);
            return;
        }

        console.log(`Server running on port ${config.port} ...`);
    });
}

startServer();

module.exports = app;
