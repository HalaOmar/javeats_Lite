'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    
      await queryInterface.createTable('restaurants', {
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
            rest_name :{
                type : Sequelize.DataTypes.STRING ,
                allowNull : false ,
                unique : true
                },
    
            image :{
    
                type : Sequelize.DataTypes.STRING ,
    
            },
            food_type :{
                type : Sequelize.DataTypes.STRING
                
            },
            payPal_id : {
              type : Sequelize.DataTypes.STRING ,
              allowNull : false ,
              UNIQUE : true
          },
          payPal_secret : {
              type : Sequelize.DataTypes.STRING ,
              allowNull : false ,
              UNIQUE : true
          },
            createdAt : {
              type : Sequelize.DATE ,
              allowNull : false
          },
          updatedAt :{
              type : Sequelize.DATE , 
              allowNull : false
          }
    } );
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
     
      await queryInterface.dropTable('restaurants');
     
  }
};
