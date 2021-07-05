//QUESTÃO 23 - ALTURA DE UM PRÉDIO

console.log(`QUESTÃO 23 - ALTURA DE UM PRÉDIO A PARTIR DA 
SUA ALTURA E OS TAMANHOS DAS SOMBRAS NO CHÃO
`);

var prompt=require('prompt-sync')();

var alturah = prompt('Digite a sua altura: ');
var sombrah = prompt('Digite o tamanho da sua sombra no chão: ');
var sombrap = prompt('Digite o tamanho da sombra do prédio no chão: ');
var alturap = (Number(alturah)*Number(sombrap))/(Number(sombrah));

console.log('A altura do prédio é de ' + alturap + ' metros.');