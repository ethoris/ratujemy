const { createClient } = require('redis');
const config = require('./config/env/development');

const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});

redisClient.connect().catch(console.error);

module.exports = redisClient;
