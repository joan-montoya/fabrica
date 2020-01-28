const Usuario = require('../../models/usuario.model');

const express = require('express');
const app = express();

// http://localhost:3000/api/usuario/obtener
app.get('/obtener', (req, res) =>{
    Usuario.find().then((resp) =>{

        if(resp.length === 0){
            res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'No se encontraron usuarios en la base de datos.',
                cont: {
                    resp
                }
            });
        }else{
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion obtenida correctamente.',
                cont: {
                    resp
                }
            });
        }
    }).catch((err) =>{
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error al obtener a los usuarios.',
            cont: {
                err
            }
        });
    })
});

// http://localhost:3000/api/usuario/obtener/a@a.com
app.get('/obtener/:strCorreo', (req, res) => {
    Usuario.find({'strCorreo': req.params.strCorreo}).then((resp) =>{

        if(resp.length === 0){
            res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'No se encontro el usuario en la base de datos.',
                cont: {
                    resp
                }
            });
        }else{
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion obtenida correctamente.',
                cont: {
                    resp
                }
            });
        }
    }).catch((err) =>{
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error al obtener a los usuarios.',
            cont: {
                err
            }
        });
    })
});

// http://localhost:3000/api/usuario/registrar
app.post('/registrar', (req, res) => {
    const user = new Usuario(req.body);
    user.save().then((resp) => {

        if(resp.length === 0){
            res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'No se pudo registrar el usuario en la base de datos.',
                cont: {
                    resp
                }
            });
        }else{
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion insertada correctamente.',
                cont: {
                    resp
                }
            });
        }
    }).catch((err) => {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error al registrar al usuario.',
            cont: {
                err
            }
        });
    });
});

module.exports = app;