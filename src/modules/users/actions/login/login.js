const { compare } = require('bcrypt');
const { createToken } = require('../../services');
const { Users } = require('../../../../db');

const login = async (credentials) => {
    const user = await Users.getUser({ email: credentials.email }, { _id: 1, password: 1 });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isValid = await compare(credentials.password, user.password);
    if (!isValid) {
        throw new Error('Invalid credentials');
    }
    const token = await createToken(user._id);
    return { token };
};

module.exports = {
    login
};
