//QUESTAO 03 - MENOR DE TRES NUMEROS

console.log(`QUESTÃO 03 - MENOR ENTRE TRÊS NÚMEROS
`);

var prompt = require("prompt-sync")();

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt(`Digite o segundo nnúmero: `);
var num3 = prompt(`Digite o terceiro número: `);

var num=Math.min(Number(num1),Number(num2),Number(num3));
console.log('O menor dos três números é ' + num + '.');