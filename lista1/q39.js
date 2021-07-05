//QUESTAO 39 - SALARIO E DIVIDA

console.log(`QUESTÃO 39 - JOÃO RECEBEU O SALÁRIO DE R$ 1.200,00 E PRECISA PAGAR DUAS CONTAS: 
CONTA NÚMERO UM, NO VALOR DE R$ 200,00 E CONTA NÚMERO DOIS, NO VALOR DE R$ 120,00.
A MULTA SOBRE CADA UMA DAS CONTAS, POR ATRASO, É DE 2%.
`);

var contamulta=(120*1.02)+(200*1.02);
var salario=1200;
var dif=salario-contamulta;

console.log(`Após o pagamento das contas (total de ${contamulta}), João ficará com o restante de ${dif}.`)