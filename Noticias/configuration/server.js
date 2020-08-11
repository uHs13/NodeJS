const express = require('express');
const path = require('path');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../app/res')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());

consign()
.include('./app/routes')
.into(app);

module.exports = app;