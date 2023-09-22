const Error = require('../Commons/Error/Exceptions')
const item_dao = require('./item_dao')
const Cart = require('./Cart')
const utils = require('../Lib/utils')
const Exceptions = require('../Commons/Error/Exceptions')



exports.addItem = ( Item )=>{
        
    let { name , description , image , price } = Item

    if( !name || !description || !image || !price){

        throw new Error.InvalidInputException(`All Fields are required`)
    }

    return item_dao.addItem(Item)
}

exports.getItemById = async ( item_id )=>{

    if (!item_id) {
        throw new Exceptions.InvalidInputException("System Error")
    }

    const result = await item_dao.getItemById(item_id)
    const item = utils.getData(result)
    return Promise.resolve(item)
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
exports.addItemToCart = ( session ,  cartData ,  item ) =>{
    let restaurantsLines ,cart
    let { restaurantId ,  branchId } = cartData
    if(!restaurantId || !branchId){
        throw new Exceptions.NotFoundException('System Error')
    }

    if(!session.cart){ 
            cart = new Cart( cartData )
            restaurantsLines = cart.restaurantsLines
            restaurantsLines[`${restaurantId}`][`${branchId}`].push(item)

            session.cart = cart
    }else {
       let cart =  session['cart'] ;
           cart = Object.assign(new Cart(cartData) , cart ) ; // as casting
           initializeRestaurantLineParts( cartData , cart)
           cart.restaurantsLines[`${restaurantId}`][`${branchId}`].push(item)
        
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
    cart.initializeBranch({restaurantId , branchId ,userId}) :''
}