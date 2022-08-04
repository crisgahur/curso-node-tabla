const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

// Crear option l (de LISTAR) si se escribe la L en la terminal debe crear el archivo y el resultado en consola, sino se escribe no debe tirar ni hacer nada.

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log(err));
