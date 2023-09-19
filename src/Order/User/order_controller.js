const _ = require('lodash');
const order_services = require('../order_service');
const utils = require('../../Lib/utils');
const logger = require('../../Commons/logger/winstonlogger');
const res_wrapper = require('../../Commons/http_res_wrapper')


exports.getCartDetails =  (req , res , next ) =>{
    try {
        const { body , session } = req
        const  restId  = body.restaurant_id || req.cookies.restaurant_id
        const  cart  = session.cart 
        const  cartDetails = order_services.getCartDetails(cart , restId)
        console.log('cartDetails :>> ', cartDetails);

        req["payment"] = {
            "cartDetails" : cartDetails
        }
        
        next()
        
    } catch (error) {
        console.log(error)
        res_wrapper.error(res , error)
    }


}

exports.createOrder = async ( req , res , next) => {
    console.log( "cartDetails" , req.cartDetails)
    try {
        const {cookies , body ,payment} = req
        const restaurant_id = body.restaurant_id || cookies.restaurant_id
        const {cartDetails} = payment
        
        let OrdersIds = await
                     order_services.createOrder( cartDetails , restaurant_id)

        // res_wrapper.success( res , {OrdersIds})
        req["payment"]["OrdersIds"] = OrdersIds
        next()
    } catch (error) {
        console.log(error)
        res_wrapper.error( res , error)
        
    }
}

exports.cancelOrder = async ( req , res) =>{
    try {
        const {ordersIds} = req.cookies
        console.log("OrderIds",ordersIds)
        const op = await order_services.cancelOrder(ordersIds)

        op ? res_wrapper.success({message : 'order deleted successfully'}) :
             logger.warn({ message : 'Failed to delete order'})
    } catch (error) {
        res_wrapper.error( res , error)
    }

}
exports.pushNotificationMessageToWaiter = async ( req , res ,next ) =>{
    try {

    const orders = req.payment.OrdersIds
    const result = await order_services.pushNotificationMessageToWaiter(orders)
    // res_wrapper.success(res , { result})
        next()
    } catch (error) {
    res_wrapper.error(res , {error})   
    }
}

exports.sendNotificationMessageToWaiter =  ( req , res) =>{

    try {
        const orders = req.payment.OrdersIds
        order_services.sendNotificationMessageToWaiter(orders)
        res_wrapper.success(res , {msg : "delivery is notified"})
        
    } catch (error) {
        res_wrapper.error(res , { error})
    }

}