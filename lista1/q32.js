//QUESTÃO 32 - PESO EM GRAMAS 

console.log(`QUESTÃO 32 - CONVERSÃO DE PRESO EM QUILOGRAMAS PARA GRAMAS
`);

var prompt=require('prompt-sync')(); 

var pesoq=prompt(`Digite o peso em quilos: `); 
var pesog=Number(pesoq)*1000; 

console.log('O peso em gramas é de ' + pesog + ' gramas.'); 
