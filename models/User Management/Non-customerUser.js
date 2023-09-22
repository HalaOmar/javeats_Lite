const Sequelize = require('sequelize');
const { STRING } = Sequelize.DataTypes


const Non_customerUser = sequelize.define('non_customerUsers' , {
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
    },
    email: {
        type : STRING
    },
    restaurant_id: {
        type : STRING
    } ,
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
    group_code : {
        type : Sequelize.INTEGER ,
        required : true

    },
    active : {
        type : Sequelize.BOOLEAN , 
        default : true

    },
    createdAt : {
        type : Sequelize.DATE ,
        allowNull : false
    },
    updatedAt :{
        type : Sequelize.DATE , 
        allowNull : false
    }
    
});

module.exports = Non_customerUser