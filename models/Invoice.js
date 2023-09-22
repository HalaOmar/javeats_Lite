const Sequelize = require('sequelize');


const Invoice = sequelize.define('invoices' , {
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
        item_id :{
            type : Sequelize.DataTypes.STRING          
        },
        quantity : {
            type : Sequelize.DataTypes.INTEGER
        },
        price : {
            type : Sequelize.DataTypes.DOUBLE
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