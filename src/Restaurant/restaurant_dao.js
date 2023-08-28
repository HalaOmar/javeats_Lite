const models = require('../../models/index')
const Restaurant = models.restaurant


exports.addRestaurant = ( restaurant )=>{
    console.log(restaurant)
    return Restaurant.create(restaurant)

}

exports.getRestaurant = (req , res )=>{

}

exports.updateRestaurant = (req , res )=>{

}

exports.deleteRestaurant = (req , res )=>{

}