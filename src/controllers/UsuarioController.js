const UsuarioCtrl = {}
const Usuario = require('../models/Usuario.models/')

UsuarioCtrl.crear = async (req, res) => {
    const { nombres, apellidos, edad, correo } = req.body
    const NuevoUsuario = new Usuario({ nombres, apellidos, edad, correo })

    const respuesta = await NuevoUsuario.save()
    res.json({
        mensaje: 'Usuario Creado',
        respuesta
    })
}
UsuarioCtrl.listar = async (req, res) => {
    const respuesta = await Usuario.find()
    res.json(respuesta)
}

UsuarioCtrl.listarId = async (req, res) => {
    const id=req.params.id
    const respuesta = await Usuario.findById({_id:id})
    res.json(respuesta)
}
UsuarioCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Usuario.findByIdAndRemove({ _id: id })
    res.json({
    mensaje: 'persona eliminada'
    })
}
UsuarioCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    await Usuario.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: 'persona actualizada'
    })

}

module.exports = UsuarioCtrl