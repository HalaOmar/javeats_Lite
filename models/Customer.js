const Sequelize = require('sequelize');
const STRING    = Sequelize.DataTypes

const Customer = sequelize.define('customers' , {
    id :{
        type : STRING ,
        primaryKey : true ,
        allowNull : false ,
        unique : true
    } ,
    username :{
        type : STRING,
        unique : true 
        },
    passwd :{
        type : STRING,
        unique : true,
        validate: {
            len: [10, 30]
          }
    },
    phoneNumber :{
        type : STRING ,
        unique : true ,
        validate :{
            
        }

    },
    firstName :{
        type : STRING        
    },
    lastName :{
        type : STRING
    }
    ,
    email: {
        type: STRING
    },
    GPS :{
        type : STRING
    },
    city :{
        type : STRING
    },
    region:{
        type : STRING
    } ,
    street : {
        type : STRING
    },
    address :{
        type : STRING
    },
    createdAt : {
        type : Date.now() ,
        allowNull : false
    },
    updatedAt :{
        type : Date.now() , 
        allowNull : false
    }
} ,
{
    timestamp :true ,
    createdAt : true , 
    updatedAt : true
});

module.exports = Customer