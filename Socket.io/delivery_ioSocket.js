const ws = global.io
const deliveryNameSpace = ws.of("/api/v1/orders/dashboard")

exports.notifyDelivery = ( order ) =>{
  deliveryNameSpace.emit('new order' , order)
}


