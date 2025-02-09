// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Montujemy wszystkie trasy pod prefiksem /api/v1
app.use('/api/v1/', routes);

module.exports = app;
