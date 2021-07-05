//QUESTAO 07 - MULTIPLOS ENTRE TRES NUMEROS

console.log(`QUESTÃO 07 - MÚLTIPLOS ENTRE TRÊS NÚMEROS DIGITADOS PELO USUÁRIO
`);

var prompt = require("prompt-sync")();

var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var num3=prompt('Digite o terceiro número: ');
var maiornum=Math.max(Number(num1),Number(num2),Number(num3));

switch(maiornum){
    case Number(num1):
        if((Number(num1) % Number(num2)==0) && (Number(num1) % Number(num3)==0)){    
        console.log('Os números ' + num2 + ' e ' + num3 + ' são múltiplos do número ' + num1 + '.')
}            else if ((Number(num1) % Number(num2)==0) && (Number(num1) % Number(num3)!=0)){
            console.log('O número ' + num2 + ' é múliplo de ' + num1 + '.')
}       else{
        console.log('Os números não são múltiplos entre si.');
}
    break;
    case Number(num2):
        if((Number(num2) % Number(num1)==0) && (Number(num2) % Number(num3)==0)){
            console.log('Os números ' + num1 + ' e ' + num3 + ' são múltiplos do número ' + num2 + '.')
    }           else if ((Number(num2) % Number(num1)==0) && (Number(num2) % Number(num3)!=0)){
                console.log('O número ' + num1 + ' é múliplo de ' + num2 + '.')
    }   else{
        console.log('Os números não são múltiplos entre si.');
    }
    break;
    case Number(num3):
        if((Number(num3) % Number(num1)==0) && (Number(num3) % Number(num2)==0)){    
            console.log('Os números ' + num1 + ' e ' + num2 + ' são múltiplos do número ' + num3 + '.');
    }
                else if ((Number(num3) % Number(num1)==0) && (Number(num3) % Number(num2)!=0)){
                console.log('O número ' + num1 + ' é múliplo de ' + num3 + '.')
    }       else{
            console.log('Os números não são múltiplos entre si.');
    }
}