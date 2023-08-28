exports.Roles = {
  USER: 1,
  CELEBRITY: 2,
  SUPERVISOR: 3,
  ADMIN: 4,
};

exports.OtpTypes = {
  USER_CODE: 1,
};

exports.Locales = {
  ARABIC: 'ar',
  ENGLISH: 'en'
}

exports.MessageKeys = {
  INVALID_INPUT: 'INVALID_INPUT',
  INVALID_USERNAME_OR_PASSWORD : 'INVALID_USERNAME_OR_PASSWORD',
  INCORRECT_PASSWORD : 'INCORRECT_USERNAME',
  INVALID_MOBILE: 'INVALID_MOBILE',
  INVALID_OTP: 'INVALID_OTP',
  INVALID_ACCESS_TOKEN: 'INVALID_ACCESS_TOKEN',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  FIELD_IS_REQUIRED: 'FIELD_IS_REQUIRED',
  MOBILE_IS_REQUIRED: 'MOBILE_IS_REQUIRED',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
  YOUR_ACTIVATION_CODE_IS: 'YOUR_ACTIVATION_CODE_IS',
  ITEM_NOT_FOUND: 'ITEM_NOT_FOUND',
  FILE_IS_REQUIRED: 'FILE_IS_REQUIRED',
  PNG_ICON_ONLY_ALLOWED: 'PNG_ICON_ONLY_ALLOWED',
  ITEM_ALREADY_EXIST: 'ITEM_ALREADY_EXIST',
}

exports.NotifcationSendTypes = {
  OFF: 0,
  SMS: 1,
  FCM: 2,
  FCM_OR_SMS: 3,
  FCM_AND_SMS: 4
}