const express = require('express');
const app = express();

//Configuracion del server
app.set('port', 3000);

//Rutas
app.use(require('./routes/index'));

//Ruta inexistente 
app.use((req, res ,next) => {
    res.status(404).send('404 not found');
})


module.exports = app;