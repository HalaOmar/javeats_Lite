const router = require('express').Router(); //A router object is an isolated instance of middleware and routes.
const auth_controller = require('../..//User Management/Authentication/auth_controller')
const menue_controller = require('./menue_controller')

router.use( auth_controller.isSupervisor)
router.route('/').
get( menue_controller.getMenueOfRestauarant)
.post(menue_controller.addMenueToRestaurant)
.delete(menue_controller.deleteMenue)
.put(menue_controller.updateMenueInfo)

router.route('/all')
.get(menue_controller.getAllenueesOfRestaurant)

module.exports = router