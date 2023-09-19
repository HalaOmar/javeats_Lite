const order_services = require('../../order_service')
const res_wrapper = require('../../../Commons/http_res_wrapper');


exports.getDeliveryOrders = async ( req , res  ) =>{

    try {
      const orders = await  order_services.getDeliveryOrders()
      console.log(orders)
      res_wrapper.success( res , orders)

    } catch (error) {
        console.log(error)
        res_wrapper.error(res , { error })
        
    }
}

exports.getSales = async ( req , res  ) =>{

    try {
      const sales = await  order_services.getSales()

      res_wrapper.success( res , sales)

    } catch (error) {
        console.log(error)
        res_wrapper.error(res , { error })
        
    }
}
