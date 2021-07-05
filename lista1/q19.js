//QUESTÃO 19 - FRANGOTECH

console.log(`QUESTÃO 10 - QUANTIDADE DE CHIPS E ANÉIS PARA DETERMINADO NÚMERO DE FRANGOS
`);

var prompt=require('prompt-sync')();

var frangos=prompt('Digite o número de frangos: ');
var anelchip=frangos*4;
var anelalim=frangos*7; //dois anéis de 3.5 cada = 7 reais.

console.log('O gasto total para marcar os frangos é de ' + (anelchip+anelalim) + ' reais.');