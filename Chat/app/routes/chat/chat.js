module.exports = (app) => {

    app.post('/', (req, res, next) => {

        res.render('index');

    });

}