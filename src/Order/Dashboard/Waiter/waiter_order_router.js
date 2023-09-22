const express = require('express');
const waiter_router = express.Router()
const order_controller = require('./waiter_order_controller')
const authentication_controller = require('../../../User Management/Authentication/auth_controller');


waiter_router.route('/')
    .get(authentication_controller.isWaiter,
         order_controller.getAllOrdersByStatus)


module.exports = waiter_router