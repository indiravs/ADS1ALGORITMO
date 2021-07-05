//QUESTÃO 14 - AREA DE UMA PIZZA

console.log(`QUESTÃO 14 - ÁREA DE UMA PIZZA
`);

var prompt = require('prompt-sync')();

var raio = prompt('Digite o raio da pizza: ');
var area = parseFloat(3.14 * raio * raio).toFixed(2);


console.log('A área da pizza é: ' + area + '.');