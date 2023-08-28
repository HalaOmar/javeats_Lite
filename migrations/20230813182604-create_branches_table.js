'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
      await queryInterface.createTable('branches' , {
        id :{
            type : Sequelize.INTEGER ,
            allowNull : false ,
            autoIncrement :true,
            primaryKey : true
        },
        restaurant_id :{
            type : Sequelize.STRING
        },
        city :{
            type : Sequelize.STRING
        },
        region :{
            type : Sequelize.STRING
        },
        street :{
            type : Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING
        },
        GPS :{
            type : Sequelize.STRING ,
            unique : true
        },
        phoneNumber : {
            type : Sequelize.STRING ,
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
    /**
     * Add reverting commands here.
     */
     
      await queryInterface.dropTable('branches');
     
  }
};
