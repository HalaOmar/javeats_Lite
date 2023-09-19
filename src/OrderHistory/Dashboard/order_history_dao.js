const models = require('../../../models/index')
const OrderHistory = models.order_histories


exports.addNextStepToOrderHistory=(nextStep) => {
    
   return OrderHistory.create(nextStep)
}