/* se importa sequelize y la conexion */

import Sequelize from 'sequelize'
import sequelize from '../database/database'

/* modelamos los datos */
const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: null
    },
    nombres: {
        type: Sequelize.TEXT
    },
    apellidos: {
        type: Sequelize.TEXT
    },
    correo: {
        type: Sequelize.TEXT
    },
    celular: {
        type: Sequelize.TEXT
    },
    empresa: {
        type: Sequelize.TEXT
    },
    genero: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

export default Usuario