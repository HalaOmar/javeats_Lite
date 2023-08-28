const item_services = require('../item_service');
const uid = require('uid');

exports.addItem = async (req , res )=>{

    try {
        const item = {
            id        : uid.uid(32) || undefined,
            menue_id  : req.body.menue_id || undefined, 
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

exports.getItem = (req , res )=>{

}

exports.updateItem = (req , res )=>{

}

exports.deleteItem = (req , res )=>{

}