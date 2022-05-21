const fs = require('fs');

//Renombrar síncrono
//fs.renameSync('./prueba.txt', './config.txt');

//Renombrar asíncrono
/*
fs.rename('./config.txt', './prueba.txt', (err) => {
    if (err) throw err;
    console.log('El archivo fue nombrado exitosamente');
});
 */

//Mover archivo
fs.rename('./prueba.txt', './libs/prueba.txt', (err) => {
    if (err) throw err;
    console.log('El archivo fue movido exitosamente');
});

//Eliminar archivo
fs.unlinkSync('./libs/prueba.txt');
console.log('El archivo fue eliminado');