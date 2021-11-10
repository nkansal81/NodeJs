const { Users } = require('../../../../db');

const getUserById = async (_id) => {
    const user = await Users.getUserById(_id, { password: 0 });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

module.exports = {
    getUserById
};
