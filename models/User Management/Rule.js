const Sequelize = require('sequelize');


const Rule = sequelize.define('rules' , {
    id :{
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    } , 
    name : {
        type : Sequelize.STRING ,
        unique : true
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

module.exports = Rule