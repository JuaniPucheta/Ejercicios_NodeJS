//se isntala el paquete node-dev para simular el live share (crtl+s y F5)
//para iniciar el sv se escribe 'node-dev nombre.js'
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});

    res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                \t<meta charset="UTF-8">
                \t<title>Mi primer sitio web</title>
                \t<link rel="stylesheet" href="css/main.css">
                </head>
                <body>
                    <h1>Hola que tal</h1>
                    <h3>Bienvenidos a mi sitio web</h3>
                </body>
                </html>
            `);
}).listen(3000);

console.log('Servidor iniciado...');