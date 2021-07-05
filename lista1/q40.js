//QUESTAO 40 - CALCULAR HIPOTENUSA

console.log(`QUESTÃO 40 - CÁLCULO DE HIPOTENUSA A PARTIR DE DOIS CATETOS
`);

var prompt=require('prompt-sync')();

var cat1=prompt('Digite o valor do primeiro cateto: ');
var cat2=prompt('Digite o valor do segundo cateto: ');

var hipo=Math.sqrt((Math.pow(Number(cat1),2))+(Math.pow(Number(cat2),2)));

console.log(`A hipotenusa dos catetos ${cat1} e ${cat2} é igual a ${hipo.toFixed(2)}.`);