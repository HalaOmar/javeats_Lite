const router = require('express').Router();
const auth_controller = require('../../User Management/Authentication/auth_controller')
const restaurant_controller = require('./controller')
const file_uploader = require('../../Commons/file_uploader')

router.use(auth_controller.isSupervisor)

router.route('/')
.post(file_uploader , restaurant_controller.addRestaurant)
.get(restaurant_controller.getRestaurant)
.put(restaurant_controller.updateRestaurant)
.delete(restaurant_controller.deleteRestaurant)

module.exports = router
