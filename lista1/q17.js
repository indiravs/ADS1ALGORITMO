//QUESTÃO 17 = CELSIUS PARA FAHRENHEIT

console.log(`QUESTÃO 17 - CONVERSÃO DE GRAUS CELSIUS PARA GRAUS FAHRENHEIT
`);

var prompt = require('prompt-sync')();

var celsius = prompt('Digite a temperatura em graus Celsius: ');
var fahrenheit = (celsius*9/5) + 32;

console.log('O valor da temperatura em Fahrenheit é de ' + fahrenheit + ' graus Fahrenheit.');