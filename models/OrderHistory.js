const Sequelize = require('sequelize');


const OrdersHistory = sequelize.define('order_histories' , {
        index:{
            type : Sequelize.DataTypes.INTEGER ,
            autoIncrement:true
        },
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        order_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false 
            },
        status: {
            type : Sequelize.DataTypes.STRING ,
            allowNull : false
            
    },  updatedBy :{

            type : Sequelize.DataTypes.STRING ,

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

module.exports = OrdersHistory