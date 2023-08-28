'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('non_customerUsers' , {
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false ,
            unique : true
        } ,
        username :{
            type : Sequelize.DataTypes.STRING,
            unique : true 
            },
        passwd :{
            type : Sequelize.DataTypes.STRING,
            unique : true,
        },
        phoneNumber :{
            type : Sequelize.DataTypes.STRING ,
            unique : true ,
            validate :{
                
            }
        },
        firstName :{
            type : Sequelize.DataTypes.STRING        
        },
        lastName :{
            type : Sequelize.DataTypes.STRING
        },
        city :{
            type : Sequelize.DataTypes.STRING
        },
        region:{
            type : Sequelize.DataTypes.STRING
        } ,
        street : {
            type : Sequelize.DataTypes.STRING
        },
        address :{
            type : Sequelize.DataTypes.STRING
        },
        group_code : {
            type : Sequelize.INTEGER
    
        },
        active : {
            type : Sequelize.BOOLEAN , 
            default : true
    
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
     
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('non_customerUsers');
     
  }
};
