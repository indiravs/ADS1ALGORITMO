//QUESTÃO 05 - MOTORISTA

console.log(`QUESTÃO 05 - LITROS ABASTECIDOS POR VALOR TOTAL PAGO
`);
var prompt = require('prompt-sync')();

var vpago = prompt('Digite o valor total pago: ');
var vlitro = prompt('Digite o preço do litro da gasolina: ');

var glitros = Number(vpago)/Number(vlitro);
console.log(Number(glitros) + ' litros foram abastecidos.');