const dashboard_dao = require('./dashboard_dao.js');
const Error = require('../../../Commons/Error/Exceptions.js');
const hashPassword = require('../../Authentication/auth_service.js').hashPassword
const validator = require('validator');


module.exports.createUser = async ( user  ) =>{

    await validateUser(user)
    return dashboard_dao.createUser(user)
}

module.exports.getUser = ( selectCriteria ) =>{
  
}

module.exports.deleteUser = ( ) =>{
    
}

module.exports.updateUser = ( ) =>{
    
}

async function validateUser (user){
    
    for (const [key, value] of Object.entries(user)) {

        if(!value){            
            throw new Error.InvalidUserNameOrPasswordException(`${key} is required`)
        }else {
            switch(key) {
                case 'username':
                    if(! validator.isAscii(value)){
                        throw new Error.InvalidInputException(`${username}`)
                     }
                  break;
                case 'passwd' : 
                    // if(! validator.isStrongPassword(value)){
                    //     throw new Error.InvalidInputException(`${key} is weak`)
                    //  }
                    user.passwd = await hashPassword(user.passwd)
                    console.log( "passwd" , user.passwd);
                    
                  break;
                case 'phoneNumber' :
                    if( !validator.isMobilePhone(value)){
                        throw new Error.InvalidMobileNumberException(`${value}`)
                     }
                  break;

                case ('lastName' || 'firstName' || 'city' || 'region' || 'street' ) :
                    if(! validator.isAlpha(value)){
                        throw new Error.InvalidInputException(`${value}`)
                     }
                
                  break;
                default:
                  // code block
              } 
        } }
}
