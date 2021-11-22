const { Users } = require("./controllers");
const {Products} = require('./controllers');
const { connectToMongoDb } = require("./connection");

module.exports = {
    Users,
    Products,
    connectToMongoDb
};
