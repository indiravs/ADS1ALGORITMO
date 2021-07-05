//QUESTÃO 31 - PESO DA PESSOA 

console.log(`QUESTÃO 31 - PESO DE UMA PESSOA APÓS ENGORDAR 15%
E ENGORDAR 20% (EM CIMA DO PESO INICIAL)
`);

var prompt=require(`prompt-sync`)(); 

var peso=prompt(`Digite o peso: `); 
var engor=Number(peso)*1.15; 
var emag=Number(peso)*0.8; 

console.log(`O novo peso após engordar 15% será de ` + engor.toFixed() + ` quilos e o novo peso após emagrecer 20% será de ` + emag + ` quilos.`); 