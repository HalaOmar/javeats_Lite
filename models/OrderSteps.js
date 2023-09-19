const Sequelize = require('sequelize');


const OrderSteps = sequelize.define('order_steps' , {
        index:{
            type : Sequelize.DataTypes.INTEGER ,
            autoIncrement:true
        },
        step_id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        step_name :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false 
            },

        next_step_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false

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

module.exports = OrderSteps