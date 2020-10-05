/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(80, function() {

	console.log('\x1b[35m%s\x1b[0m', 'Server Running');

});