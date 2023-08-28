const Sequelize = require('sequelize');


const Rating = sequelize.define('rating' , {
    id :{
        type : Sequelize.DataTypes.INTEGER ,
        autoIncrement : true ,
        primaryKey : true ,
        allowNull : false
    } ,
        item_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false
            },

        user_id :{

            type : Sequelize.DataTypes.STRING ,

        },
        rate :{
            type : Sequelize.DataTypes.TINYINT
            
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

module.exports = Rating