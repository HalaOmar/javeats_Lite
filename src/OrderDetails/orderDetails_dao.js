const models = require('../../models/index')
const OrderDetails = models.order_details

exports.getSalesFromTo = (  { from , to } )=>{
    //get all orders created at = [from , to]
    //group by itemId and createdAt 
    //sum (quentity X price)
    //order By sum

}

exports.getBestSellerFromTo = ( { from , to } ) =>{
    //get all orders created at = [ from , to ]
    //group by itemId 
    //sum quentity 
    

}