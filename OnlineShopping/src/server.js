const { createServer } = require('http');
const { app } = require('./app');
const { connectToMongoDb } = require('./db');
const {constants} = require('./config');

connectToMongoDb();

const server = createServer(app);

app.get('/', (req,res) => {
    res.send(`<h1>API Running on port ${constants.PORT} </h1>`);
});

server.listen(constants.PORT, (err) => {
    if (err) {
        console.log(err, 'err');
    }
    console.log(`Server is listening on port ${constants.PORT}`);
});