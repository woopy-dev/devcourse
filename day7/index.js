let server =require('./server');
let router = require('./router');
let requestHandler = require('./requsetHandler');

server.start(router.route, requestHandler.handle);