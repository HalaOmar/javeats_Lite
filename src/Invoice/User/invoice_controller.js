
const _ = require('lodash');
const invoice_services = require('../invoice_service');
const utils = require('../../Lib/utils');
const logger = require('../../Commons/logger/winstonlogger');
const res_wrapper = require('../../Commons/http_res_wrapper')

exports.createInvoice = async ( req , res )=>{
    try {
        const { body } = req
        const invoice = _.pick( body , ['order_id' , 'item_id' , 'quantity'])
        const op = await invoice_dao.createInvoice(invoice)
        res_wrapper.success({
            op
        })
    } catch (error) {
        res_wrapper.error()
    }
    


}