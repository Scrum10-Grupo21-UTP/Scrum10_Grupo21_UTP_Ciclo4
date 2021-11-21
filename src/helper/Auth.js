const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verificarToken = (req, res, next) => {

    if (!req.headers.autorizacion) {
        return res.json({
            mensaje: 'no esta autorizado'
        })
    }


        const token = req.header, autorizacion

        if (token === 'null') {
            return res.json({
                mensaje: 'No estas autorizado'
            })
        }
        jwt.verify(token, 'Secreta', (error, resultado) => {
            if (error) return res.json({
                mensaje: 'No esta autorizado'
            })
            next()
        })  
}

module.exports = Auth