const app = require('./configuration/server');

const homeRouter = require('./app/routes/home/home');
const newsRouter = require('./app/routes/noticias/noticias');

app.use('/', homeRouter);
app.use('/noticias', newsRouter);

app.listen(3000, () => {

    /**
    * https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    */
    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});