//QUESTAO 04 - SOMA DE FRAÇÕES

console.log(`QUESTÃO 04 - SOMA DE UMA SÉRIE DE FRAÇÕES
(1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50)
`)

var numeradores = -1;
var soma = 0;
for (denominadores = 1; denominadores <= 50; denominadores++){
    numeradores = numeradores + 2;
    soma = soma + (numeradores / denominadores);}
    console.log(`A soma da série de frações 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50 é igual a ${soma}.`);