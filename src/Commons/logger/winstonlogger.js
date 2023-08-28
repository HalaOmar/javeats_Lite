const { createLogger, format, transports, error } = require('winston');
const utils = require('../../Lib/utils');
require('winston-mongodb')


const myFormat = format.combine(
  format.printf(info => `${info.level}: ${utils.dateFormat()}: ${info.message}`),
)

const mongodb_options = {
  level: 'info',
  db : 'mongodb://localhost:27017/javeats_lite',
  options: {
      useUnifiedTopology: true
  },
  collection: 'Logs',
  format: myFormat
}
const logger = createLogger({
    level: 'info' ,
    format:myFormat,
    transports: [

    //Console transport
    new transports.Console({ level: 'error' , format : myFormat }),

    // File transport
    new transports.File({ filename: 'combined.log', level: 'warn' })
    ,
    //Mongo transport
    new transports.MongoDB(mongodb_options)
    
  ]
});



module.exports = logger