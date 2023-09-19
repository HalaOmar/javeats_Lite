const express = require('express');
const admin_router = express.Router()
const order_controller = require('./admin_order_controller')
const authentication_controller = require('../../../User Management/Authentication/auth_controller');


admin_router.route('/')
    .get(authentication_controller.isAdmin,
         order_controller.getSales)


module.exports = admin_router