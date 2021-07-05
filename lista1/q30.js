//QUESTÃO 30 - SALÁRIO E COMISSÃO 

console.log(`QUESTÃO 30 - SALÁRIO FINAL DE UM FUNCIONÁRIO DE ACORDO 
COM O SALÁRIO BASE E O VALOR GANHO DE COMISSÕES
`);

var prompt=require('prompt-sync')(); 

var sfixo=prompt('Digite o valor do salário fixo do funcionário: '); 
var vendas=prompt('Digite o valor de vendas no mês do funcionário: '); 
var cmss=(Number(vendas)*0.04); 
var sfinal=cmss+Number(sfixo); 

console.log('O salário final do funcionário é de ' + sfinal + ' reais.' ); 