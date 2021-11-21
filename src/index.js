const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database')

//configurar puerto

app.set('Port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origen: '*' }))

app.use('/admin', require('./routes/Admin.routes'))
app.use('/usuario', require('./routes/Usuario.routes'))



app.listen(app.get('Port'), ()=> {
    console.log('Hola Soy el Servidor y escucho por el puerto:', app.get('Port'))
})