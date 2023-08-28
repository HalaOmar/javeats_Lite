'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('rules' , {
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
     
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('rules');
     
  },
};
