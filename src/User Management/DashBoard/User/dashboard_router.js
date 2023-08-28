const router = require('express').Router()
const auth_controller = require('../../Authentication/auth_controller');
const dashboard_user_controller = require('./dashboard_controller')


router.route('/login').post(auth_controller.authenticate_non_customer)

router.route('/admin')
.get( auth_controller.isAdmin ,  dashboard_user_controller.getUser)
.post( auth_controller.isAdmin, dashboard_user_controller.addUser)
.put(  auth_controller.isAdmin, dashboard_user_controller.updateUser)
.delete( auth_controller.isAdmin, dashboard_user_controller.deleteUser)

router.route('/supervisor')
.get( auth_controller.isSupervisor , dashboard_user_controller.getUser)
.post( auth_controller.isSupervisor , dashboard_user_controller.addUser)
.put(auth_controller.isSupervisor , dashboard_user_controller.updateUser)
.delete( auth_controller.isSupervisor , dashboard_user_controller.deleteUser)

// router.route('/supplier')
// .get( dashboard_user_controller.getSupplier)
// .post(dashboard_user_controller.addSupplier)
// .update(dashboard_user_controller.updateSupplier)
// .delete(dashboard_user_controller.deleteSupplier)


router.route('/register' , dashboard_user_controller.registerUser)

module.exports = router