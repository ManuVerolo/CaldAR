const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');

const port = 3000
const app = express()

app.use('/', router);

app.listen(port, () => {
    console.log(`Server corriendo en puerto: ${port}`)
})

mongoose.connect('mongodb+srv://grupomcga:grupo123@cluster0.doeq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then((result) => {
    console.log('Conexion lista')
}).catch((error) => {
    console.log(`Error en la conexion, error:  ${error}`)
})

