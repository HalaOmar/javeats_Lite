const models = require('../../models/index')
const Invoice = models.invoices

exports.createInvoice = ( invoice )=>{
    return Invoice.create(invoice)
}

exports.getSalesFromTo = (  { from , to } )=>{
    //get all orders created at = [from , to]
    //group by itemId and createdAt 
    //sum (quentity X price)
    //order By sum

}

exports.getBestSellerFromTo = ( { from , to } ) =>{
    //get all orders created at = [ from , to ]
    //group by itemId 
    //sum quentity 
    

}

