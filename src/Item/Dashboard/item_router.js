const router = require('express').Router();
const auth_controller = require('../../User Management/Authentication/auth_controller')
const item_controller = require('./item_controller')
const file_uploader = require('../../Commons/file_uploader')

router.use(auth_controller.isSupervisor)

router.route('/')
.post(file_uploader , item_controller.addItem)
.get(item_controller.getItem)
.put(item_controller.updateItem)
.delete(item_controller.deleteItem)


module.exports = router
