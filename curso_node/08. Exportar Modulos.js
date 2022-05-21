const person = require('./libs/persona');

let pablo = new person('Pablo');

pablo.on('habla', (mensaje) => {
    console.log(`${pablo.nombre}: ${mensaje}`);
});

pablo.emit('habla', 'Hoy va a se un buen dia');