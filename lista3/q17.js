//QUESTAO 17 - SOMA DE NUMEROS IMPARES E MULTIPLOS DE 3

console.log(`QUESTÃO 17 - SOMA DOS NÚMEROS ÍMPARES E MÚLTIPLOS DE TRÊS
NO INTERVALO 1 A 500
`)

var soma=0

for (var i=1; i<=500; i++){
    if (i%2!=0 && i%3==0){
        soma+=i;
    }
}
console.log(`A soma de todos os números ímpares e múltiplos de três
entre 1 e 500 é igual a 
${soma}.`);