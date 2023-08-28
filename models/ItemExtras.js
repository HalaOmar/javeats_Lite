const Sequelize = require('sequelize');

const ItemExtras = sequelize.define('ItemExtras' , {
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        item_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false
        },
        extra_id :{
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
    timestamp :true ,
    createdAt: true ,
    updatedAt:true
});

module.exports = ItemExtras