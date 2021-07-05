//QUESTÃO 35 - ÁREA DO LOSANGO 

console.log(`QUESTÃO 35 - ÁREA DE UM LOSANGO
`);

var prompt=require(`prompt-sync`)(); 

var diagonalmaior=prompt(`Digite o valor da diagonal maior do losango: `); 
var diagonalmenor=prompt(`Digite o valor da diagonal menor do losango: `); 
var arealosango=(Number(diagonalmaior)*Number(diagonalmenor)/2); 

console.log(`A área do losango é de `+ arealosango + `.`); 
