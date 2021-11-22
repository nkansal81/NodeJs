// const dotenv = require('dotenv');
// const error = dotenv.config();
// if(error){
//     throw new Error(error.message);
// }

const {MONGO_URI,JWT_SECRET,PORT} = process.env;
const constants = {
    MONGO_URI,
    JWT_SECRET,
    PORT,
    JWT_EXP_TIME : 2000*60,
}

module.exports = {
    constants,
}