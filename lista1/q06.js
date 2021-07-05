//QUESTÃO 06 - RESTAURANTE

console.log(`QUESTÃO 06 - PREÇO DE PRATO FEITO
`);

var prompt = require('prompt-sync')();

var pcomida = prompt('Digite o peso do prato feito (kg): ');
var vtotal = Number(pcomida)*12;

console.log('O valor total a ser pago é de ' +Number(vtotal)+ ' reais.');