import {Router } from 'express'
import ClienteDAO from '../controllers/cliente.controller'
/* se instancia el modulo router */

const router = Router()


router.post('/',ClienteDAO.crearCliente)
router.get('/',ClienteDAO.obtenerClientes)
router.get('/:id',ClienteDAO.obtenerClientesId)
router.delete('/:id',ClienteDAO.eliminarCliente)


export default router