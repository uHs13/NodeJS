const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {

    res.render('home/index');

});

app.get('/noticias', (req, res, next) => {

    res.render('noticias/noticias')

});

app.get('/noticias/nova', (req, res, next) => {

    res.render('admin/nova');

});

app.listen(3000, () => {

    /**
     * https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
     */
    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});