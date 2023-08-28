const restaurant_services = require('../restaurant_service');
const uid = require('uid');

exports.addRestaurant = async (req , res )=>{

    try {
        const restaurant = {
            id        : uid.uid(32) || undefined,
            res_name  : req.body.rest_name || undefined, 
            food_type : req.body.food_type || undefined,
            image     : req.file.path || undefined
        }
        
    const result = await restaurant_services.addRestaurant(restaurant)
    res.json({result})
        
    } catch (error) {
    res.json(error)        
    }

    



}

exports.getRestaurant = (req , res )=>{

}

exports.updateRestaurant = (req , res )=>{

}

exports.deleteRestaurant = (req , res )=>{

}