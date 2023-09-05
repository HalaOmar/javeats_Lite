const _ = require('lodash');
const order_services = require('../order_service');
const utils = require('../../Lib/utils');
const logger = require('../../Commons/logger/winstonlogger');
const res_wrapper = require('../../Commons/http_res_wrapper')


exports.getCartDetails = async (req , res , next ) =>{
    try {
        const  restId  = req.body.restaurant_id
        const  cart  = req.session.cart 
        const cartDetails = await order_services.getCartDetails(cart , restId)
        console.log('cartDetails :>> ', cartDetails);
        req["payment"] = {
            "cartDetails" : cartDetails
        }
        
        next()
        
    } catch (error) {
        res_wrapper.error(error)
    }


}

exports.saveOrderToDatabase = async ( req , res , next) => {
    console.log( "cartDetails" , req.cartDetails)
    try {
        const {cart_owner , branches} = _.pick(req['payment']['cartDetails'] , ['cart_owner' , 'branches'])
        const restId = req.body.restaurant_id

        let OrdersIds = await
                     order_services.saveOrderToDatabase(branches , cart_owner , restId)
        
        req['payment']['OrdersIds'] = OrdersIds
        
        next()
    } catch (error) {
        res_wrapper.error(error)
        
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
        res_wrapper.error(error)
    }

}
exports.placeSuccessOrder = ( req , res  ) =>{

    res.send("confirm order registration")

}