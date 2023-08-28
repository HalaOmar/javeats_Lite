
const dashboard_services = require('./dashboard_services')
const uid = require('uid');

module.exports.addUser = async ( req , res )=>{

    try{
    const user = {
        id : uid.uid(32) , 
        username : req.body.username || undefined , 
        passwd : req.body.password || undefined , 
        phoneNumber : req.body.phoneNumber || undefined , 
        firstName : req.body.firstName || undefined , 
        lastName : req.body.lastName || undefined , 
        city : req.body.city || undefined ,
        region : req.body.region || undefined , 
        street : req.body.street || undefined ,
        group_code : req.body.group_code || undefined
    }

    const result = await dashboard_services.createUser(user)

    res.json({result})
}catch(error){
    res.send(error)
}
}

module.exports.getUser = ( req , res  ) =>{

    res.json({
        user : req.user
    })

}

module.exports.updateUser = ( req , res  ) =>{

}

module.exports.deleteUser = (req , res  ) =>{

}