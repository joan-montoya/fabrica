/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Mascota = require('./mascota.model');

const userSchema = new Schema({
    strNombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre.']
    },
    nmbEdad: {
        type: Number,
        required: [true, 'Favor de insertar su edad.']
    },
    strCorreo: {
        type: String,
        required: [true, 'Favor de insertar su correo.']
    },
    strTelefono: String,
    idMascota: {
        type: Schema.Types.ObjectId,
        ref: 'Mascota',
    }
    /* 
    aJsnMascota: [Mascota.schema]
    */
}, { collection: "usuario" });

module.exports = mongoose.model('Usuario', userSchema);