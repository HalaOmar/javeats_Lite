const item_services = require('../item_service');
const uid = require('uid');

exports.addItem = async (req , res )=>{

    try {
        const item = {
            id        : uid.uid(32) || undefined,
            menue_id  : req.body.menue_id || undefined, //same as resturantId
            category_id : parseInt(req.body.category_id)|| undefined ,
            name : req.body.name || undefined,
            description : req.body.description || undefined ,
            price : req.body.price || undefined , 
            image     : req.file.path || undefined
        }
        console.log(item)
    const result = await item_services.addItem(item)
    res.json({result})
        
    } catch (error) {
    res.json(error)        
    }

}

exports.getItemById = (req , res )=>{
    try {
        const item_id = req.body.item_id
    } catch (error) {
        
    }
}

exports.updateItem = (req , res )=>{
    try {
        
    } catch (error) {
        
    }
}

exports.deleteItem = (req , res )=>{
    try {
        
    } catch (error) {
        
    }
}