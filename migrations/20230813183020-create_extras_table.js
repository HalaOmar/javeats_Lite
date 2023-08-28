'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     
      await queryInterface.createTable('extras' , {
        id :{
            type : Sequelize.INTEGER ,
            allowNull : false ,
            autoIncrement :true,
            primaryKey : true
        },
        item_id :{
            type : Sequelize.STRING(255) ,
            allowNull :false
        },
        order_id : {
            type : Sequelize.STRING(255) ,
            allowNull : false
        },
        extra : {
          type : Sequelize.STRING , 
          allowNull : false
        },
        createdAt : {
          type : Sequelize.DATE ,
          allowNull : false
      },
      updatedAt :{
          type : Sequelize.DATE , 
          allowNull : false
      }
    },{
      timestamps : true ,
      createdAt : true , 
      updatedAt : true
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
     
     await queryInterface.dropTable('extras');
     
  }
};
