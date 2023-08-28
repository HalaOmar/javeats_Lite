const Restaurant = require('../../models/Restaurant')
const Error = require('../Commons/Error/Exceptions')
const item_dao = require('./item_dao')
const Cart = require('./Cart')
const { createHash } = require('crypto')
const { initialize } = require('passport')


exports.addItem = ( Item )=>{
        
    let { name , description , image , price } = Item

    if( !name || !description || !image || !price){

        throw new Error.InvalidInputException(`All Fields are required`)
    }

    return item_dao.addItem(Item)
}

exports.getItem = (req , res )=>{

}

exports.updateItem = (req , res )=>{

}

exports.deleteItem = (req , res )=>{

}

///////////////////////////////// CUSTOMER SERVICES /////////////////////////////////

exports.getAllCategoryItems = (categoryId , restaurant_id) =>{

   return item_dao.getAllCategoryItems(categoryId , restaurant_id)
}

exports.showItemDetails = ( itemId ) =>{
     return item_dao.showItemDetails( itemId )

}

exports.getUserCart = () =>{

}
exports.addItemToCart = ( session ,  cartId ,  item ) =>{
    let restaurantsLines ,cart
    let { restaurantId , userId , branchId } = cartId

    if(!session.cart){ 
            cart = new Cart( cartId )
            restaurantsLines = cart.restaurantsLines
            restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`].push(item)

            session.cart = cart
    }else {
       let cart =  session['cart'] ;
           cart = Object.assign(new Cart(cartId) , cart ) ; // as casting
           console.log(cart instanceof Cart)
           initializeRestaurantLineParts(cartId , cart)

        cart.restaurantsLines[restaurantId][branchId][userId].push(item)
        
           }

    return session.cart

}
exports.deleteItemFromCart = ( ) =>{

}


function initializeRestaurantLineParts({restaurantId , branchId , userId}  , cart ){
    // console.log(restaurantId)
    (typeof cart.restaurantsLines[`${restaurantId}`] == 'undefined') ?
    cart.initializeRestaurantLines({ restaurantId , userId , branchId }) :
    (typeof cart.restaurantsLines[`${restaurantId}`][`${branchId}`] == 'undefined') ?
    cart.initializeBranch({restaurantId , branchId ,userId}) :
    console.log(cart.restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`])
}