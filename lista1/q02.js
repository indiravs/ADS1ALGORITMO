//QUESTÃO 02 - FERRADURAS PARA CAVALOS

console.log(`QUUESTÃO 02 - CÁLCULO DE FERRADURAS PARA CAVALOS
`);

var prompt = require('prompt-sync')();

var cavalos = prompt('Digite o número de cavalos: ');
console.log('O número necessário de ferraduras é ');
console.log(Number(cavalos)*4);