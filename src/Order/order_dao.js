const models = require('../../models/index')
console.log('models :>> ', models.restaurant);
const Restaurant = models.restaurant
const Order = models.orders
const uid = require('uid');

exports.getRestaurantPaymentData = ( restaurantId ) =>{

    return Restaurant.findAll({
        where:{
            id : restaurantId
        }
    })

}

exports.getItemsOfRestaurantLines = ( Cart ,  restaurantId) =>{
    const itemsLine =  Cart.getItemsOfRestaurantLine(restaurantId)
    return itemsLine
}

exports.saveOrderPermenantly = (cart , restId ) =>{

    return Order.create({
        id : uid.uid(32) ,
        restaurant_id : restId ,
        branch_id : Object.keys(cart.restaurantsLines[`${restId}`])[0] ,
        user_id : '66666666666666666',
        payment_method : 'payPal'
    })
}