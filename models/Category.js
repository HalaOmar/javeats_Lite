const Sequelize = require('sequelize');



const Category = sequelize.define('categories' , {
    id :{
        type : Sequelize.DataTypes.INTEGER ,
        allowNull : false ,
        autoIncrement :true,
        primaryKey : true
    },
    name :{
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
  
});

module.exports = Category