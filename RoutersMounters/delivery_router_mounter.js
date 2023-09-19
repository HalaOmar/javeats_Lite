const passports = require('../src/User Management/Authentication/passport/passport_config')

module.exports = (app) => {
    
app.use('/api/v1/restaurants/dashboard/delivery' ,passports.nonCustomerPass.session(), require('../src/Restaurant/Dashboard/router'))
app.use('/api/v1/branches/dashboard/delivery' ,passports.nonCustomerPass.session(), require('../src/Branch/Dashboard/branch_router'))
app.use('/api/v1/items/dashboard/delivery' ,passports.nonCustomerPass.session(), 
require('../src/Item/Dashboard/item_router'))
app.use('/api/v1/orders/dashboard/delivery' , passports.nonCustomerPass.session(),
require('../src/Order/Dashboard/Delivery/delivery_order_router'))
}