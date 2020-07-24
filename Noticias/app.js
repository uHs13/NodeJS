const app = require('./configuration/server');

app.listen(3000, () => {

    /**
    * https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    */
    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});