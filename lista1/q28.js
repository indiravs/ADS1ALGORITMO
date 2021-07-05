//QUESTÃO 28 - MÉDIA PONDERADA DUAS NOTAS

console.log(`QUESTÃO 29 - MÉDIA PONDERADA DE DUAS NOTAS DIGITADAS
`);

var prompt=require('prompt-sync')();

var nota1=prompt('Digite a primeira nota: ');
var nota2=prompt('Digite a segunda nota: ');
var mpond=((Number(nota1)*2)+(Number(nota2)*3))/5;
console.log('A média ponderada das duas notas é de ' +mpond+'.');