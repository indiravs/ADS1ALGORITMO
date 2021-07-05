//QUESTAO 23 - TABUADA DE N

console.log(`QUESTÃO 23 - TABUADA DE 0 A 10 PARA NÚMERO N DIGITADO PELO USUÁRIO
`);

var prompt=require('prompt-sync')();
var numero=prompt('Digite um número de 1 a 10 para gerar a tabuada: ');
var numero2=Number(numero);


for(let i=0; i<=10; i++){
    var tabuada=i*numero2;

    console.log('' + numero + ' x ' + i + ' = ' + tabuada + '.');
}