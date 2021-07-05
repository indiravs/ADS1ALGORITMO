//QUESTÃO 10 - DISTÂNCIA ENTRE DOIS PONTOS

console.log(`QUESTÃO 10 - CÁLCULO DE DISTÂNCIA ENTRE DOIS PONTOS CARTESIANOS
`);

var prompt = require('prompt-sync')();

var x1 = prompt('Digite o valor de X do primeiro ponto: ');
var y1 = prompt('Digite o valor de Y do primeiro ponto: ');
var x2 = prompt('Digite o valor de X do segundo ponto: ');
var y2 = prompt('Digite o valor de Y do segundo ponto: ');

var x = x2 - x1;
var y = y2 -  y1;

console.log('A distância entre os dois pontos é de ' + Math.hypot(x,y) + '.');