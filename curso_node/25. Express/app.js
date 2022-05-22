//Express nos quita el trabajo manual del ej 19 en terminos de crear un sv estatico, con su funcion express.static
const express = require('express');
var app = express();
app.use(express.static('./public'));
app.listen(3000);
console.log('Express iniciado...');