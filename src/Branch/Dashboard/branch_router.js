const router = require('express').Router(); //A router object is an isolated instance of middleware and routes.
const auth_controller = require('../..//User Management/Authentication/auth_controller')
const branch_controller = require('./branch_controller')

router.use( auth_controller.isSupervisor)
router.route('/').
get( branch_controller.getBranchOfRestauarant)
.post(branch_controller.addBranchToRestaurant)
.delete(branch_controller.deleteBranch)
.put(branch_controller.updateBranchInfo)

router.route('/all')
.get(branch_controller.getAllBranchesOfRestaurant)

module.exports = router