'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    
      await queryInterface.createTable('rating' , {
        id :{
            type : Sequelize.DataTypes.INTEGER ,
            autoIncrement : true ,
            primaryKey : true ,
            allowNull : false
        } ,
            item_id :{
                type : Sequelize.DataTypes.STRING ,
                allowNull : false
                },
    
            user_id :{
    
                type : Sequelize.DataTypes.STRING ,
    
            },
            rate :{
                type : Sequelize.DataTypes.TINYINT
                
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
     
      await queryInterface.dropTable('rating');
     
  }
};
