//QUESTAO 09 - AREA DE UM TRIANGULO DADO OS TRES LADOS

console.log(`QUESTÃO 09 - ÁREA DE UM TRIÂNGULO DADOS OS TRÊS LADOS
`);

var prompt = require("prompt-sync")();

var num1=prompt('Digite o valor do primeiro lado do triângulo: ');
var num2=prompt('Digite o valor do segundo lado do triângulo: ');
var num3=prompt('Digite o valor do terceiro lado do triângulo: ');

var semip=(Number(num1)+Number(num2)+Number(num3))/2;
var area=Math.sqrt((semip*(semip-(Number(num1))))*(semip-Number(num2))*(semip-Number(num3))).toFixed(2);

console.log('A área do triângulo é ' + area + '.');