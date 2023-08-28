const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const logger = require('../src/Commons/logger/winstonlogger')

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
    host:config.host ,
    dialect:config.dialect ,
    logging: msg => logger.debug(msg)
})


try {
  sequelize.authenticate().
  then(done => console.log('Connection has been established successfully.'));
  
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

global.sequelize = sequelize