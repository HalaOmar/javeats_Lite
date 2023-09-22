const invoice_dao = require('./invoice_dao');
const utils = require('../../src/Lib/utils')
const Exceptions = require('../Commons/Error/Exceptions')
const _ = require('lodash');
const { uid } = require('uid');

exports.createInvoice = ( invoice )=>{

    const {order_id , item_id , quantity} = invoice
    
    if(!order_id || !item_id || !quantity){
        throw new Exceptions.NotFoundException('System Error')
    }

    invoice.quantity = parseInt(quantity)
    invoice.id = uid(32)
    return invoice_dao.createInvoice(invoice)

}
exports.getSalesOnThisDate = ( from , to  ) =>{
   return invoice_dao.getSalesFromTo(from , to )
}