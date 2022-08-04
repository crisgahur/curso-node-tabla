const fs = require("fs");
const { argv } = require("process");

const crearArchivo = async (base = 5, listar = false, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} 'x' ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("===================".red);
      console.log("    Tabla del", base);
      console.log("===================".red);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`.yellow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
