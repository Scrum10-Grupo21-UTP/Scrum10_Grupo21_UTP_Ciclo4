const mongoose = require('mongoose');
URI = ('mongodb://localhost/bd');

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('Estas conectado a la Base de Datos: ', db.connection.name))

module.exports=mongoose