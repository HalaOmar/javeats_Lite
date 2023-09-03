const _ = require('lodash');
const order_services = require('../order_service');
const utils = require('../../Lib/utils')

exports.placeOrder = async ( req , res , next ) =>{

    try {
        const { restaurant_id  } = req.body 
        const Cart = req.session.cart
        paymentObject = await order_services.createPaymentObject( Cart , restaurant_id)
        req.paymentData = {
            paymentObject
        }
        next()    
        
    } catch (error) {
        console.error(error)
        res.json({error})
        
    }   

}

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
        console.error(error)
        res.json({
            error
        })
    }


}

exports.saveOrderToDatabase = async ( req , res , next) => {
    console.log( "cartDetails" , req.cartDetails)
    try {
        const {cart_owner , branches} = _.pick(req['payment']['cartDetails'] , ['cart_owner' , 'branches'])
        const restId = req.body.restaurant_id

        let OrdersIds = await 
                     order_services.saveOrderToDatabase(branches , cart_owner , restId)
        console.log('OrdersIds :>> ', OrdersIds);
        req['payment']['OrdersIds'] = OrdersIds
        next()
    } catch (error) {
        console.error(error)
        res.json({
            error
        })
        
    }
}

exports.placeSuccessOrder = ( req , res  ) =>{

    res.send("confirm order registration")

}