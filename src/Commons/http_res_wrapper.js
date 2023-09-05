const logger = require('./logger/winstonlogger');
const ApplicationException = require('./Error/app_error');

exports.success = (res, obj = null) => {
  if (obj) {
    res.status(200).send(obj);
  } else {
    res.status(200).send();
  }
};

exports.error = (res, error) => {
  logger.info(error);
  if (typeof (error) === 'object' && error instanceof ApplicationException) {
    res.status(error.status || 500).send({
      code: error.code,
      message: error.message,
    })
  } else {
    error = process.env.NODE_ENV !== 'production' ? error : {status: error.status || 500, message: "Excution Error!"};
    res.status(error.status || 500);
    res.send({
      message: error.message
    });
  }
};

exports.handle = (status, error, res) => {

  if (status === 500) {
    logger.error(error);
  }

  res.status(status).send(error);
};
