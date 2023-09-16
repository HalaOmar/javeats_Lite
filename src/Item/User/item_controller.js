
const item_services = require('../item_service')
const http_res = require('../../Commons/http_res_wrapper');
const _ = require('lodash');

exports.getItem = async (req , res ) =>{
    try {

        const itemId = req.body.itemId || undefined
        let item = await item_services.getItem(itemId)
        http_res.success(res ,{item})
        
    } catch (error) {
        http_res.error(res ,{error})
        
    }

}
/////////////////////// Customer Services ///////////////////////////////////////
exports.getAllCategoryItems = (categoryId) =>{
    return item_services.getAllCategoryItems(categoryId)
}

exports.showItemDetails = (itemId) =>{
    return item_services.showItemDetails(itemId)
}

exports.getUserCart = (cartId)=>{
    return item_services.getUserCart(cartId)
}
exports.addItemToCart =  ( req , res )=>{

    try {
    const { session , body , user } = req
    const { item_id, item_name , item_price ,quantity} = body 

    const item = {
                "item_id":item_id,
                "name"   :item_name ,
                "price"  :item_price ,
                "currency": "EUR" ,
                "quantity" : quantity}

    const cartData  = _.pick(body , ['restaurantId' , 'branchId'])
    user ? cartData['userId'] = user.id : cartData['userId'] = req.sessionID     
    const Op =  item_services.addItemToCart(session , cartData , item)

    res.cookie('restaurant_id',cartData['restaurantId']) 
    http_res.success(res ,{Op})
        
    } catch (error) {
        console.log(error)
        http_res.error(res ,{error})
        
    }
}
exports.deleteItemFromCart = (itemId)=>{
    return item_services.deleteItemFromCart(itemId)
}

