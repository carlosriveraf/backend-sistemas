/* const express = require('express'); */
const routes = require('../routes/index');

module.exports = app => {
    // Settings
    app.set('port', process.env.PORT || 3000);
   
    // Database conexion
    require('../database');

    // Routes
    routes(app);

    // Static files
    /* app.use('/public', express.static(path.join(__dirname, '../public'))); */

    return app;
}