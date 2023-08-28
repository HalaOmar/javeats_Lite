const Passport = require('passport').Passport;
const appPass = new Passport();
const nonCustomerPass = new Passport();
const LocalStrategy = require('passport-local');
const customer_dao= require('../../../Customer/customer_dao')
const nonCustomer_dao    = require('../../../User Management/DashBoard/User/dashboard_dao')
const auth_service = require('../auth_service');
const utils = require('../../../Lib/utils');
const logger = require('../../../Commons/logger/winstonlogger')


const verify = async (username , password , done) => {

    const user = await customer_dao.getCustomer(username)
    if(!user){ done(null , false ,  { message: 'Incorrect username.' } )}
    if(!auth_service.checkPasswordIntegrity(user.password , password )){
       done(null ,false , { message: 'Incorrect password.' } ) 
    }

    return done(null , user)

}

const verifyNonCustomer = async (username , password , done) => {

    let users = await nonCustomer_dao.getUser({"username" : username})
    
    let  user = utils.getData(users)
    if(!user){ done(null , false ,  { message: 'Incorrect username.' } )}
    if(!auth_service.checkPasswordIntegrity(user.passwd , password )){
       done(null ,false , { message: 'Incorrect password.' } ) 
    }

    logger.info({
        level   : 'info' ,
        message : `${user[0].username} logged in`
    })
    
    return done(null , user[0])

}

const serializeUser = function(user, done) {
    console.log("user serialized to session store")
    done(null, user.id); //req.session.passport.user = {id: '..'}
  }

const deserializeCustomer = async function(id , done){
    //user object attaches to the request as req.user
    try {
        const user = await customer_dao.getUser({"id" : id})
        done(null , user )       
    } catch (error) {
        done(error , null)       
    }   
}
const deserializeNonCustomer = async function(id , done){
    try {
        console.log('deserialize user')
        const users = await nonCustomer_dao.getUser({"id" : id })
        let user = utils.getData(users)
        done(null , user[0] )       
    } catch (error) {
        done(error , false)       
    }  
}


nonCustomerPass.serializeUser(serializeUser);

appPass.deserializeUser(deserializeCustomer)
appPass.use(new LocalStrategy(verify))
nonCustomerPass.use(new LocalStrategy(verifyNonCustomer))
nonCustomerPass.deserializeUser(deserializeNonCustomer)//user object attaches to the request as req.user


module.exports = {
    appPass , 
    nonCustomerPass
}