//QUESTÃO 16 - SANDUICHES

console.log(`QUESTÃO 16 - QUANTIDADE NECESSÁRIA DE QUEIJO, PRESUNTO E CARNE
PARA DETERMINADO NÚMERO DE SANDUÍCHES
`);

var prompt = require('prompt-sync')();

var sand = prompt('Digite a quantidade de sanduíches a serem feitos: ');

var queijo = sand*0.1 //duas fatias de 50 g = .1 quilos.
var presunto = sand*0.05
var carne = sand*0.1

console.log('A quantidade necessária de queijo é de ' + queijo + ' quilos.');
console.log('A quantidade necessária de presunto é de ' + presunto + ' quilos.');
console.log('A quantidade necessária de carne é de ' + carne + ' quilos.');