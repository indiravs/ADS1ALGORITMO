//QUESTÃO 01 - SOMA DE DOIS NUMEROS

console.log(`QUESTÃO 01 - SOMA DE DOIS NÚMEROS DIGITADOS PELO USUÁRIO
`);


var prompt = require("prompt-sync")();

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");

var soma = Number(num1) + Number(num2);

console.log("A soma dos dois números é igual a " + soma);
