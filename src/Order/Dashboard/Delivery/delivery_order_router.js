const express = require('express');
const delivery_router = express.Router()
const order_controller = require('./delivery_order_controller')
const authentication_controller = require('../../../User Management/Authentication/auth_controller');


delivery_router.route('/')
    .get(authentication_controller.isDelivery,
         order_controller.getDeliveryOrders)


module.exports = delivery_router