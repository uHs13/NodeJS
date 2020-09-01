module.exports = (app) => {

    app.get('/chat', (req, res, next) => {

        res.render('chat');

    });

}