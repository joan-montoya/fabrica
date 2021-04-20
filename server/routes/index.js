/*jshint esversion: 8*/
const express = require('express');
const app = express();

app.use('/usuario', require('./usuario/usuario'));
app.use('/inventario', require('./tienda/inventario'));
app.use('/mascota', require('./mascota/mascota'));
app.use('/tienda', require('./tienda/tienda'));
app.use('/compra', require('./tienda/compra'));

module.exports = app;