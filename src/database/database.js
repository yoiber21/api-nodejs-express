/* importamos sequelize */

import Sequelize from 'sequelize'

/* se crea la conexion */

const sequelize = new Sequelize(
    'express-nodejs',
    'postgres',
    '1001032661',
    {
        host: '127.0.0.1',
        dialect: 'postgres',
        logging: false
    }
)

export default sequelize