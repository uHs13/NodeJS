const express = require('express');
const path = require('path');
const consign = require('consign');

const app = express();

app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');

consign()
.include('./app/routes')
.into(app);

module.exports = app;