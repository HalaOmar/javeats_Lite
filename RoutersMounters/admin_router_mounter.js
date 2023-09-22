const passports = require('../src/User Management/Authentication/passport/passport_config')


module.exports = (app) => {
    app.use('/api/v1/restaurants/dashboard' ,passports.nonCustomerPass.session(), 
    require('../src/Restaurant/Dashboard/router'))
    app.use('/api/v1/branches/dashboard' ,passports.nonCustomerPass.session(), 
    require('../src/Branch/Dashboard/branch_router'))
    app.use('/api/v1/items/dashboard' ,passports.nonCustomerPass.session(), 
    require('../src/Item/Dashboard/item_router'))
    app.use('/api/v1/orders/dashboard/' , passports.nonCustomerPass.session(),
    require('../src/Order/Dashboard/Admin/admin_order_router'))
    app.use('/api/v1/invoices/dashboard/' , passports.nonCustomerPass.session(),
    require('../src/Invoice/Dashboard/invoice_router'))
}