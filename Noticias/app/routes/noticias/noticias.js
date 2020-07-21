const express = require('express');
const router = express.Router();
const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

router.get('/', (req, res, next) => {

    NewsDAO.getAll().then(newsData => {

        res.render('noticias/noticias', {
            newsData
        });

    }).catch(error => {

        res.send(error);

    });

});

router.get('/nova', (req, res, next) => {

    res.render('admin/nova');

});

module.exports = router;