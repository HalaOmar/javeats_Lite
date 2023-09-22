const passports = require('./passport/passport_config')
const user_services = require('../DashBoard/User/dashboard_services')

exports.authenticate_customer = ( req , res ,next ) =>{

    passports.appPass.authenticate('local' , {
        successRedirect: '/',
        failureRedirect: '/login'
      })(req,res,next)

}

exports.authenticate_non_customer = ( req , res ,next ) =>{
    
    passports.nonCustomerPass.authenticate('local' , {
        successRedirect: '/',
        failureRedirect: '/login'
      })(req,res,next)

}

exports.isAdmin = ( req , res , next ) =>{
    
    try {
        if(!req.user){
            throw new Error('UnAuthorized Access')
        }
        
        if(req.user.group_code == 1){
            console.log(`welcome to ${req.user.username}`)
            next()
        }else{
            res.send('Access Denied')
        }
        
    } catch (error) {
        console.error(error)
        
    }
}

exports.isSupervisor = ( req , res , next ) =>{
    
    try {
        console.log("user" ,req.user)
        if(!req.user){
            throw new Error('UnAuthorized Access')
        }
        
        if(req.user.group_code == 2){
            console.log(`welcome to ${req.user.username}`)
            next()
        }else{
            res.send('Access Denied')
        }
        
    } catch (error) {
        console.error(error)
        
    }
}

exports.isDelivery = ( req , res , next ) =>{
    
    try {
        console.log("user" ,req.user)
        if(!req.user){
            throw new Error('UnAuthorized Access')
        }
        
        if(req.user.group_code == 2){
            console.log(`welcome to ${req.user.username}`)
            next()
        }else{
            res.send('Access Denied')
        }
        
    } catch (error) {
        console.error(error)
        
    }
}

exports.isWaiter = ( req , res , next ) =>{
    
    try {
        console.log("Waiter" ,req.user)
        if(!req.user){
            throw new Error('UnAuthorized Access')
        }
        
        if(req.user.group_code == 5){
            console.log(`welcome to ${req.user.username}`)
            next()
        } else {
            console.log(`req.user.group_code ${req.user.group_code}`)
            res.send('Access Denied')
        }
        
    } catch (error) {
        console.error(error)
        
    }
}