const router = require('express').Router()
const item_controller = require('../User/item_controller')

router.route('/cart')
.get(item_controller.getUserCart)
.post(item_controller.addItemToCart)
.delete(item_controller.deleteItemFromCart)

router.route('/')
.get(item_controller.getAllCategoryItems)
router.route('/:itemId')
.get(item_controller.showItemDetails)


module.exports = router
