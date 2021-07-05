//QUESTÃO 27 - DIVISÃO DE DOIS NUMEROS

console.log(`QUESTÃO 27 - QUOCIENTE ENTRE DOIS NÚMEROS DIGITADOS
`);

var prompt=require('prompt-sync')();

var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var final=Number(num1)/Number(num2);
console.log('O quociente entre os dois números é de ' + final + '.');