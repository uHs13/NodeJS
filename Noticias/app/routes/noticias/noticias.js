const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.render('noticias/noticias');

});

router.get('/nova', (req, res, next) => {

    res.render('admin/nova');

});

module.exports = router;