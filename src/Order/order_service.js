const order_dao = require('./order_dao')
const Cart = require('../Item/Cart')
const payment = require('../Services/payment')
const utils = require('../../src/Lib/utils')
const Exceptions = require('../Commons/Error/Exceptions')
const _ = require('lodash')

exports.getCartDetails = async ( cart , restId) =>{

   const userCart = Object.assign( new Cart({restId}) ,cart )
   const cart_owner = userCart.getCartOwner()
   const branches = userCart.getBranchesHaveOrdersFromCart(restId)
   const {items_line , total } =  order_dao.getItemsOfRestaurantLines(userCart , restId)
   
   return Promise.resolve({items_line ,total , cart_owner , branches}) 
}
exports.saveOrderToDatabase = async ( branches , cart_owner , restId ) =>{
console.log(`branches` , branches)
   let order ,orders_ids = [], orders =[]
   for (const branch_id of branches) {
      order =  order_dao.saveOrderPermenantly({branch_id , cart_owner , restId})
      orders.push(order)
   }

   orders = await Promise.all(orders)
   orders = utils.getData(orders)
   for (const order of orders) {   
       orders_ids.push ( order.id)
   }

   return orders_ids

}
exports.createPaymentObject = async (  restId ) => {
  
   const payPal_Credentials = await order_dao.getRestaurantPaymentData(restId) ;  
   return payment.createPaymentObject(payPal_Credentials)
   
}

