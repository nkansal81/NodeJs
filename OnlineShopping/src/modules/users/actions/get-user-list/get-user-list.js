const { Users } = require('../../../../db');

const getUserList = () => Users.getUsers({}, { password: 0 });

module.exports = {
    getUserList
};
