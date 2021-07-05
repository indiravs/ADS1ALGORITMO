//QUESTÃO 04 - NOME E IDADE DE UMA PESSOA

console.log(`QUUESTÃO 04 - NOME E IDADE DE UMA PESSOA, EM DIAS
`);

var prompt = require('prompt-sync')();

var nome = prompt('Qual o seu nome? ');
var idade = prompt('Qual a sua idade? ');

console.log(nome + ', você já viveu ' + Number(idade)*365 + ' dias.');