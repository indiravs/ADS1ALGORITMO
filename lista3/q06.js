//QUESTAO 06 - NUMEROS PERFEITOS

console.log(`QUESTÃO 06 - NÚMEROS PERFEITOS
`);

var prompt=require('prompt-sync')();
var numero=prompt('Digite um número para checar se é perfeito ou não: ');
var numeron=Number(numero);

function numeroPerfeito(numeron) {
    var sum = 0;
    for (var i = 1; i < numeron; i++) {
      if (numeron % i == 0) {
        sum += i;
      }
    }
    if (sum == numeron) {
      console.log(numeron + ' é um número perfeito.');
    }else{
        console.log(numeron + ' não é um número perfeito.');
    }
    return false;
  }
numeroPerfeito(numeron);