//QUESTÃO 18 - SALARIO HORA

console.log(`QUESTÃO 10 - CÁLCULO DE SALÁRIO BRUTO E LÍQUIDO POR HORA NORMAL E HORA EXTRA TRABALHADAS
`);

var prompt=require('prompt-sync')();

var hnormal=prompt('Digite o número de horas normais trabalhadas: ');
var hextra=prompt('Digite o número de horas extras trabalhadas: ');
var sbruto=(hnormal*10)+(hextra*15);
var sliquido=sbruto-(sbruto*0.1);

console.log('O valor do salário bruto é de ' + sbruto + ' reais.');
console.log('O valor do salário líquido é de ' + sliquido + ' reais.');