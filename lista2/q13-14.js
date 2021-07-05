//QUESTAO 13 -14 - NUMEROS EM ORDEM CRESCENTE OU DECRESCENTE

console.log(`QUESTÕES 13 E 14 - ORGANIZAR TRÊS NÚMEROS EM ORDEM CRESCENTE OU DECRESCENTE
`);

var prompt=require('prompt-sync')();

var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var num3=prompt('Digite o terceiro número: ');
var numbers = new Array(Number(num1),Number(num2),Number(num3));

var ordem=prompt('Imprimir em ordem crescente ou decrescente? ').toLowerCase();

if(ordem=='crescente'){

numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
}else if (ordem=='decrescente'){
numbers.sort(function(a, b){
    return b - a;
})
console.log(numbers);
}else{
    console.log('Comando não reconhecido. Por favor, escolha entre crescente ou decrescente.')
}
