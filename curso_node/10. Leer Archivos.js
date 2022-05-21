var fs = require("fs");

//var files = fs.readdirSync('./');
fs.readdir('./', (error, files) => {//Es la misma que la de arriba, solo que sin Sync
    if(error){
        throw error;
    }
    console.log(files);

    //var archivo = fs.readFileSync('./archivo.txt', 'UTF-8');

    //Para hacerlo Asíncrono sería
    fs.readFile('./archivo.txt', 'UTF-8', (error, archivo) => {
        if (error) {
            throw error;
        }
        console.log(archivo);
    });

});
