const amqp = require('amqplib');
const  config = require('./config');

class Connection{

    channel 
   
    async createChannel(){

        const connection = await amqp.connect(config.rabbitMQ.URL)
        this.channel = await connection.createChannel()       
    }

    async createConnection(){

        if(!this.channel){
           await this.createChannel()
        }

    }
}

module.exports = Connection