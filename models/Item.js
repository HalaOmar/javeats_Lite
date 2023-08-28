const Sequelize = require('sequelize');
const { STRING , DOUBLE } = Sequelize.DataTypes

const Item = sequelize.define('items' , {
        id :{
            type : STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        category_id :{

            type : STRING ,
            allowNull : false
        },
        menue_id :{
            type : STRING ,
            allowNull : false
        },
        name : {
            type : STRING
        },
        description:{
            type : STRING
        },
        price : {
            type : DOUBLE
        },
        image :{
            type : STRING
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

module.exports = Item