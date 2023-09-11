const models = require('../../models/index')
console.log('models :>> ', models.restaurant);
const Restaurant = models.restaurant
const Order = models.orders
const Invoice = models.invoices
const utils = require('../../src/Lib/utils');
const Exceptions = require('../Commons/Error/Exceptions');

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

exports.createOrder = async (order , invoice) =>{
    try {
        let createdInvoice , createdOrder 
        let invoices=[]

        const result = await sequelize.transaction(async (t) => {
      
          createdOrder = await Order.create(order, { transaction: t });
          createdOrder = utils.getData(createdOrder)
          
          if(!createdOrder.id){
            throw new Exceptions.NotFoundException('System Error')
          }
          invoice.map( async ({item_id , quantity , id }) => {
        
            createdInvoice = Invoice.create({
                "id" : id,
                "order_id" : createdOrder.id ,
                "item_id": item_id ,
                "quantity" : quantity

              }, { transaction: t });

              invoices.push(createdInvoice)
          });

          invoices = await Promise.all(invoices)
          
        });
        return Promise.resolve({ createdOrder , invoices}) ;
       
      } catch (error) {
       return Promise.reject(error)
      
      }
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

exports.cancelOrder = ( orderIds) =>{
   return Order.destroy({
        where : {
            id : orderIds
        }
    })
}

exports.updateOrderStatus = ( orderId) =>{
    
}