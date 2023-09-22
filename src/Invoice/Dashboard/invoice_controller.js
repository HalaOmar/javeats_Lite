const { col } = require('sequelize')
const invoice_services = require('../invoice_service')

exports.getSalesOnThisDate = async( req , res ) =>{

    try {
        const { from, to } = req.query
        console.log(req.query)
       const result = await invoice_services.getSalesOnThisDate(from, to)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}