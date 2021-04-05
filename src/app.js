const express = require('express');
const routes = require('./routes');

const app = express();

// Settings
app.set('port', process.env.PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

module.exports = app;