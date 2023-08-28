const Sequelize = require('sequelize');
const {INTEGER , STRING } = Sequelize.DataTypes

const Extra = sequelize.define('extra' , {
    id :{
        type : INTEGER ,
        allowNull : false ,
        autoIncrement :true,
        primaryKey : true
    },
    item_id :{
        type :STRING(255) ,
        allowNull :false
    },
    order_id : {
        type : STRING(255) ,
        allowNull : false
    },
    extra : {
      type : Sequelize.STRING , 
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
});

module.exports = Extra