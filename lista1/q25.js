//QUESTAO 25 - VOLUME CILINDRO

console.log(`QUESTÃO 25 - VOLUME DE UMA CAIXA D'ÁGUA CILÍNDRICA
`);

var prompt=require('prompt-sync')();

var raio=prompt('Digite o raio da caixa d´água: ');
var altura=prompt('Digite a altura da caixa d´água: ');

var volume=Math.PI * Math.pow(Number(raio),2) * altura;
console.log('O volume da caixa d´água é de ' + volume.toFixed(2) + ' litros.');