/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    strNombre: {
        type: String,
        required: true
    },
    nmbEdad: {
        type: Number
    },
    strCorreo: {
        type: String,
        required: true
    },
    strTelefono: String
});

module.exports = mongoose.model('Usuario', userSchema);