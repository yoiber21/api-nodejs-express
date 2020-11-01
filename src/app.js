/* se importa express, json y morgan */
import express from 'express'
import {json} from 'body-parser'
import morgan from 'morgan'
/* se importan las rutas */
import usuarioRoute from './routes/usuario'
import eventoRoute from './routes/evento'


const app = express()


/* middlewares */
app.use(morgan('dev'))//para ver las petiociones que llegan al servidor
app.use(json())// para procesar datos en formato json

//Rutas
app.use('/api/usuario', usuarioRoute)
app.use('/api/evento', eventoRoute)



export default app

