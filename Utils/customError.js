
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
    }
  }


  class NotFoundError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = 404;
      }
  }
  
  module.exports = {
    ValidationError,
    NotFoundError,
  };