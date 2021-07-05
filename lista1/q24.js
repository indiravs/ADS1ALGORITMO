//QUESTAO 24 - TONEL DE REFRESCO

console.log(`QUESTÃO 24 - LITROS DE ÁGUA E DE SUCO NECESSÁRIOS PARA DETERMINADO TONEL
`);

var prompt=require('prompt-sync')();

var suco=prompt('Digite a quantidade de litros de suco desejada: ');

var agua=suco*0.8;
var sucomaracuja=suco*0.2;

console.log('As medidas necessárias para este tonel são de ' + agua + ` litros de água e ` + sucomaracuja + ' litros de suco de maracujá.');
