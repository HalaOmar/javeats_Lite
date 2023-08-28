const i18n = require('i18n');
const { MessageKeys } = require('./constants');
const ApplicationException = require('./app_error');

class InvalidInputException extends ApplicationException {
  constructor(message) {
    super(message || i18n.__(MessageKeys.INVALID_INPUT), 400);
  }
}

class InvalidUserNameOrPasswordException extends ApplicationException {
  constructor(message) {
    super(message || i18n.__(MessageKeys.INVALID_USERNAME), 400);
  }
}

class InvalidMobileNumberException extends ApplicationException {
  constructor(message) {
    super(message || i18n.__(MessageKeys.INVALID_MOBILE), 400);
  }
}

class InvalidMobileNumberOrPasswordException extends ApplicationException {
  constructor(message) {
    super(message || 'Invalid mobile or password', 401);
  }
}

class UserNotFoundException extends ApplicationException {
  constructor(message) {
    super(message || i18n.__(MessageKeys.USER_NOT_FOUND), 404);
  }
}

class NotFoundException extends ApplicationException {
  constructor(message) {
    super(message || i18n.__(MessageKeys.ITEM_NOT_FOUND), 404);
  }
}

module.exports = {
  InvalidInputException: InvalidInputException,
  InvalidUserNameOrPasswordException,
  InvalidMobileNumberException: InvalidMobileNumberException,
  InvalidMobileNumberOrPasswordException: InvalidMobileNumberOrPasswordException,
  UserNotFoundException: UserNotFoundException,
  NotFoundException: NotFoundException,
};
