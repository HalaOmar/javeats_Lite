const order_services = require('../../order_service')
const res_wrapper = require('../../../Commons/http_res_wrapper');
const utils = require('../../../Lib/utils');


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

exports.getAllOrdersBy = async (req, res) => {

  try {
    const delivery_method = req.params.delivery_method
    const results = await order_services.getAllOrdersBy({ delivery_boy_id: delivery_method })
    console.log(results)
    res_wrapper.success(res , utils.getData(results))
    
  } catch (error) {
    res_wrapper.error(res , error)
    
  }

}

exports.deliverOrder = async ( req , res ) => {
  try {
    const {user , body} = req
    const delivery_id = user.id
    const order_id = body.order_id

    const result = await order_services.deliverOrder(delivery_id, order_id)
    res_wrapper.success(res , result)

  } catch (error) {
    res_wrapper.error(res , error)
    
  }
}
