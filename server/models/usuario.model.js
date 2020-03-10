/*jshint esversion: 8*/
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    strNombre: {
        type: String,
        required: true
    },
    nmbEdad: Number,
    strCorreo: String,
    strTelefono: String
});

module.exports = mongoose.model('Usuario', userSchema);