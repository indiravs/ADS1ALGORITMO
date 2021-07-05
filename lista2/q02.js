//QUESTAO 02 - MAIOR DE TRES NUMEROS

console.log(`QUESTÃO 03 - MAIOR ENTRE TRÊS NÚMEROS
`);

var prompt = require("prompt-sync")();

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt(`Digite o segundo nnúmero: `);
var num3 = prompt(`Digite o terceiro número: `);

var num=Math.max(Number(num1),Number(num2),Number(num3));
console.log('O maior dos três números é ' + num + '.');
