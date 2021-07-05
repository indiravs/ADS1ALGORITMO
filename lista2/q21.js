//QUESTAO 21 – DETRAN 

console.log(`QUESTÃO 21 - CÁLCULO DE TAXA SOBRE CARRO
DE ACORDO COM ANO E VALOR DO CARRO
`);

var prompt=require(`prompt-sync`)(); 

var anocarro=prompt(`Digite o ano do carro: `); 
var valorcarro=prompt(`Digite o valor do carro: `); 

if (Number(anocarro)<1990){ 
var tvcarro=(Number(valorcarro)*0.01); 
}else{ 
var tvcarro=(Number(valorcarro)*0.015); 
} 

console.log(`O valor da taxa sobre o carro do ano ${anocarro} e de valor ${valorcarro} será de ${tvcarro}`); 