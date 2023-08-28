
const order_services = require('../order_service');
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

exports.placeSuccessOrder = ( req , res  ) =>{

    res.send("confirm order registration")

}