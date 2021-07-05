//QUESTAO 09 - N PRIMEIROS NÚMEROS DA SEQUÊNCIA DE FIBONACCI

console.log(`QUESTÃO 09 - IMPRIMIR OS N PRIMEIROS NÚMEROS
DA SEQUÊNCIA DE FIBONACCI (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...)
`);

var prompt=require('prompt-sync')();
var tamanho=prompt('Digite o número desejado de elementos para a sequência: ');
var tamanhon=Number(tamanho);
var array=new Array(tamanhon);

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= array.length; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);}