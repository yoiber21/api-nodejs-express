import {Router} from 'express'
import UsuarioDAO from '../controllers/usuario.controller'
/* se instancia el modulo router */
const router = Router()

router.get('/',UsuarioDAO.obtenerUsuarios)
router.get('/:id',UsuarioDAO.obtenerUsuariosId)
router.delete('/:id',UsuarioDAO.eliminarUsuario)
router.put('/:id',UsuarioDAO.actualizarUsuario)
router.post('/',UsuarioDAO.CrearUsuario)

export default router