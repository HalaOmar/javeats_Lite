
const item_services = require('../item_service')

exports.getItem = async (req , res ) =>{
    try {

        const itemId = req.body.itemId || undefined
        let item = await item_services.getItem(itemId)
        res.status(200).json({item})
        
    } catch (error) {
        res.json({error})
        
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
     
    let {  item_name , item_price} = req.body 
    let quantity = (req.body.quantity)
    item_price = (item_price)

    let item = {"name":item_name ,
                "price":item_price ,
                "currency": "EUR" ,
                 quantity}

    let cartData  = {
        restaurantId : req.body.restaurantId ,
        userId :       req.user ? req.user.id : null || req.sessionID , 
        branchId :     req.body.branchId 
                    }
                    
    let session = req.session

    let Op =  item_services.addItemToCart(session , cartData , item)
    res.status(200).json({Op})
        
    } catch (error) {
        console.log(error)
        res.json({error})
        
    }
}
exports.deleteItemFromCart = (itemId)=>{
    return item_services.deleteItemFromCart(itemId)
}

