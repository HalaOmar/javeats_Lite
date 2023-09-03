const orderDetails_dao = require('./orderDetails_dao');

exports.sales = ( ) =>{
    orderDetails_dao.getSalesOnThisDate()
}