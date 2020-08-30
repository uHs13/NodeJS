let app = require('./config/server');

app.listen(80, () => {

    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});