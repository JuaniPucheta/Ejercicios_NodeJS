console.log("Hola")

var a = 5;
var b = 10;
var path = require("path");
console.log("El resultado es: " + (a+b));

console.log(`El resultado: ${a+b}`);    "Template con ``"
console.log(`El resultado: ${a=b}`);

console.log(__dirname);     "Direccion explorador de donde se encuentra la carpeta"
console.log(__filename);    "Direccion de donde se encuentra este mismo .js"

console.log(path.basename(__filename));     "Devuelve el nombre del archivo"