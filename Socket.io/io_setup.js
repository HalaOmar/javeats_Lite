const iosocket = require('socket.io')
const {
  cookieParserMiddelware,
  expressSessionMiddelware,
  initializePassportMiddelware,
  authenticateBySession
      } = require('./io_Middelwares');

exports.setServer = (server) => {
  
  const io = iosocket(server)
  
  io.of('/api/v1/orders/dashboard/waiter')
    .use(cookieParserMiddelware)
    .use(expressSessionMiddelware)
    .use(initializePassportMiddelware)
    .use(authenticateBySession)

    .on("connection", (socket) => {
        let loggedInUser
      if (typeof (socket.handshake.session.passport) != 'undefined') {
        let { user } = socket.handshake
        loggedInUser = user
        console.log(`user logged in `, loggedInUser)
      
        socket.on("message", msg => {
          console.log('msg :>> ', msg);
        })
      }
      else {
        io.isAuthenticated = false
        console.log(`io.isAuthenticated ${io.isAuthenticated}`)
      }
   })
 return io
}
