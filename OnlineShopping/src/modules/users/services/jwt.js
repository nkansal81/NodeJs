const {sign} = require('jsonwebtoken');
const {constants} = require('../../../config');

const createToken = (userId) => {
    return sign({id:userId,time:Date.now()},constants.JWT_SECRET,{expiresIn : constants.JWT_EXP_TIME})
}

module.exports = {
    createToken,
}