/*jshint esversion: 8*/
const Mascota = require('../../models/mascota.model');

const express = require('express');
const app = express();

// http://localhost:3000/api/mascota/obtener
app.get('/obtener', (req, res) => {
    Mascota.find().then((resp) => {

        if (resp.length === 0) {
            res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'No se encontraron mascotas en la base de datos.',
                cont: {
                    resp
                }
            });
        } else {
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion obtenida correctamente.',
                cont: {
                    resp
                }
            });
        }
    }).catch((err) => {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error al obtener a los usuarios.',
            cont: {
                err
            }
        });
    });
});

// http://localhost:3000/api/mascota/registrar
app.post('/registrar', (req, res) => {
    const mascota = new Mascota(req.body);

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


    mascota.save().then((resp) => {
        if (resp.length === 0) {
            res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se pudo registrar el usuario en la base de datos.',
                cont: {
                    resp
                }
            });
        } else {
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Success: Informacion insertada correctamente.',
                cont: {
                    resp
                }
            });
        }
    }).catch((err) => {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error: Error al registrar la mascota.',
            cont: {
                err
            }
        });
    });
});

module.exports = app;