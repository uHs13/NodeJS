const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

module.exports = (app) => {

    app.get('/', (req, res, next) => {

        NewsDAO.get5Last().then(newsData => {

            res.render('home/index', {
                newsData
            });

        }).catch(error => {

            res.send(error);

        });

    });

};