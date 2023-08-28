const Sequelize = require('sequelize');


const GroupRule = sequelize.define('groupRules' , {
    id :{
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    } , 
    role_code : {
        type : Sequelize.INTEGER ,
        unique : true
    },
    group_code : {
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

module.exports = GroupRule