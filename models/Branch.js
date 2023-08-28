const Sequelize = require('sequelize');
const { STRING , INTEGER } = Sequelize.DataTypes

const Branch = sequelize.define('branches' , {
    id :{
        type : STRING ,
        allowNull : false ,
        autoIncrement :true,
        primaryKey : true
    },
    restaurant_id :{
        type : STRING
    },
    city :{
        type : STRING
    },
    region :{
        type : STRING
    },
    street :{
        type : STRING
    },
    address : {
        type : STRING
    },
    GPS :{
        type : STRING ,
        unique : true
    },
    phoneNumber : {
        type : STRING ,
        unique : true
    },
    createdAt : {
        type : Date.now() ,
        allowNull : false
    },
    updatedAt :{
        type : Date.now() , 
        allowNull : false
    }
  
});

module.exports = Branch