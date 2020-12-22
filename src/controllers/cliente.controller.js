import Cliente from '../models/cliente'
import regeneratorRuntime from "regenerator-runtime";

const crearCliente = async(req,res) =>{
    const {id, nombres, apellidos, contacto, fecha} = req.body
    try {
        const nuevo =await Cliente.create ({
            id,
            nombres,
            apellidos,
            contacto,
            fecha
        })
        if (nuevo) {
            return res.status(201).json({
                message: 'Dato registrado'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error interno al registrar el dato'
        })
    }
}

const obtenerClientes = async (req,res)=>{
    const clientes = await Cliente.findAll()
    return res.status(200).json({
        data: clientes
    })
}
const obtenerClientesId = async (req,res)=>{
    const {id} = req.params
        const cliente = await Cliente.findOne({
            where: {
                id
            },
        })
        if (cliente) {
            return res.status(200).json({
                data: cliente
            })
        }
        res.status(204).json({
            message: 'No existe el cliente'
        })
}
const eliminarCliente = async (req,res)=>{
    try {
        const {id} = req.params
        const cliente = await Cliente.destroy({
            where:{
                id
            }
        })
        return res.status(200).json({
            message: 'Cliente eliminado',
            id: id
        })
    } catch (error) {
        return res.status(500).json({
            err: error
        })
    }
}
const actualizarCliente = async (req, res) => {
    let { id } = req.params
    const { nombres, apellidos, contacto, fecha  } = req.body
    try {
        const cliente = await Cliente.findOne({
            where: {
                id
            }
        })
        await cliente.update({
            nombres,
            apellidos,
            contacto,
            fecha
        })
        if (cliente) {
            res.status(200).json({
                message: "Cliente actualizado"
            })
        }
    } catch (error) {
        res.status(500).json({
            err: error
        })
    }
}

module.exports= {
    crearCliente,
    obtenerClientes,
    obtenerClientesId,
    eliminarCliente,
    actualizarCliente
}