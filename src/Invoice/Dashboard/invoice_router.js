const router = require('express').Router()
const invoice_controller = require('./invoice_controller')
const authentication_controller = require('../../User Management/Authentication/auth_controller')

router.use(authentication_controller.isAdmin)
router.route('/sales')
.get(orderDetails_controller.getSalesOnThisDate)

module.exports = router