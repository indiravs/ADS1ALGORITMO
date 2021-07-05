//QUESTAO 17 - PROXIMO DIA E DIA ANTERIOR

console.log(`QUESTÕES 17 E 18 - IMPRIMIR PRÓXIMO DIA E O DIA ANTERIOR A PARTIR DE DATA DIGITADA PELO USUÁRIO
`);


var prompt=require('prompt-sync')();
var dia=prompt('Digite o dia: ');
var mes=prompt('Digite o mês (1 a 12): ');
var ano=prompt('Digite o ano: ');
var day=Number(dia);
var month=Number(mes);
var year=Number(ano);

var datadigitada=new Date(year, month, day);
var diamsec = 24*60*60*1000;
var diaseguinte = new Date(datadigitada.getTime() + diamsec);
var diaanterior = new Date(datadigitada.getTime() - diamsec);

console.log(`Data digitada ${day} - ${month} - ${year}. Dia seguinte: ${diaseguinte.getDate()} - ${diaseguinte.getMonth()} - ${diaseguinte.getFullYear()}. Dia anterior: ${diaanterior.getDate()} - ${diaanterior.getMonth()} - ${diaanterior.getFullYear()}`);