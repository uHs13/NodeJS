const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

module.exports = (app) => {

    app.get('/noticia/:id', (req, res, next) => {

        NewsDAO.get(req.params.id).then(newsData => {

            res.render('noticias/noticia', {
                newsData
            });

        }).catch(error => {

            res.send(error);

        });

    });

};