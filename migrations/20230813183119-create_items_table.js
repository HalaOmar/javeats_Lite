'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */     
      await queryInterface.createTable('items' , {
        id :{
            type : Sequelize.STRING ,
            primaryKey : true ,
            allowNull : false
        } ,
        category_id :{

            type : Sequelize.STRING ,
            allowNull : false
        },
        menue_id :{
            type : Sequelize.STRING ,
            allowNull : false
        },
        name : {
            type : Sequelize.STRING ,
            allowNull : false
        },
        description:{
            type : Sequelize.STRING
        },
        price : {
            type : Sequelize.DOUBLE,
            allowNull : false
        },
        image :{
            type : Sequelize.STRING
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
    createdAt: true ,
    updatedAt:true
});
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     */
     await queryInterface.dropTable('items');
     
  }
};
