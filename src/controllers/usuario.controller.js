import Usuario from '../models/usuario'

/* obtener todos usuarios */
const obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.status(200).json({
        data: usuarios
    })
}
/* obtener usuarios por el id */
const obtenerUsuariosId = async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });
    res.status(200).json({
        data: usuario
    })
}
/* crear usuarios */
const CrearUsuario = async (req, res) => {
    /* obtenemos los parametros para insertar o a insertar */
    const { id, nombres, apellidos, correo, celular, empresa, genero } = req.body
    try {
        if (req.body.isEmpty()) {
            return res.status(400).json({
                message: "Digite todos los campos por favor!!"
            })
        } else {
            /* se le pasan los parametros para crear el usuario */
            var nuevo = await Usuario.create({
                id,
                nombres,
                apellidos,
                correo,
                celular,
                empresa,
                genero
            });
        }
        /* validar si se envuaron datos y responder un json */
        if (nuevo) {
            return res.status(201).json({
                message: "Usuario creado!!",
                data: nuevo
            })
        }
    } catch (error) {
        return res.status(400).json({
            err: error
        })
    }
}

const eliminarUsuario = async (req, res) => {
    let { id } = req.params
    const fila = await Usuario.destroy({
        where: {
            id
        }
    })
    res.status(200).json({
        message: "Eliminado el usuario con id", fila
    })
}
const actualizarUsuario = async (req, res) => {
    let { id } = req.params
    const { nombres, apellidos, correo, celular, empresa, genero } = req.body
    try {
        const usuario = await Usuario.findOne({
            where: {
                id
            }
        })
        await usuario.update({
            nombres,
            apellidos,
            correo,
            celular,
            empresa,
            genero
        })
        if (usuario) {
            res.status(200).json({
                message: "Usuario actualiado"
            })
        }
    } catch (error) {
        res.status(500).json({
            err: error
        })
    }
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuariosId,
    CrearUsuario,
    eliminarUsuario,
    actualizarUsuario
}