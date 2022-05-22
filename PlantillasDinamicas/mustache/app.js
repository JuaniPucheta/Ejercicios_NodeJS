const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
    const datos = [
        {nombre:'Julieta', edad:23},
        {nombre:'Juan Ignacio', edad:21}
    ];

    res.render('index',{
        titulo: 'Mi primera app con mustache',
        nombre: 'Pucheta',
        datos: datos
    });
});

app.listen(3002, () => {
    console.log('Servicio iniciado...');
})