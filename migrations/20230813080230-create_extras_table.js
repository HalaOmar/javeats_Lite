'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("extras" , {
      id :{
          type : Sequelize.DataTypes.INTEGER ,
          allowNull : false ,
          autoIncrement :true,
          primaryKey : true
      },
      item_id :{
          type :Sequelize.DataTypes.STRING(255) ,
          allowNull : false
      },
      order_id : {
          type : Sequelize.DataTypes.STRING(255) ,
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
    timestamp : true
  })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
     
      await queryInterface.dropTable('extra');
    
  }
};
