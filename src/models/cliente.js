import Sequelize, { DATE } from 'sequelize'
import sequelize from '../database/database'

const Cliente = sequelize.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombres: {
        type: Sequelize.TEXT
    },
    apellidos: {
        type: Sequelize.TEXT
    },
    contacto: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: DATE
    }
},{
    timestamps: false
})

export default Cliente