const Sequelize = require('sequelize');


const Orders = sequelize.define('orders' , {
        index:{
            type : Sequelize.DataTypes.INTEGER ,
            autoIncrement:true
        },
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        user_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false 
            },

        restaurant_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false

        },
        branch_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false

        } ,
        delivery_address :{
            type : Sequelize.DataTypes.STRING          
        },
        estimated_delivery_time : {
            type : Sequelize.DataTypes.STRING
        },
        payment_method :{
            type : Sequelize.DataTypes.STRING
        },
        status : {
            type : Sequelize.DataTypes.STRING
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
    timestamp :true
});

module.exports = Orders