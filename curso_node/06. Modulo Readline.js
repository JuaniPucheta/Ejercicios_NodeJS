var readline = require('readline');
var util = require('util');
var rl = readline.createInterface(process.stdin, process.stdout);

/*
rl.question('Cuál es tu nombre?: ', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    process.exit();
});
*/

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cual es tu nombre?: ', (respuesta) =>{
   persona.nombre = respuesta;
   rl.setPrompt('Dime un comentario: ');
   rl.prompt();

});

//Evento: mapear sobre cada vez que yo escriba
rl.on('line', (input) => {
    //console.log("Escribiste una linea...");

    if(input.trim() === 'salir'){
        var mensaje = util.format("Te llamas %s y esto me dijiste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }

    persona.comentarios.push(input.trim());

    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
});



