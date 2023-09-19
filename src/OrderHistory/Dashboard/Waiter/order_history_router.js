const router = require('express').Router()
const order_history_controller = require('./order_history_controller')

router.route('/:order_id').
    post(order_history_controller.addOrderState).
    get(order_history_controller.getOrderHistory).
    delete(order_history_controller.deleteOrderHistory)

router.route('/:filter').
    get(order_history_controller.getOrdrsByFilter)

module.exports = router

