//QUESTAO 16 - F PARA C

console.log(`QUESTÃO 16 - CONVERSÃO DE GRAUS FAHRENHEIT PARA GRAUS CELSIUS
`);

var prompt=require('prompt-sync')();

var temp=prompt('Digite a temperatura a ser convertida: ');
var tipo=prompt('A temperatura digitada está em graus Celsius ou Fahrenheit? [C/F] ').toUpperCase();

if (tipo='F'){
    var tipoinicial='Fahrenheit';
    var tipofinal='Celsius';
    var tempf=((5/9)*(Number(temp)-32)).toFixed(2);
}else if (tipo='C'){
    var tipoinicial='Celsius';
    var tipofinal='Fahrenheit';
    var tempf=(((9/5)*Number(temp))+32).toFixed(2);
}else{
    console.log('Comando não reconhecido. Por favor, escolha entre Celsius ou Fahrenheit.');
}

console.log(`A temperatura de ${temp}° graus ${tipoinicial} é igual a ${tempf}° graus ${tipofinal}.`);