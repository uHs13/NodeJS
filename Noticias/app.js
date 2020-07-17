let http = require('http');

let server = http.createServer((request, response) => {

    console.log(request.url);

    switch (request.url) {

        case '/technology':

            response.end('technology news');

            break;

        case '/economy':

            response.end('economy news');

            break;

        default:

            response.end('general news');

            break;

    }

});

server.listen(3000);