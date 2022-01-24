const {constants} = require("../config"); 
const mongoose = require("mongoose");

const connectToMongoDb = () => {
    mongoose.connect(constants.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("connected", () => {
        console.log("MongoDb connected on port 27017");
    });
    mongoose.connection.on("error", (err) => {
        console.log(`An error occurred. ERROR: ${err}`);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("MongoDb disconnected!");
    });
};

module.exports = {
    connectToMongoDb
};
