//QUESTÃO 19 – PRESTAÇÕES DESEJADAS 

console.log(`QUESTÃO 19 - PRESTAÇÕES DESEJADAS A PARTIR DE UM VALOR TOTAL DIGITADO
`);

var prompt = require(`prompt-sync`)();


var valortotal = prompt(`Digite o valor total a ser parcelado: `);
var prestnum = prompt(`Digite o número de prestações desejadas: `);

if (Number(prestnum) < 12) {
    console.log(`O número mínimo de prestações é 12, por favor digite um número maior ou igual a 12.`);
} else if (Number(prestnum) >= 24) {
    var vtotaljuros = Number(valortotal) * 1.10;
    var valorprest = vtotaljuros / (Number(prestnum));
    console.log(`O valor de ` + vtotaljuros.toFixed(2) + ` reais será divido em ${prestnum} parcelas de ` + valorprest.toFixed(2) + ` reais.`);
} else if (Number(valortotal) >= 36) {
    var vtotaljuros = Number(valortotal) * 1.15;
    var valorprest = vtotaljuros / (Number(prestnum));
    console.log(`O valor de ` + vtotaljuros.toFixed(2) + ` reais será divido em ${prestnum} parcelas de ` + valorprest.toFixed(2) + ` reais.`);
} else {
    var vtotaljuros = Number(valortotal)
    console.log(`O valor de ` + vtotaljuros.toFixed(2) + ` reais será divido em ${prestnum} parcelas de ` + valorprest.toFixed(2) + ` reais.`);
}
