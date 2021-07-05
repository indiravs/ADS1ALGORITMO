//QUESTAO 14 - N PRIMEIROS NUMEROS PARES E N PRIMEIRO NUMEROS IMPARES

console.log(`QUESTÃO 14 - IMPRIMIR OS N PRIMEIROS NÚMEROS PARES
E OS N PRIMEIROS NÚMEROS ÍMPARES
`)
var prompt=require('prompt-sync')();


var numero=prompt('Digite a quantidade de números pares e de números ímpares desejada: ');
var numeron=Number(numero)*2;

console.log(`
Os n primeiros números pares são: `);
for(i=1; i<=numeron; i++){
    
    if (i%2 ==0){
    console.log(i);}
}
console.log(`
Os n prmeiros números ímpares são: `);
for (j=1;j<=numeron; j++){
    
    if(j%2!=0){
        
        console.log(j);
    }
}
