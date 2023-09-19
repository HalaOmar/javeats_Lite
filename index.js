require('dotenv').config('./');
require('./database/connect')
const passports = require('./src/User Management/Authentication/passport/passport_config')
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const i18n = require('i18n');
const passport = require('passport');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const boolParser = require('express-query-boolean');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const app = express()
const server = require('http').createServer(app);
const io = require('./Socket.io/io_setup').setServer(server)
global.io = io



const logger = require('./src/Commons/logger/winstonlogger');

app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./src/Session/session_config')())
app.use((req ,res ,next) =>{console.log(req.session) ; next()})
app.use('/api/v1/customer' ,passports.appPass.initialize())
app.use('/api/v1/dashboard/non-customer' , passports.nonCustomerPass.initialize())
// app.use( passports.appPass.session())
app.use( passports.nonCustomerPass.session())


i18n.configure({
  locales: ['ar', 'en'],
  directory: __dirname + '/../locales',
  defaultLocale: 'ar'
});

app.use(i18n.init);
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.json({limit : "100KB"})) //parses incoming requests with JSON payloads

//Dashboard APIs

app.use('/api/v1/dashboard/non-customer' , require('./src/User Management/DashBoard/User/dashboard_router'))

// Delivery Dashboard
require('./RoutersMounters/delivery_router_mounter')(app)

// Waiter Dashboard
require('./RoutersMounters/waiter_router_mounter')(app)

// Admin Dashboard
require('./RoutersMounters/admin_router_mounter')(app)

//Customer API 
require('./RoutersMounters/user_router_mounter')(app)



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', 0);
    next();
  });


server.listen('3000' , ()=>{
    console.log('server running on port :>> ', process.env.PORT);
})