const Sequelize = require('sequelize');

const UserGroup = sequelize.define('user_groups' , {
    id:{
        type : Sequelize.INTEGER ,
        primaryKey : true , 
        autoIncrement : true
    },
    user_id :{
        type : Sequelize.STRING ,
        ForignKey : true , 
    },
    group_id :{
        type : Sequelize.INTEGER ,
        ForignKey : true

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

module.exports = UserGroup