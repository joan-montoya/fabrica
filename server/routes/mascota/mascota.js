/*jshint esversion: 9*/
const MascotaModel = require('../../models/mascota.model');
const Helper = require("../../libraries/helper");
const express = require('express');
const app = express();

// http://localhost:3000/api/mascota/
app.get('/', async(req, res) => {
    try {
        if (req.query.idMascota) req.queryMatch._id = req.query.idMascota;
        if (req.query.termino) req.queryMatch.$or = Helper(["strNombre"], req.query.termino);

        const mascota = await MascotaModel.find({...req.queryMatch });

        if (mascota.length <= 0) {
            res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'No se encontraron mascotas en la base de datos.',
                cont: {
                    mascota
                }
            });
        } else {
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion obtenida correctamente.',
                cont: {
                    mascota
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error al obtener las mascotas.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
});

// http://localhost:3000/api/mascota/
app.post('/', async(req, res) => {
    try {

        const mascota = new MascotaModel(req.body);

        let err = mascota.validateSync();

        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Error al Insertar la mascota.',
                cont: {
                    err
                }
            });
        }


        const nuevaMascota = mascota.save();
        if (nuevaMascota.length <= 0) {
            res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se pudo registrar la mascota en la base de datos.',
                cont: {
                    nuevaMascota
                }
            });
        } else {
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Success: Informacion insertada correctamente.',
                cont: {
                    nuevaMascota
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error: Error al registrar la mascota.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
});

module.exports = app;