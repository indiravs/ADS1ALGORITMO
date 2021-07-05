//QUESTAO 12 - CONJUNTO DE TRÊS VALORES REAIS

console.log(`QUESTÃO 12 - CONJUNTOS DE TRÊS NÚMEROS REAIS,
SUAS SOMAS, PRODUTOS E MÉDIAS, DESDE OS NÚMEROS ESTEJAM EM ORDEM CRESCENTE
`);
var prompt=require('prompt-sync')();

console.log('Digite os números em ordem CRESCENTE.');


var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var num3=prompt('Digite o terceiro número: ');
var soma=Number(num1)+Number(num2)+Number(num3);
var prod=Number(num1)*Number(num2)*Number(num3);
var media=(Number(num1)+Number(num2)+Number(num3))/3;

function recurse(){
 if (Number(num1)>Number(num2) || Number(num2)>Number(num3) || Number(num1)>Number(num3)){
    console.log('Números digitados fora da ordem crescente. Programa encerrado.');
 }
 else{
  console.log(`soma ${soma} prod ${prod} e media ${media.toFixed(2)}`);

  function recurse2(){
    var num12=prompt('Digite o primeiro número: ');
    var num22=prompt('Digite o segundo número: ');
    var num32=prompt('Digite o terceiro número: ');

    let soma2=Number(num12)+Number(num22)+Number(num32);
    let prod2=Number(num12)*Number(num22)*Number(num32);
    let media2=(Number(num12)+Number(num22)+Number(num32))/3;
    
    if (Number(num12)>Number(num22) || Number(num22)>Number(num32) || Number(num12)>Number(num32)){
        console.log('Números digitados fora da ordem crescente. Programa encerrado.');
     }
     else{
      console.log(`A soma dos números é ${soma2}, enquanto o produto é ${prod2} e a média é ${media2.toFixed(2)}`);
recurse2();
}
}
if (Number(num1)>Number(num2) || Number(num2)>Number(num3) || Number(num1)>Number(num3)){
    console.log('Números digitados fora da ordem crescente. Programa encerrado.');
 }
 else{
     recurse2();
}
}
}
recurse();