//QUESTAO 16 - N PRIMEIROS NÚMEROS PRIMOS

console.log(`QUESTÃO 16 - IMPRIMIR OS N PRIMEIROS NÚMEROS PRIMOS
`)
var prompt=require('prompt-sync')();
var quant=prompt(`Digite a quantidade desejada de números primos: `);
let n=Number(quant);

var primos = [2];
    function getPrimos() {
        var i = primos.length == 1 ? 1 : primos[primos.length-1], j, l;
        main:
        while((l=primos.length) < n) {
            i += 2;
            for( j=0; j<l; j++) {
                if( i % primos[j] == 0) continue main;
            }
            primos.push(i);
        }
        return primos.slice(0,n);
    }
getPrimos();
console.log(`Os ${n} primeiros números primos são
`);
console.log(getPrimos());