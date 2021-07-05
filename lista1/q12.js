//QUESTÃO 12 - SALÁRIO E DESCONTOS

console.log(`QUESTÃO 12 - SALÁRIO COM AUMENTO E COM DESCONTO
`);

var prompt = require('prompt-sync')();

var salario = prompt('Digite o salário a do funcionário (R$): ');
var salarioaumento = salario*1.15;

console.log('Salário inicial: ' + salario + '.');
console.log('Salário com aumento de 15%: ' + salarioaumento + '.')
console.log('Salário final (com desconto de 8%): ' + (salarioaumento - (salarioaumento*0.08)) + '.');