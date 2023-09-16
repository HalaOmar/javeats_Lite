const cookieParser = require('cookie-parser');
const passports = require('../src/User Management/Authentication/passport/passport_config')
const expressSession = require('../src/Session/session_config')


module.exports.cookieParserMiddelware =  (socket, next) =>{
  let req = socket.handshake
  cookieParser()(req, {}, next)
}
module.exports.expressSessionMiddelware = (socket, next) => {
  let req = socket.handshake
  expressSession()(req, {}, next);
  }
  
module.exports.initializePassportMiddelware = (socket, next) => {
  let req = socket.handshake
   passports.nonCustomerPass.initialize()(req, {}, next)
}

module.exports.authenticateBySession = (socket, next) => {
  let req = socket.handshake
   passports.nonCustomerPass.session()(req, {}, next)
}
