//QUESTAO 24 – LANCHONETE 

console.log(`QUESTÃO 24 - IMPRIMIR LANCHE, QUANTIDADE E VALOR TOTAL A SER PAGO
`);

var prompt=require(`prompt-sync`)(); 

var cod=prompt(`Digite o código do lanche: `); 
var quant=prompt(`Digite a quantidade: `); 

if (Number(cod)==100){ 
var nome=`Cachorro quente`; 
var total=quant*1.1; 
}else if(Number(cod)==101){ 
var nome=`Bauru simples`; 
var total=quant*1.3; 
}else if(Number(cod)==102){ 
var nome=`Bauru c/ ovo`; 
var total=quant*1.5; 
}else if(Number(cod)==103){ 
var nome=`Hamburger`; 
var total=quant*1.1;  
}else if(Number(cod)==104){ 
var nome=`Cheeseburger`; 
var total=quant*1.3; 
}else if(Number(cod)==105){ 
var nome=`Refrigerante`; 
var total=quant*1; 
} 

console.log(`Código: ${cod}. 
Lanche: ${nome}. 
Quantidade: ${quant}. 
Total a ser pago: ${total}.`); 