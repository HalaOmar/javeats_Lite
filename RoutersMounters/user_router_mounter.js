
module.exports = (app) => {
    app.use('/api/v1/items/customer' , require('../src/Item/User/item_router'))
    app.use('/api/v1/orders/customer' , require('../src/Order/User/order_router'))
    app.use('/api/v1/restaurants/customer/googleMap' , require('../src/Services/google_maps'))
}