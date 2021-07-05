//QUESTÃO 26 - MULTIPLICAÇÃO DE TRES NUMEROS

console.log(`QUESTÃO 26 - PRODUTO DE TRÊS NÚMEROS DIGITADOS
`);

var prompt=require('prompt-sync')();

var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var num3=prompt('Digite o terceiro número: ');

var final=Number(num1)*Number(num2)*Number(num3);
console.log('O produto desses três números é ' + final + '.');