//QUESTÃO 36 - QUANTIDADE DE SALÁRIOS MÍNIMOS 

console.log(`QUESTÃO 36 - QUANTIDADE DE SALÁRIOS MÍNIMOS QUE UM FUNCIONÁRIO GANHA
`);

var prompt=require(`prompt-sync`)(); 

var salmin=prompt('Digite o valor do salário mínimo: ');
var salfun=prompt('Digite o valor do salário do funcionário: ');
var qsal=Number(salfun)/Number(salmin);

console.log('A quantidade de salários mínimos que o funcionário ganha é de ' + qsal.toFixed(2) + '.');