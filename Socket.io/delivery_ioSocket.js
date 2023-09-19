const ws = global.io
const deliveryNameSpace = ws.of("/api/v1/orders/dashboard")
const UnderProccessingOrdersQueueConsumer = require('../src/Services/Notification/RabbitMQ/consumer')


deliveryNameSpace.on("connection", async ( socket ) => {
  /* call massages consumer of rabbitMQ */
  const consumer = new UnderProccessingOrdersQueueConsumer()
  const msg = await consumer.consumeMessage("under processing", "under_processing")
  socket.emit("queued orders" , { msg })
})
exports.notifyDelivery = ( order ) =>{
  deliveryNameSpace.emit('new order' , order)
}


