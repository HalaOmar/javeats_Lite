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
const logger = require('./src/Commons/logger/winstonlogger')


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
// app.use((req ,res ,next) =>{console.log(req.session) ; next()})

// app.use(boolParser());

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
// app.use('/api/v1/dashboard/group' , require('./src/User Management/DashBoard/Group/group_router'))
// app.use('/api/v1/dashboard/role' , require('./src/User Management/DashBoard/Rule/role_router'))
// app.use('/api/v1/dashboard/group-rules' , require('./src/User Management/DashBoard/group-rules/router'))
// app.use('/api/v1/dashboard/group-users' , require('./src/User Management/DashBoard/group-users/router'))

app.use('/api/v1/restaurants/dashboard' ,passports.nonCustomerPass.session(), require('./src/Restaurant/Dashboard/router'))
app.use('/api/v1/branches/dashboard' ,passports.nonCustomerPass.session(), require('./src/Branch/Dashboard/branch_router'))
app.use('/api/v1/items/dashboard' ,passports.nonCustomerPass.session(), require('./src/Item/Dashboard/item_router'))

//Customer API 
app.use('/api/v1/items/customer' , require('./src/Item/User/item_router'))
app.use('/api/v1/orders/customer' , require('./src/Order/User/order_router'))
app.use('/success' , (req , res , next ) =>{ console.log(req.body)})
app.use('/cancel' , (req , res , next ) =>{ console.log(req.body)})
app.use('/api/v1/restaurants/customer/googleMap' , require('./src/Services/google_maps'))



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


app.listen('3000' , ()=>{
    console.log('server running on port :>> ', process.env.PORT);
})