//QUESTAO 37 - TABUADA DE NUMERO DIGITADO

console.log(`QUESTÃO 37 - TABUADA DE 1 A 10 PARA NÚMERO DIGITADO PELO USUÁRIO
`);

var prompt=require('prompt-sync')();

var num=prompt('Digite o número desejado para tabuada: ');

for(let i=1; i<=10; i++){
    var tabuada=i*Number(num);

    console.log('' + num + ' x ' + i + ' = ' + tabuada + '.');
}