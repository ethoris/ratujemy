// backend/middleware/cacheMiddleware.js
const redisClient = require('../redisClient');

const cacheMiddleware = (cacheKey, ttlSeconds = 60) => {
  return async (req, res, next) => {
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        // Jeśli dane są w cache, wysyłamy je jako odpowiedź
        return res.status(200).json(JSON.parse(cachedData));
      }
      // Nadpisujemy res.send, aby zapisać wynik w cache przed wysłaniem odpowiedzi
      const originalSend = res.send.bind(res);
      res.send = async (body) => {
        // Zapiszemy body (upewnij się, że jest typu string lub skonwertuj go)
        await redisClient.setEx(cacheKey, ttlSeconds, body);
        originalSend(body);
      };
      next();
    } catch (error) {
      // Jeśli wystąpi błąd podczas pobierania z cache, kontynuujemy bez cache
      next();
    }
  };
};

module.exports = cacheMiddleware;
