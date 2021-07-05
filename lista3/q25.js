//QUESTAO 25 - SEQUENCIA Pg

console.log(`QUESTÃO 25 - SEQUÊNCIA P.G. DE 10 VALORES
`)
var prompt=require('prompt-sync')();

var ain=prompt('Digite o valor inicial da P.G.: ');
var raz=prompt('Digite a razão da P.G.: ');
var termos=[];

for (var i=0; i<=9; i++){
    termos[i]=(Number(ain)*(Number(raz)**(i)));
}
console.log(`Os 10 primeiros termos da P.G. com razão ${raz} e termo inicial ${ain} são `);
console.log(termos);