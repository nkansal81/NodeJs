const Redis = require("ioredis");
const client = new Redis();

client.on("error", (err) => {
    console.log(err, 'err');
});

client.on("connect", () => {
    console.log('Redis connected');
});

client.on("disconnect", () => {
    console.log('Redis disconnected');
});

module.exports = {
    client
};