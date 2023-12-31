'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     
      await queryInterface.createTable('invoices' , {
        id :{
            type : Sequelize.DataTypes.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
    
        order_id :{

            type : Sequelize.DataTypes.STRING ,
            allowNull : false

        },
        item_id :{
            type : Sequelize.DataTypes.STRING          
        },
        quentity : {
            type : Sequelize.DataTypes.INTEGER ,
            allowNull : false
        },
        price : {
            type : Sequelize.DataTypes.DOUBLE
        } ,
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
   
     await queryInterface.dropTable('invoices');
    
  }
};
