//QUESTAO 11 - SOMA DE NÚMEROS PARES E ÍMPARES MENORES QUE 1000

console.log(`QUESTÃO 11 - SOMA DE NÚMEROS PARES E ÍMPARES
DADO NÚMERO N MENOR QUE 1000
`);

var prompt=require('prompt-sync')();

var somapar=0;
var somaimpar=0;
var somapar2=0;
var somaimpar2=0;

function recurse(){
    var numeromax=prompt('Digite um número de 0 a 1000 ou digite um número maior que 1000 para encerrar o programa: ');

    if (Number(numeromax)>1000){
    console.log('Número digitado maior que 1000. Programa encerrado.')
    
    }else{
        for (i=0; i<=Number(numeromax); i++){
            if(i%2==0){
            somapar+=i;
            
            }else if(i%2!=0){
            somaimpar+=i;
            }
        }
    console.log(`A soma dos números pares de 0 a ${numeromax} é igual a ${somapar}, 
    equanto a soma dos números ímpares é igual a ${somaimpar}.`)
    
    function recurse2(){
        var numeromax2=prompt('Digite um número de 0 a 1000: ');

    if (Number(numeromax2)>1000){
    console.log('Número digitado maior que 1000. Programa encerrado.')
    }else{
        for (j=0; j<=Number(numeromax2); j++){
            if(j%2==0){
            somapar2+=j;
            
            }else if(j%2!=0){
            somaimpar2+=j;
            }
        }
    console.log(`A soma dos números pares de 0 a ${numeromax2} é igual a ${somapar2}, 
    equanto a soma dos números ímpares é igual a ${somaimpar2}.`)
    
    recurse2();}
}
if (Number(numeromax)>1000){
    console.log('Número digitado maior que 1000. Programa encerrado.')
    }else{
        recurse2();
}
}
}recurse();
console.log(`


Atenção: a partir da terceira iteração, esse código comete erros.
Peço mil desculpas, professor Rafael.`)