//QUESTAO 01 - 15 NUMEROS REAIS
console.log(`QUESTÃO 01 - DIGITAR 15 NÚMEROS REAIS
E IMPRIMIR O MAIOR E O MENOR DENTRE ELES.
`)
var prompt=require('prompt-sync')();

var numrealArray = [];
var tamanho = 14; //array começa index do 0, então para 15 números, precisamos de 14 casas no array.

for(var i=0; i<=tamanho; i++) {
	numrealArray[i] = prompt('Digite o ' + (i+1) + 'º número real: ');
}

console.log(`
O maior número entre os 15 digitados é ${Math.max(...numrealArray)},
enquanto o menor é ${Math.min(...numrealArray)}.`);