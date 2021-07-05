//QUESTÃO 20 - NOVELOS DE LÃ

console.log(`QUESTÃO 20 - NOVELOS NECESSÁRIOS PARA DETERMINADA QUANTIDADE DE BLUSAS
`);

var prompt=require('prompt-sync')();

var blusas=prompt('Digite a quantidade de blusas a serem fabricadas: ');
var novelos=prompt('Digite o número de novelos necessários para a blusa: ');

console.log('O número de novelos necessários é de ' + (blusas*novelos) + '.');