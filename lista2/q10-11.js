//QUESTAO 10-11 NOTAS COM PESOS

console.log(`QUESTÕES 10 E 11 - NOTAS COM PESOS QUE SOMADOS CHEGAM A 10
E MÉDIA PONDERADA DE DETERMINADO ALUNO
`);

var prompt=require('prompt-sync')();

var peso1=prompt('Digite o peso da primeira nota: ');
var peso2=prompt('Digite o peso da segunda nota: ');
var peso3=prompt('Digite o peso da terceira nota: ');
var peso4=prompt('Digite o peso da quarta nota: ');
var somapesos=(Number(peso1)+Number(peso2)+Number(peso3)+Number(peso4));


while(somapesos != 10){
    console.log('A soma dos pesos é diferente de 10. Digite pesos que totalizem 10.'); 
    
    var peso1=prompt('Digite o peso da primeira nota: ');
    var peso2=prompt('Digite o peso da segunda nota: ');
    var peso3=prompt('Digite o peso da terceira nota: ');
    var peso4=prompt('Digite o peso da quarta nota: ');
    var somapesos=Number(peso1)+Number(peso2)+Number(peso3)+Number(peso4);
}

while(somapesos==10){  

    var nota1=prompt('Digite o valor da primeira nota: ');
    var nota2=prompt('Digite o valor da segunda nota: ');
    var nota3=prompt('Digite o valor da terceira nota: ');
    var nota4=prompt('Digite o valor da quarta nota: ');
var mediapond=((Number(nota1)*Number(peso1))+(Number(nota2)*Number(peso2))+(Number(nota3)*Number(peso3))+(Number(nota4)*Number(peso4)))/(somapesos);

	console.log('A média ponderada do aluno é de ' + mediapond + '.');
{break;}}