const router = require('express').Router()
const order_controller = require('./order_controller')
const invoice_controller = require('../../Invoice/User/invoice_controller');
const payment = require('../../Services/payment');

router.route('/placeOrder')
.post(
     order_controller.getCartDetails,
     order_controller.setDeliveryMethod,
     payment.createPaymentObject ,
     payment.payByPAYPAL,
     )

router.route('/successPayment')
.get( /*payment.successPay ,*/ 
      order_controller.getCartDetails,
      order_controller.createOrder , 
      order_controller.pushNotificationMessageToWaiter ,
      order_controller.sendNotificationMessageToWaiter) 

router.route('/failedPayment')
.get( order_controller.cancelOrder )

module.exports = router

