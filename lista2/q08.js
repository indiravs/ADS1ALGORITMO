//QUESTAO 08 - TIPO DE TRIANGULO

console.log(`QUESTÃO 08 - TIPOS DE TRIÂNGULO
(ESCALENO, ISÓSCELES, EQUILÁTERO OU TRIÂNGULO INVÁLIDO)
`);

var prompt = require("prompt-sync")();

var num1=prompt('Digite o valor do primeiro lado do triângulo: ');
var num2=prompt('Digite o valor do segundo lado do triângulo: ');
var num3=prompt('Digite o valor do terceiro lado do triângulo: ');

if((Number(num1)+Number(num2)<=Number(num3)) || (Number(num2)+Number(num3)<=Number(num1)) || (Number(num1)+Number(num3)<=Number(num2))){
console.log('O triângulo é inválido.');
}   else{
        if(Number(num1)==Number(num2) && Number(num2)==Number(num3)){
        console.log('O triângulo é equilátero.');
}           else if(Number(num1)==Number(num2) || Number(num2)==Number(num3) || Number(num1)==Number(num3)){
            console.log('O triângulo é isósceles.');
}       else{
        console.log('O triângulo é escaleno.');
}
}
