//QUESTÃO 29 - DESCONTO PREÇO

console.log(`QUESTÃO 29 - DESCONTO DE 10% SOBRE O PREÇO DE UM PRODUTO
`);

var prompt=require('prompt-sync')();

var pre1=prompt('Digite o preço do produto: ');
var pre2=Number(pre1)*0.9;

console.log('O novo preço do produto, descontando 10%, é de ' +pre2+' reais.');