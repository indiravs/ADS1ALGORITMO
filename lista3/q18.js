//QUESTÃO 18 - ALTURAS

console.log(`QUESTÃO 18 - DIGITAR A ALTURA DE 15 PESSOAS
E IMPRIMIR A MENOR E A MAIOR DENTRE ELAS.
`)
var prompt=require('prompt-sync')();

var numrealArray = [];
var tamanho = 14; //array começa index do 0, então para 15 números, precisamos de 14 casas no array.

for(var i=0; i<=tamanho; i++) {
	numrealArray[i] = prompt('Digite a altura da ' + (i+1) + 'ª pessoa: ');
}

console.log(`
A menor altura entre as 15 digitados é ${Math.min(...numrealArray)},
enquanto a maior é ${Math.max(...numrealArray)}.`);