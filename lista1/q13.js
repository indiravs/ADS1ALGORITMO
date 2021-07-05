//QUESTÃO 13 - CENTENAS, DEZENAS, UNIDADES

console.log(`QUESTÃO 13 - SEPARAR NÚMEROS EM SUAS CENTENAS, DEZENAS E UNIDADES
`);

var prompt = require('prompt-sync')();

var numero = prompt('Digite o número a ser separado em centenas, dezenas e unidades: ')
var cent = Math.floor((numero % 1000) / 100),
        dezenas = Math.floor((numero  % 100) / 10),
        unidades = Math.floor(numero % 10);
        //decimos = num % 1;

console.log('CENTENAS = ' + cent + '.');
console.log('DEZENAS = ' + dezenas + '.');
console.log('UNIDADES = ' + unidades + '.');