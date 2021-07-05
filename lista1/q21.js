//QUESTÃO 21 - MEGA-COLA

console.log(`QUESTÃO 21 - TOTAL COMPRADO DE LITROS DE REFRIGERANTE
`);

var prompt=require('prompt-sync')();

var latas=prompt('Digite o número de latas de 350 ml compradas: ');
var g600=prompt('Digite o número de garrafas de 600 ml compradas: ');
var g2l=prompt('Digite o número de garrafas de 2 litros compradas: ');

var tlitros=(latas*0.35)+(g600*0.6)+(g2l*2);
console.log('O total de litros de refrigerante comprados é de ' + tlitros + '.');