var nombre;
var preguntas = ['Cuál es tu nombre?: ', 'Cuántos años tenes?: ', 'Lenguaje de programación favorito?: '];
var respuestas = [];

/*
 process.stdout.write("Dime tu nombre: ");
 process.stdin.on('data', function(data){
   //process.stdout.write(data.toString())
   nombre = data.toString();
   process.stdout.write(`Hola ${nombre}! \n`);
   process.exit();
});
*/
//===================================================================================================
function pregunta(i){
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    } else {
        process.exit();
    }
});
pregunta(0);    //Arranca con la pregunta 0