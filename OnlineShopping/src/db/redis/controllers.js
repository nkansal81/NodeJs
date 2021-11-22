const { client } = require('./connection');

const getUserName = () => client.hgetall('username');
const setUserName = (userName) => {
    const usernames = getUserName();
    return client.hmset('username', Object.assign(usernames, { [userName]: true }));
};


module.exports = {
    setUserName,
    getUserName
};