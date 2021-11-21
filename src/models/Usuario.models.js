const mongoose = require('mongoose')
const { Schema } = mongoose

const UsuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    date: {
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model('usuario', UsuarioSchema)