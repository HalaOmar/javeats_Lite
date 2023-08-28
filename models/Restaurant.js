const Sequelize = require('sequelize');


const Restaurant = sequelize.define('restaurant' , {
    id :{
        type : Sequelize.DataTypes.STRING,
        primaryKey : true ,
        allowNull : false
    } ,
        rest_name :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false ,
            unique : true
            },

        image :{

            type : Sequelize.DataTypes.STRING ,

        },
        food_type :{
            type : Sequelize.DataTypes.STRING
            
        },
        payPal_id : {
            type : Sequelize.DataTypes.STRING ,
            allowNull : false ,
            UNIQUE : true
        },
        payPal_secret : {
            type : Sequelize.DataTypes.STRING ,
            allowNull : false ,
            UNIQUE : true
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

module.exports = Restaurant