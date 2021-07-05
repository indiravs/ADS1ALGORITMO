//QUESTAO 05 - PRODUTO DE DOIS NÚMEROS

var prompt=require('prompt-sync')();

console.log(`QUESTÃO 05 - PRODUTO DE DOIS NÚMEROS
`);

var num1=prompt('Digite o primeiro número: ');
var num2=prompt('Digite o segundo número: ');
var produto=Number(num1)*Number(num2);


function recurse(){
    if(Number(num1)==0 || Number(num2)==0){
        console.log('Programa encerrado.')
    }else{
    console.log(`O produto de ${Number(num1)} e ${Number(num2)} é igual a ${produto}.
    Para encerrar o programa, digite 0 e aperte Enter duas vezes.`);
    
    function recurse2(){
        var num3=prompt('Digite o primeiro número: ');
        var num4=prompt('Digite o segundo número: ');
        let produto2=Number(num3)*Number(num4);
        if (Number(num3)==0 || Number(num4)==0){
            console.log('Programa encerrado.');        
        }
    else{
        console.log(`O produto de ${Number(num3)} e ${Number(num4)} é igual a ${produto2}.
    Para encerrar o programa, digite 0 e aperte Enter duas vezes.`);
        recurse2();
    }
}
if (num1=='0' || num2=='0'){
    console.log('Programa encerrado.');
}else{
    recurse2();
}    
}
}
recurse();