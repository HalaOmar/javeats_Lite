const models = require('../../models/index')
console.log('models :>> ', models.restaurant);
const Restaurant = models.restaurant
const Order = models.orders
const uid = require('uid');
const utils = require('../../src/Lib/utils')

exports.getRestaurantPaymentData = ( restaurantId ) =>{

    return Restaurant.findAll({
        where:{
            id : restaurantId
        }
    })

}

exports.getItemsOfRestaurantLines = ( Cart ,  restaurantId) =>{
    const itemsLineAndTotal =  Cart.getItemsOfRestaurantLine(restaurantId)
    return itemsLineAndTotal
}

exports.saveOrderPermenantly = ({branch_id , cart_owner , restId} ) =>{

    return Order.create({
        id : uid.uid(32) ,
        restaurant_id : restId ,
        branch_id : branch_id ,
        user_id : cart_owner,
        payment_method : 'payPal'
    })
}

exports.getRestaurantPaymentData = async (restId) =>{
    let res = await Restaurant.findAll({
       where :{
        id : restId
    } 
    })
    res = utils.getData(res)[0]

    return Promise.resolve( {
        'payPal_id' : res.payPal_id ,
        'payPal_secret' : res.payPal_secret
    })
}