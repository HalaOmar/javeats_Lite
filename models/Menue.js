const Sequelize = require('sequelize');

const Menue = sequelize.define('menues' , {
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        restaurant_id :{

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

module.exports = Menue