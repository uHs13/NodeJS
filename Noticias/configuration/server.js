const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');

module.exports = app;