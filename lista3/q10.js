//QUESTAO 10 - NÚMERO DE DIAS ENTRE DUAS DATAS

console.log(`QUESTÃO 10 - NÚMERO DE DIAS ENTRE DUAS DATAS
DENTRE OS ANOS DE 1950 E 1995
`);

var prompt=require('prompt-sync')();
var dia1=prompt('Digite o dia da primeira data: ');
var mes1=prompt('Digite o mês (1 a 12) da primeira data: ');
var ano1=prompt('Digite o ano da primeira data (1950-1996): ');
var day1=Number(dia1);
var month1=Number(mes1);
var year1=Number(ano1);
var dia2=prompt('Digite o dia da segunda data: ');
var mes2=prompt('Digite o mês (1 a 12) da segunda data: ');
var ano2=prompt('Digite o ano da segunda data (1950-1996): ');
var day2=Number(dia2);
var month2=Number(mes2);
var year2=Number(ano2);

if(year1<1950 || year2>1995){
    console.log('Um ou mais anos inválidos. Algoritmo encerrado.');
}else{
var datadigitada=new Date(year1, month1, day1);
var datadigitada2=new Date(year2, month2, day2);
var diamsec = 24*60*60*1000;
var difdatas=new Date(datadigitada2.getTime() - datadigitada.getTime());
var numdias=difdatas/diamsec;

console.log(`Foram decorridos ${numdias} dias entre as duas datas.`);
}