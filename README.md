Api nodejs express y postgres con el orm sequelize
se instalan todoas las dependencias de babel para que pueda traducir a el codigo moderno de javascript
Se crear un archivo llamado .babelrc y alli dentro se configura babel
creamos la carpeta src que va a ser como el modulo rincipal del proyecto
Tambien se instalan las dependencias para postgresql y el orm sequelize para hacer consultas sql

se hace esta linea en el package.json en la parte de scripts para que babel pueda funcionar "build": "babel src --out-dir dist"
luego se hace un npm run build a src

se crear otro scripts enm json o otro comando para correr la app "start": "node dist/index.js"

se crear otro comando o scripts para para desarrollo “dev”:”nodemon src/index.js –-exec babel-node”
luego creamos cuatro carpetas dentro de la carpeta src
1. Routes: para crear rutas,
2. Models: para definir los modelos,
3. controllers: para la la logica de la app,
4. database: para sql que se va a necesitar

en src se crea un archivo llamado app.js que es para montar el servidor con expressjs


luego se crea un archivo por cada tabal que tengamos en la bd en la carpeta routes para las rutas

luego vamos al archivo database.js y creamos la conexion con sequelize
despues de tener la conexion se modelan los datos en model y por cada tabla de la bd creamos un archivo

luego creamos los archivos correspondientes en el controlador para retonar los datos

despues configuramos las rutas lo que va a retornar cada peticion que se 

Para instalar todas las dependencias y modulos se ejecuta este comando

npm i y/o npm install

para que se instale todo lo necesario