const redisClient = require('../config/cache.config');

module.exports = (req, res, next) => {
  const key = req.originalUrl;

  redisClient.get(key).then((cachedData) => {
    if (cachedData) {
      res.json(JSON.parse(cachedData));
    } else {
      res.sendResponse = res.json;
      res.json = (body) => {
        redisClient.setEx(key, 3600, JSON.stringify(body)); // Cache na 1h
        res.sendResponse(body);
      };
      next();
    }
  }).catch((err) => {
    console.error('Redis error:', err);
    next();
  });
};
