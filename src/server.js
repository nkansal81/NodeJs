const { createServer } = require('http');
const { app } = require('./app');
const { connectToMongoDb } = require('./db');

connectToMongoDb();

const server = createServer(app);

server.listen(8080, (err) => {
    if (err) {
        console.log(err, 'err');
    }
    console.log('Server is listening on port 8080');
});