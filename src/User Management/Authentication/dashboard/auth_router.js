const express = require('express');
const router  = express.Router()
const auth_controller = require('../auth_controller');

router.post('/',auth_controller.authenticate)

module.exports =  router