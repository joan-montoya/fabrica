/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

const mascotaSchema = new Schema({
    strNombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre de la mascota.']
    },
    strTipoAnimal: {
        type: String,
        required: [true, 'Favor de insertar que tipo de animal es.']
    },
    intEdad: Number
}, { collection: "mascota" });

module.exports = mongoose.model('Mascota', mascotaSchema);