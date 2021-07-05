//QUESTAO 08 - DECAIMENTO DE MATERIAL RADIOTIVO

console.log(`QUESTÃO 08 - DECAIMENTO DE MATERIAL RADIOATIVO A CADA 50 SEGUNDOS
`);

var prompt=require('prompt-sync')();
var massain=prompt('Digite a massa inicial do material radioativo em gramas: ');
let temposec=0;

while(Number(massain)>=0.05){
    massain=massain/2;
    temposec+=50;
}
var tempoh=Math.floor(temposec/3600);
var tempom=Math.floor((temposec-(tempoh*3600))/60);
var temposecfin=temposec-(tempoh*3600)-(tempom*60);

console.log(`Massa final inicial: ${massain} gramas.
Massa final: ${massain.toFixed(4)} gramas. 
Tempo de decaimento entre as duas massas: ${tempoh} horas, ${tempom} minutos e ${temposecfin} segundos.`);