const http = require('http');

http.createServer((req, res) => {
    //res.writeHead(200, {'content-type': 'text/plain'});
    //res.end('Hola mundo!');

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            <h1>Hola Mundo!</h1>
            <p>Bienvenido a mi servidor</p>
        </body>
        </html>
    `);

}).listen(3000);

console.log('Servidor iniciado...');