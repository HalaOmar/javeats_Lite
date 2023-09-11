const Connection = require('./connection')
const config = require('./config');

class Consumer{

    channel 

    async consumeMessage(routingKey , queueName){

        if(!this.channel){
            channel = new Connection()
        }
        const exchangeName = config.rabbitMQ.exchangeName
        await this.channel.assertExchange(exchangeName , 'direct')
        const queue = this.channel.assertQueue(queueName)
        await this.channel.bindQueue(queueName, exchangeName , routingKey )

        this.channel.consume(queueName , msg =>{
            let data =JSON.parse(msg.content)
            this.channel.ack(msg)
            console.log('data :>> ', data);
            
        })

    }
}

module.exports = Consumer