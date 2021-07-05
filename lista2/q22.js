//QUESTAO 22 – AUMENTO SALÁRIO 

console.log(`QUESTÃO 22 - AUMENTO DE SALÁRIO
`);

var prompt=require(`prompt-sync`)(); 


var codcargo=prompt(`Digite o código do cargo: `); 
var salario=prompt(`Digite o valor do salário do cargo: `); 

if(Number(codcargo)==101){ 
var nsalario=Number(salario)*1.1; 
var cargo=`Gerente`; 
}else if(Number(codcargo)==102){ 
var nsalario=Number(salario)*1.2; 
var cargo=`Engenheiro`; 
}else if (Number(codcargo==103)){ 
var nsalario=Number(salario)*1.3; 
var cargo=`Técnico`; 
}else{ 
var nsalario=Number(salario)*1.4; 
var cargo=`Não especificado`; 
} 

var dif=Number(nsalario)-Number(salario) 
console.log(`Código do cargo: ${codcargo}. 
Cargo: ${cargo}. 
Salário sem reajuste: ${salario}. 
Salário reajustado: ${nsalario.toFixed(2)}. 
Diferença: ${dif.toFixed(2)}.`); 