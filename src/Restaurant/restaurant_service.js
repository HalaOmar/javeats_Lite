const Error = require('../Commons/Error/Exceptions')
const restaurant_dao = require('./restaurant_dao')


exports.addRestaurant = ( restaurant )=>{
        
    let {res_name , food_type } = restaurant

    if( !res_name || !food_type){

        throw new Error.InvalidInputException(`restaurant's name or food_type is empty`)
    }

    return restaurant_dao.addRestaurant(restaurant)
}

exports.getRestaurant = (req , res )=>{

}

exports.updateRestaurant = (req , res )=>{

}

exports.deleteRestaurant = (req , res )=>{

}