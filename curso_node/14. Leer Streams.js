//Streams --> es cuando en YT se carga de a pedacitos el video y no para que no ha
const fs = require('fs');

//let contenido = fs.readFileSync('./logs.log');
//console.log(`Tamaño: ${contenido.length}`)+

let stream = fs.createReadStream('./logs.log', 'UTF-8');
let data = ''

stream.once('data', () => {
   console.log('Iniciando el stream...\n');
});

stream.on('data', (chunk) => {
    console.log(`${chunk.length} |`);
    data += chunk;
})

stream.on('end', () =>{
    console.log('Fin del stream...\n');
    console.log(data.length);
});