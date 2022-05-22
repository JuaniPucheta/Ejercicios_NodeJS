const _ = require('underscore');

const lista = [
    {'id':1, 'nombre': 'Juan', 'edad':21},
    {'id':2, 'nombre': 'Juli', 'edad':23},
    {'id':3, 'nombre': 'Mati', 'edad':17}
];

const res = _.findWhere(lista, {'edad': 17});

console.log(res);