const Sequelize = require('sequelize');


const Group = sequelize.define('groups' , {
    id :{
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    } , 
    name : {
        type : Sequelize.STRING ,
        unique : true
    },
    active : {
        type : Sequelize.BOOLEAN 
    },
    code : {
        type : Sequelize.INTEGER ,
        unique : true
    },
    createdAt : {
        type : Sequelize.DATE ,
        allowNull : false
    },
    updatedAt :{
        type : Sequelize.DATE , 
        allowNull : false
    }
    
});

module.exports = Group