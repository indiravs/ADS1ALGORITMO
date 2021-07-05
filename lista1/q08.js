//QUESTÃO 08 - NOTA MÉDIA PONDERADA

console.log(`QUESTÃO 08 - MÉDIA PODERADA DE NOTAS
`);

var prompt = require('prompt-sync')();

var nota1 = prompt('Digite a primeira nota: ');
var nota2 = prompt('Digite a segunda nota: ');
var nota3 = prompt('Digite a terceira nota: ');

var mpond = (Number(nota1) + Number(nota2)*2 + Number(nota3)*3)/5;
console.log('A média ponderada das notas é ' + Number(mpond) + '.');