/* se importa el modulo app */
import app from './app'

/* se crea la funcion principal que es la que va a levantar el servidor */

const main = async() =>{
    const port = 3000
    await app.listen(port)
    console.log(`Servidor escuchando en el puerto ${port}`);
}

main()