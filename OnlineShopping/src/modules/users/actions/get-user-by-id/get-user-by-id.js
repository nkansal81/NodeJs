const { Users } = require('../../../../db');
const { badRequestError } = require('../../../../error');

const getUserById = async (_id) => {
    const user = await Users.getUserById(_id, { password: 0 });
    if (!user) {
        new AppError('Error','Not found',"User Not Found",402,true);    }
    return user;
};

module.exports = {
    getUserById
};
