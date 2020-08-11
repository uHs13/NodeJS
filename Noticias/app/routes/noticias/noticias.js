const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

module.exports = (app) => {

    app.get('/noticias', (req, res, next) => {

        NewsDAO.getAll().then(newsData => {

            res.render('noticias/noticias', {
                newsData
            });

        }).catch(error => {

            res.send(error);

        });

    });

};