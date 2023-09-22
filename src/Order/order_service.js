const order_dao = require('./order_dao')
const Cart = require('../Item/Cart')
const payment = require('../Services/payment')
const utils = require('../../src/Lib/utils')
const Exceptions = require('../Commons/Error/Exceptions')
const {uid} = require('uid');
const _ = require('lodash')
const Producer = require('../Services/Notification/RabbitMQ/producer')
const Consumer = require('../Services/Notification/RabbitMQ/consumer')
const { notifyDelivery }= require('../../Socket.io/delivery_ioSocket')
const { notifyWaiter } = require('../../Socket.io/waiter_ioSocket')


exports.getCartDetails =  ( cart , restId) =>{
   if(!cart) {
      throw new Exceptions.NotFoundException('CART IS EMPTY')
   } 
   const userCart = Object.assign( new Cart({restId}) ,cart )
   const cart_owner = userCart.getCartOwner()
   const branches = userCart.getBranchesHaveOrdersFromCart(restId)
   const {items_line , total } =  order_dao.getItemsOfRestaurantLines(userCart , restId)
   
   return {items_line ,total , cart_owner , branches , userCart}
}

exports.createOrder = async ( cartDetails , restId ,delivery_method) =>{

   let order ,
   orders = []
   console.log(cartDetails)
   const {cart_owner , branches , userCart  } = cartDetails

   if(!branches || !cart_owner || !restId){
      // console.log(cart_owner , restId)
      throw new Exceptions.NotFoundException('SYSTEM ERROR')
   }
  
   for (const branchId of branches) {
      order = {
         id : uid(32) ,
         restaurant_id : restId ,
         branch_id : branchId ,
         user_id : cart_owner,
         payment_method : 'payPal',
         status: 'waiting',
         delivery_boy_id : delivery_method 
     }

      invoice = prepareInvoiceOfEachBranch(userCart, restId, branchId)
      let order_history = {
         id: uid(32),
         status: 'waiting',
         updatedBy:'customer'
      }
      order = order_dao.createOrder(order , invoice , order_history)
      orders.push(order)
   }

 
   let rs = await  Promise.all(orders)
   // console.log('resolved_orders' ,rs)
   return Promise.resolve(rs) 

}
exports.createPaymentObject = async ( restId ) => {

   if(!restId){
      throw new Exceptions.NotFoundException('SYSTEM ERROR')
   }
   const payPal_Credentials = await order_dao.getRestaurantPaymentData(restId) ;  
   return payment.createPaymentObject(payPal_Credentials)
   
}

exports.cancelOrder = ( orderIds) =>{

   if(!orderIds){
      throw new Exceptions.NotFoundException('System Error')
   }

   return order_dao.cancelOrder(orderIds)
}

function prepareInvoiceOfEachBranch( cart , restId , branchId){
   
 const branch_items_line = cart.getOrdersOfRestBranch(restId , branchId)

 let invoice = branch_items_line.map(item => ({
   "id": uid(32),
   "item_id":item.item_id ,
   "quantity": item.quantity,
   "price":item.price })
   )

   return invoice
}

exports.pushNotificationMessageToWaiter = async ( orders  ) =>{

   if(!orders){
      throw new Exceptions.NotFoundException(`order is ${orders} `)
   }
   const producer = new Producer()
   console.log("producer =>",producer)
   let result = await producer.publishMessage('waiting' , orders)
   return result

}

exports.sendNotificationMessageToWaiter = async ( orders  ) =>{

   if(!orders){
      throw new Exceptions.NotFoundException(`order is ${orders} `)
   }
   notifyWaiter(orders)  

}


exports.getWaitingOrders = async ( ) => {
  
   const consumer = new Consumer()
   const msg = await consumer.consumeMessage( 'waiting' , 'waiting_orders')
   return msg

}

exports.getAllOrdersByStatus = async (status) => {
   const result = await order_dao.getAllOrdersByStatus(status)
   const waitingOrders = utils.getData(result)
   return Promise.resolve(waitingOrders)
}

exports.getAllOrdersBy = (selection_criteria) => {
   return order_dao.getAllOrdersBy(selection_criteria)
}

exports.deliverOrder = async (delivery_id, order_id) => {
   const newlyData = { 'delivery_boy_id': delivery_id }
   const updateCriteria = { 'id': order_id }
   
   const result = await order_dao.deliverOrder(newlyData, updateCriteria)
   if (!result) {
      throw new Exceptions.NotFoundException('Something Error try again')
   }

   return Promise.resolve(result)
   
}