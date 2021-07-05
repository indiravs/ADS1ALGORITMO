//QUESTÃO 03 - PADARIA HOTPÃO

console.log(`QUUESTÃO 03 - LUCRO E POUPANÇA DA PADARIA HOTPÃO
`);

var prompt = require('prompt-sync')();

var pfran = prompt('Digite o número de pães franceses vendidos: ');
var broas = prompt('Digite o número de broas vendidas: ');
var vendaspaes = Number(pfran)*0.12;
var vendasbroas = Number(broas)*1.5;

var totalvendas = vendaspaes + vendasbroas;

console.log('O total arrecadado no dia é de ' + Number(totalvendas) + ' reais.');
console.log('O valor a ser guardado na pourpança é de ' + (Number(totalvendas)*0.1).toFixed(2) + ' reais.');