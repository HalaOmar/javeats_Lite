const router = require('express').Router()
const order_controller = require('./order_controller')
const payment = require('../../Services/payment');

router.route('/placeOrder')
.post(order_controller.placeOrder , payment.payByPAYPAL)
router.route('/successPayment')
.get(order_controller.placeSuccessOrder)
module.exports = router

