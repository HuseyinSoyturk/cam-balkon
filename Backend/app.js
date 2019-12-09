const http = require('http')

const srv = http.createServer( function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('CAM BALKON BACKEND');
    res.end();
}).listen(6161);

