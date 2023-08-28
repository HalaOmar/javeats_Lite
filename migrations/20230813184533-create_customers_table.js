'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     
      await queryInterface.createTable('customers' , {
        id :{
            type : Sequelize.STRING ,
            primaryKey : true ,
            allowNull : false ,
            unique : true
        } ,
        username :{
            type : Sequelize.STRING,
            unique : true
            },
        passwd :{
            type : Sequelize.STRING,
            unique : true
        },
        phoneNumber :{
            type : Sequelize.STRING ,
            unique : true
    
        },
        firstName :{
            type : Sequelize.STRING        
        },
        lastName :{
            type : Sequelize.STRING
        }
        ,
        city :{
            type : Sequelize.STRING
        },
        region:{
            type : Sequelize.STRING
    
        } ,
        street : {
            type : Sequelize.STRING
        },
        address :{
            type : Sequelize.STRING
        },
        createdAt : {
          type : Sequelize.DATE ,
          allowNull : false
      },
      updatedAt :{
          type : Sequelize.DATE , 
          allowNull : false
      }
    } ,
    {
        timestamp :true ,
        createdAt : true , 
        updatedAt : true
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
     
      await queryInterface.dropTable('customers');
     
  }
};
