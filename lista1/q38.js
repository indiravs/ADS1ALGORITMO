//QUESTAO 38 - IDADE EM MESES, SEMANAS, DIAS

console.log(`QUESTÃO 39 - IDADE EM ANOS OU MESES OU SEMANAS OU DIAS
`);

var prompt=require('prompt-sync')();

var nasc=prompt('Digite o ano de nascimento: ');
var atual=prompt('Digite o ano atual: ');
var idadeanos=Number(atual)-Number(nasc);
var idademeses=idadeanos*12;
var idadesemanas=idademeses*4;
var idadedias=idadesemanas*30;

console.log('A idade é de ' + idadeanos + ' anos, ou de ' + idademeses + ' meses, ou de ' + idadedias + ' dias ou de ' + idadesemanas + ' semanas.');