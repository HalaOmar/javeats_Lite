const ws = global.io
const waiterNameSpace = ws.of("/api/v1/orders/dashboard/waiter")
const deliveryNameSpace = ws.of("/api/v1/orders/dashboard/delivery")
const WaitingOrdersQueueConsumer = require('../src/Services/Notification/RabbitMQ/consumer')
const order_history_services = require('../src/OrderHistory/Dashboard/order_history_services')


waiterNameSpace.on("connection", async ( socket ) => {
  /* call massages consumer of rabbitMQ */
  const consumer = new WaitingOrdersQueueConsumer()
  const msg = await consumer.consumeMessage("waiting", "waiting_orders")
    socket.emit("queued orders", { msg } )
    
socket.on("order underprocessing", async (order) => {
    const result = await order_history_services.addNextStepToOrderHistory(order.order_id , 'under processing')
    if (result) {
        deliveryNameSpace.emit("new order under processing" , order)
        socket.emit("confirm under processing order", { orderId: order.id })
        
    }
})
})
exports.notifyWaiter = ( order ) =>{
  waiterNameSpace.emit('new order' , order)
}


