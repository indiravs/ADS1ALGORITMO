//QUESTAO 25 – TRIANGULOS 

console.log(`QUESTÃO 25 - CLASSIFICAÇÃO DE TRIÂNGULOS
(ESCALENO, ISÓSCELES, EQUILÁTERO OU TRIÂNGULO INVÁLIDO)
`);

var prompt=require(`prompt-sync`)(); 

var lado1=prompt(`Digite o valor do primeiro lado: `); 
var lado2=prompt(`Digite o valor do segundo lado: `); 
var lado3=prompt(`Digite o valor do terceido lado: `); 

if((Number(lado1)+Number(lado2)<=Number(lado3)) || (Number(lado2)+Number(lado3)<=Number(lado1)) || (Number(lado1)+Number(lado3)<=Number(lado2))){
console.log('O triângulo é inválido.');
}   else{
        if(Number(lado1)==Number(lado2) && Number(lado2)==Number(lado3)){
        console.log('O triângulo é equilátero.');
}           else if(Number(lado1)==Number(lado2) || Number(lado2)==Number(lado3) || Number(lado1)==Number(lado3)){
            console.log('O triângulo é isósceles.');
}       else{
        console.log('O triângulo é escaleno.');
}
}