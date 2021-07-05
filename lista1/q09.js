//QUESTÃO 09 - CAMISETAS

console.log(`QUESTÃO 09 - VALOR TOTAL DE CAMISETAS VENDIDAS
`);

var prompt = require('prompt-sync')();

var cpequenas = prompt('Digite o número de camisetas pequenas: ');
var cmedias = prompt('Digite o número de camisetas médias: ');
var cgrandes = prompt('Digite o número de camisetas grandes: ');

var totalvalor = (Number(cpequenas)*10) + (Number(cmedias)*12) + (Number(cgrandes)*15);

console.log('O valor total das camisetas vendidas é de ' + totalvalor + ' reais.');