var path = require('path');     //Hace referencia al manejo de URL's
var util = require('util');     //Funciones especificas o actividades especificas
var v8 = require('v8');   //Sacar estadisticas del sistema, sobre el engine o motor que le da vida a js

//console.log(path.basename(__filename));
//console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));

var nombre = "marcos";
var edad = 25;
var texto = util.format("Hola %s, tenes %d años", nombre, edad);
console.log(texto);

console.log(v8.getHeapSpaceStatistics())


