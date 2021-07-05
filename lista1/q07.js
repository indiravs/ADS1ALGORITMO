//QUESTÃO 07 - DIAS QUE PASSARAM

console.log(`QUESTÃO 07 - TOTAL DE DIAS DESDE O COMEÇO DO ANO
`);

var prompt = require('prompt-sync')();

var dias = prompt('Digite o dia: ');
var mes = prompt('Digite o mês: ');

var dtotal = Number(mes)*30 + Number(dias);
console.log('O total de dias desde o começo do ano é de ' + Number(dtotal) + '.');