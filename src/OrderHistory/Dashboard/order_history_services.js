const order_history_dao = require('./order_history_dao')

const utils = require('../../Lib/utils')
const Exceptions = require('../../Commons/Error/Exceptions')
const {uid} = require('uid');
const _ = require('lodash')
// const Producer = require('../Services/Notification/RabbitMQ/producer')
// const Consumer = require('../Services/Notification/RabbitMQ/consumer')
// const { notifyDelivery }= require('../../Socket.io/delivery_ioSocket')
// const { notifyWaiter } = require('../../Socket.io/waiter_ioSocket')

exports.addNextStepToOrderHistory = (orderId , next_status) => {
   
    const nextStep = {
        "id": uid(32),
        "order_id": orderId,
        "status": next_status, 
        "updatedBy": "Waiter",
        "createdAt": new Date(),
        "updatedAt": new Date()
   } 
   return  order_history_dao.addNextStepToOrderHistory(nextStep )
}