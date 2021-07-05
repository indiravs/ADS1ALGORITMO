//QUESTÃO 33 - ÁREA DO TRAPÉZIO 

console.log(`QUESTÃO 33 - ÁREA DE UM TRAPÉZIO
`);

var prompt=require('prompt-sync')(); 

var basemaior=prompt('Digite o valor da base maior do trapézio: '); 
var basemenor=prompt('Digite o valor da base menor do trapézio: '); 
var altura=prompt('Digite o valor da altura do trapézio: '); 

var areatrap=((Number(basemaior)+Number(basemenor))*Number(altura))/2;
console.log('A área do trapézio é de ' + areatrap + '.');