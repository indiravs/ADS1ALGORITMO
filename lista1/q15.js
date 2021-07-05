//QUESTÃO 15 - DIVIDIR CONTA

console.log(`QUESTÃO 15 - DIVISÃO DE UMA CONTA ENTRE CARLOS, ANDRÉ E FELIPE
`);

var prompt = require('prompt-sync')();

var totalconta = prompt('Digite o valor total da conta: ');

var carlos = Math.floor(Math.floor(totalconta) / 3);
var andre = Math.floor(Math.floor(totalconta) / 3);
var felipe = totalconta - carlos - andre;

console.log('O total que Carlos deve pagar é de: ' + carlos + ' reais.');
console.log('O total que André deve pagar é de: ' + andre + ' reais.');
console.log('O total que Felipe deve pagar é de: ' + felipe + ' reais.');