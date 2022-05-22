const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
   res.send('Hola a todos!');
});

app.get('/home', (req, res) => {
   res.send('Estas en la pagina de inicio');
});

app.listen(port, () => {
   console.log(`Servidor iniciado en el puerto ${port}`);
});