const { hash } = require('bcrypt');
const { createToken } = require('../../services');
// TODO:- discuss about absolute path and refactor this
const { Users } = require('../../../../db');
// const { setUserName } = require('../../../../db/redis');

const createUser = async (user) => {
    const userObj = await Users.getUser({ email: user.email }, { _id: 1 });
    if (userObj) {
        throw new Error('User already exists');
    }
    // await setUserName(user.username);
    const password = await hash(user.password, 10);
    const usr = Object.assign(user, { password });
    const savedUser = await Users.createUser(usr);
    const token = await createToken(savedUser._id);
    return { token };
};

module.exports = {
    createUser
};
