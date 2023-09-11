const Connection = require('./connection')
const config = require('./config');
const utils = require('../../../Lib/utils');

class Producer{

    channel 

    async initializeChannel(){
        
        const connection = new Connection()
        await  connection.createConnection()
        this.channel = connection.channel
    }

    async publishMessage(routingKey , message){
        await this.initializeChannel()
        const exchangeName = config.rabbitMQ.exchangeName
        await this.channel.assertExchange(exchangeName , 'direct')

        const orderDetails = {
            logType : routingKey , 
            message : message ,
            dateTime : utils.dateFormat()
        }
        console.log("orderDetails" , orderDetails)
        const result = await this.channel.publish(exchangeName , routingKey , 
            Buffer.from(JSON.stringify(orderDetails)))
            return orderDetails
    }
}

module.exports = Producer