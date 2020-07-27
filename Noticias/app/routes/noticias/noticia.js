const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

module.exports = (app) => {

    app.get('/noticia', (req, res, next) => {

        NewsDAO.get().then(newsData => {

            res.render('noticias/noticia', {
                newsData
            });

        }).catch(error => {

            res.send(error);

        });

    });

};