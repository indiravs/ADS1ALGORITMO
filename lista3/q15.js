//QUESTAO 15 - CHECAR SE UM NÚMERO É PRIMO

console.log(`QUESTÃO 15 - CHECAR SE UM NÚMERO DIGITADO PELO USUÁRIO É PRIMO OU NÃO
`)
var prompt=require('prompt-sync')();
var numcheck=prompt('Digite um número para checar se é primo ou não: ');
var limitecheck=Math.sqrt(Number(numcheck));
let primo=true;

if(Number(numcheck)==1){
    console.log(`O número 1 não é considerado primo.
    Programa encerrado.`)
}else if(Number(numcheck)<=0){
    console.log(`Digite um número maior que 0.
    Programa encerrado.`)
}else{
    for (i=2; i<=limitecheck; i++){
        if (Number(numcheck)%i==0){
            primo=false;
            break;
            }
    }
    if (primo){
        console.log(`O número ${numcheck} é um número primo.`)
    }else{
        console.log(`O número ${numcheck} não é um número primo.`)
    }
}