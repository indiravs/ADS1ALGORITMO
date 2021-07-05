//QUESTÃO 22 = COFRE PEDRINHO

console.log(`QUESTÃO 22 - ECONOMIA DE MOEDAS NO COFRE DE PEDRINHO
`);

var prompt=require('prompt-sync')();

var moedas1=prompt('Digite a quantidade de moedas de 1 centavo: ');
var moedas5=prompt('Digite a quantidade de moedas de 5 centavos: ');
var moedas10=prompt('Digite a quantidade de moedas de 10 centavos: ');
var moedas25=prompt('Digite a quantidade de moedas de 25 centavos: ');
var moedas50=prompt('Digite a quantidade de moedas de 50 centavos: ');
var moedasreal=prompt('Digite a quantidade de moedas de 1 real: ');

var ptotal=(Number(moedasreal) + (Number(moedas1)*0.01)+(Number(moedas5)*0.05)+(Number(moedas10)*0.1)+(Number(moedas25)*0.25)+(Number(moedas50)*0.5));
if (ptotal==1){
    console.log('O valor total economizado é de ' + ptotal + ' real.')
} else {
    console.log('O valor total economizado é de ' + ptotal + ' reais.');
}
