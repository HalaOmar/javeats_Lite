const sequelize = require('sequelize');
const models = require('../../../../models/index');
const user_management_models = require('../../../../models/User Management/index')
const User   = models.User ; 
const Non_customerUser = user_management_models.non_customerUsers

exports.createUser  = ( user ) =>{ 
     console.log ( user )
          return Non_customerUser.create(user)
}

exports.getUser = ( selectCriteria) =>{

    return Non_customerUser.findAll(
        {
            where:
                selectCriteria
            
        }
    )
}

exports.getAllSuppliers = async ( ) =>{

    Non_customerUser.findAll({
        where: {
          group_id: 2
        }
      });
}

exports.getAllAdmins = async ( ) =>{

    Non_customerUser.findAll({
        where: {
          group_id: 2
        }
      });

}

exports.deactivateUser = async ( ) =>{

    // Find all users
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));
}