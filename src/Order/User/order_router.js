const router = require('express').Router()
const order_controller = require('./order_controller')
const order_details_controller = require('../../OrderDetails/User/order_details_controller');
const payment = require('../../Services/payment');

router.route('/placeOrder')
.post(
     order_controller.getCartDetails ,
     order_controller.saveOrderToDatabase ,
     payment.createPaymentObject ,
     payment.payByPAYPAL,
     )

router.route('/successPayment')
.get( payment.successPay ,
      order_details_controller.createInvoice)

router.route('/failedPayment')
.get( order_controller.cancelOrder )

module.exports = router

