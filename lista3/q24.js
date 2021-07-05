//QUESTAO 24 - SEQUENCIA PA

console.log(`QUESTÃO 24 - SEQUÊNCIA P.A. DE 10 VALORES
`)
var prompt=require('prompt-sync')();

var ain=prompt('Digite o valor inicial da P.A.: ');
var raz=prompt('Digite a razão da P.A.: ');
var termos=[];

for (i=0; i<=9; i++){
    termos[i]=(Number(ain)+(i*Number(raz)));
}
console.log(`Os 10 primeiros termos da P.A. com razão ${raz} e termo inicial ${ain} são `);
console.log(termos);