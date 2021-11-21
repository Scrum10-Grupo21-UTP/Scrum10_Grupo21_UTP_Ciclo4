
const AdminCrtr = {}
const Admin = require('../models/Admin.models')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

AdminCrtr.crearAdmin = async(req,res)=> {
    const { nombre, correo, contrasena } = req.body
    const NuevoAdmin = new Admin({
    nombre,correo, contrasena
    })
    const correoAdmin = await Admin.findOne({ correo: correo })
    if (correoAdmin) {
        res.json({ mensaje: 'El correo existe' })
    } else {
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ id: NuevoAdmin._id }, 'Secreta')
        await NuevoAdmin.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoAdmin.nombre,
            token
        })
    }
}


AdminCrtr.login = async (req, res) => {
    const { correo, contrasena } = req.body
    const admin = await Admin.findOne({ correo: correo })
    if (!admin) {
        return res.json({
            mensaje:'correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, admin.contrasena)
    if (match) {
        const token = jwt.sign({ _id: admin._id }, 'Secreta')

        res.json({
            mensaje: 'Bienvenido',
            id: admin, id,
            nombre: admin.nombre,
            token
        })
    }
}


module.exports=AdminCrtr
