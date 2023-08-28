const order_dao = require('./order_dao')
const Cart = require('../Item/Cart')
const payment = require('../Services/payment')


exports.createPaymentObject = async ( cart , restId ) => {
  
   const payPal_Credentials = await order_dao.getRestaurantPaymentData(restId) ;
   const userCart = Object.assign( new Cart({restId}) ,cart )
   const items_Lines = order_dao.getItemsOfRestaurantLines(userCart , restId)
   const permanentSaveForOrder =await order_dao.saveOrderPermenantly(cart , restId)
   return payment.createPaymentObject(payPal_Credentials , items_Lines)
   return Promise.resolve(items_Lines)
}

