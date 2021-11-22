const { compare } = require('bcrypt');
const { createToken } = require('../../services');
const { Users } = require('../../../../db');
const { badRequestError } = require('../../../../error');

const login = async (credentials) => {
    const user = await Users.getUser({ email: credentials.email }, { _id: 1, password: 1 });
    if (!user) {
        throw badRequestError('Invalid Credentials');
    }
    const isValid = await compare(credentials.password, user.password);
    if (!isValid) {
        throw badRequestError('Invalid Credentials');
    }
    const token = await createToken(user._id);
    return { token };
};

module.exports = {
    login
};
