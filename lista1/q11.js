//QUESTÃO 11 - ANOS, MESES E DIAS SEM ACIDENTES

console.log(`QUESTÃO 11 - ANOS, MESES E DIAS SEM ACIDENTES
`);

var prompt = require('prompt-sync')();

var tdias = prompt('Digite o total de dias sem acidentes: ');

if (tdias>=360) {
    var anos = Math.trunc(Number(tdias)/360);
    var meses = Math.trunc((((Number(tdias)/360)-anos)*360)/30);
    var dias = (tdias-(anos*360)-(meses*30));
    console.log('O total de tempo sem acidentes é de ' + anos + ' ano(s), ' + meses + ' mes(es) e ' + dias + ' dia(s).');
    
} else if (30<=tdias) {
    var meses = Math.trunc((Number(tdias) / 30));
    var dias = Math.ceil(((Number(tdias) / 30) - meses)*30);
    console.log('O total de tempo sem acidentes é de ' + meses + ' mes(es) e ' + dias + ' dia(s).');

} else {
    console.log('O total de tempo sem acidentes é de ' + tdias + ' dia(s).');
}