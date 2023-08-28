const uid = require('uid');
const branch_services = require('../branch_service')

module.exports.addBranchToRestaurant = async ( req , res ) =>{

    try {
        const branch = {
            id : uid.uid(32) , 
            restaurant_id : req.body.restaurant_id || undefined , 
            city : req.body.city || undefined , 
            region : req.body.region || undefined , 
            street : req.body.street || undefined , 
            phoneNumber : req.body.phoneNumber || undefined,
            GPS : req.body.GPS || undefined
    
        }

        const result = await branch_services.addBranchOfRestaurant(branch)
        res.status('200').json({result})
        
    } catch (error) {
        res.json({error})
        
    }




}

module.exports.deleteBranch = ( req , res ) =>{
    
}

module.exports.updateBranchInfo = ( req , res ) =>{
    
}
module.exports.getBranchOfRestauarant = ( req ,res ) =>{

}

module.exports.getAllBranchesOfRestaurant = ( req , res ) => {

}