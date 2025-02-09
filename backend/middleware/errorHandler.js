// backend/middleware/errorHandler.js

// Globalny middleware obsługujący błędy w Express
function errorHandler(err, req, res, next) {
    // Ustaw kod błędu – domyślnie 500
    const statusCode = err.status || 500;
  
    // Loguj błąd – tutaj możesz użyć np. Winston zamiast console.error
    console.error(err);
  
    // W środowisku deweloperskim możesz zwrócić stack trace, w produkcji nie
    const response = {
      message: err.message || 'Internal Server Error'
    };
  
    if (process.env.NODE_ENV === 'development' && err.stack) {
      response.stack = err.stack;
    }
  
    res.status(statusCode).json({ error: response });
  }
  
  module.exports = errorHandler;
  