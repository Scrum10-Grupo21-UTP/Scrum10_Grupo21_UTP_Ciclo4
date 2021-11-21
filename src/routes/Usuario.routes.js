const { Router } = require('express')
const router = Router()
const UsuarioCtrl = require('../controllers/UsuarioController')
const Auth = require('../helper/auth')

router.post('/crear', Auth.verificarToken,  UsuarioCtrl.crear)
router.get('/listar', UsuarioCtrl.listar)
router.get('/listarId/:id', UsuarioCtrl.listarId)
router.delete('/eliminar/:id', UsuarioCtrl.eliminar)
router.put('/actualizar/:id', UsuarioCtrl.actualizar)

module.exports = router