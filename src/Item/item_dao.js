const models = require('../../models/index')
const Item = models.items


exports.addItem = ( item )=>{
    console.log(item)
    return Item.create(item)

}

exports.getItemById = (req , res )=>{

}

exports.updateItem = (req , res )=>{

}

exports.deleteItem = (req , res )=>{

}