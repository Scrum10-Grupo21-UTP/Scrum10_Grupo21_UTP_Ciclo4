const { Router } = require('express')
const router = Router()
const AdminCrtr = require('../controllers/Admin.controller')

router.post('/crear', AdminCrtr.crearAdmin)

module.exports = router
