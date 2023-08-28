const router = require('express').Router(); //A router object is an isolated instance of middleware and routes.
const auth_controller = require('../../Authentication/auth_controller')
const branch_controller = require('./branch_controller')


router.route('/').
get('/all/:rest_id' , branch_controller.getAllRestaurantBranches)

module.exports = router