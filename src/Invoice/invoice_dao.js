const models = require('../../models/index')
const Invoice = models.invoices
const { QueryTypes } = require('sequelize');
const QUERIES = require('../../database/queries');

exports.createInvoice = ( invoice )=>{
    return Invoice.create(invoice)
}

exports.getSalesFromTo = async (from, to) => {
    
    const query = QUERIES.QUERY_LIST.GET_SALES_FROM_TO
    const option = {
        replacements: { FROM: from, TO: to },
        type: QueryTypes.SELECT
    }
                
    const [results, metadata] = await sequelize.query(query , option)

    console.log(`Sales \n`, results)
    return results

}

exports.getBestSellerItem = async ( { from , to } ) =>{
  
    const query = QUERIES.QUERY_LIST.GET_BEST_SELLER_ITEM
    const option = {
        replacements: { FROM: from, TO: to },
        type: QueryTypes.SELECT
    }
                
    const [results, metadata] = await sequelize.query(query , option)

    console.log(`Sales \n`, results)
    return results

}

