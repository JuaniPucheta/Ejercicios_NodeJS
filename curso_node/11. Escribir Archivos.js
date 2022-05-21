const fs = require('fs');

const archivo = 'prueba.txt';

//Validar si existe un archivo
/*if (fs.existsSync(archivo)){
    console.log('El archivo existe');
} else {
    console.log('El archivo no existe');
}*/

//Otra forma de validar
/*fs.access(archivo, fs.constants.F_OK, (err) => {
   if (err) {
       console.log('El archivo existe');
   }
   else {
       console.log('El archivo no existe');
   }
});*/

//Escribir en un archivo
const contenido = 'Este es el contenido de un texto';

fs.writeFileSync(archivo, contenido);
console.log('Se ha escrito en el archivo');

//Escribir en un archivo de forma asíncrona
/*fs.write(archivo, contenido, (err) => {
   if (err) throw('Hubo un error al escribir en el archivo');
   console.log('Se ha escrito en el archivo');
});*/

const textoAdicional = '\nAquí va otra linea de codigo';
fs.appendFile(archivo, textoAdicional, (err) => {
    if (err) throw('No se pudo adjuntar más texto');
    console.log('Se ha añadido otra linea');
});