const order_services = require('../../order_service')
const res_wrapper = require('../../../Commons/http_res_wrapper');


exports.getAllOrdersByStatus = async ( req , res  ) =>{

  try {
      const status = req.query.status
      const orders = await  order_services.getAllOrdersByStatus(status)
      res_wrapper.success( res , orders)

    } catch (error) {
        console.log(error)
        res_wrapper.error(res , { error })
        
    }
}
