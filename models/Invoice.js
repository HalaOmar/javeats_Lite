const Sequelize = require('sequelize');


const Invoice = sequelize.define('invoices' , {
    id :{
        type : Sequelize.DataTypes.STRING ,
        primaryKey : true ,
        allowNull : false
    } ,
        user_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false
            },

        order_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false

        },
        item_id :{
            type : Sequelize.DataTypes.STRING          
        },
        quentity : {
            type : Sequelize.DataTypes.INTEGER
        } ,
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

module.exports = Invoice