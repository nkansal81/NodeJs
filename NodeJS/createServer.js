const http = require('http');

const requestListener = function (req, res) {
  console.log("Hello");
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8049);
