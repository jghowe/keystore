module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT || 6379,
    port: process.env.PORT || 3000
};