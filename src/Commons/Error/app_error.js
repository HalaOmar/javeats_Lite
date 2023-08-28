const i18n = require('i18n');

class ApplicationException extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || 'Something went wrong. Please try again.';
    this.status = status || 500;
    this.code = 0;
  }
}

module.exports = ApplicationException;
