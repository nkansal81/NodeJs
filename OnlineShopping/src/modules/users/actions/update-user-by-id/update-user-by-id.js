const { Users } = require('../../../../db');

const updateUserById = async (_id, user) => {
    
    const userObj = await Users.getUserById(_id, { password: 0 });
    if (!userObj) {
        throw new Error('User not found');
    }
    await Users.updateUserById(_id, user);
    return Object.assign(userObj, user);
};

module.exports = {
    updateUserById
};
