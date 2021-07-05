//QUESTÃO 34 - ÁREA DO QUADRADO 

console.log(`QUESTÃO 34 - ÁREA DE UM QUADRADO
`);

var prompt=require('prompt-sync')(); 

var lado=prompt(`Digite o valor do lado do quadrado: `); 
var areaq=Number(lado)*Number(lado); 

console.log(`O valor da área do quadrado é de ` + areaq + `.`); 