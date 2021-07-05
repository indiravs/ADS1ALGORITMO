//QUESTAO 23 – CREDITO ESPECIAL  

console.log(`QUESTÃO 23 - CONCESSÃO DE CRÉDITO ESPECIAL
`);

var prompt=require(`prompt-sync`)(); 

var smedio=prompt(`Digite o saldo médio do cliente: `); 

if (Number(smedio)>= 0 && Number(smedio)<=200){ 
console.log(`Concessão de crédito não aprovada.`)} 
else if(Number(smedio)>=201 && Number(smedio)<=400){ 
var cred=Number(smedio)*0.2; 
console.log(`Saldo médio do cliente: ${smedio} 
Crédito especial concedido: ${cred}`);
}else if(Number(smedio)>=401 && Number(smedio)<=600){ 
var cred=Number(smedio)*0.3; 
console.log(`Saldo médio do cliente: ${smedio} 
Crédito especial concedido: ${cred}`);
}else if(Number(smedio)>=601){ 
var cred=Number(smedio)*0.4 
console.log(`Saldo médio do cliente: ${smedio} 
Crédito especial concedido: ${cred}`);
} 