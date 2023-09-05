const router = require('express').Router()
const order_controller = require('./order_controller')
const invoice_controller = require('../../Invoice/User/invoice_controller');
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
      invoice_controller.createInvoice)

router.route('/failedPayment')
.get( order_controller.cancelOrder )

module.exports = router

