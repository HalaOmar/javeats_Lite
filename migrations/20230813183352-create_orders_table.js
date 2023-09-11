'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    
      await queryInterface.createTable('orders' , {
        index :{
            type : Sequelize.DataTypes.INTEGER,
            autoIncrement: true
        },
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        user_id :{
            type : Sequelize.DataTypes.STRING ,
            allowNull : false 
            },

        restaurant_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false

        },
        delivery_address :{
            type : Sequelize.DataTypes.STRING          
        },
        estimated_delivery_time : {
            type : Sequelize.DataTypes.STRING
        },
        payment_method :{
            type : Sequelize.DataTypes.STRING
        },
        status : {
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
    
      await queryInterface.dropTable('orders');
     
  }
};
