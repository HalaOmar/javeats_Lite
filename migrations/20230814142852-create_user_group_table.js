'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('user_groups' , {
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
     
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('user_groups');
     
  }
};
