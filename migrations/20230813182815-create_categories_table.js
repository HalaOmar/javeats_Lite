'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     await queryInterface.createTable('categories' , {
      id :{
          type : Sequelize.DataTypes.INTEGER ,
          allowNull : false ,
          autoIncrement :true,
          primaryKey : true
      },
      name :{
          type : Sequelize.DataTypes.STRING
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
     
      await queryInterface.dropTable('categories');
     
  }
};
