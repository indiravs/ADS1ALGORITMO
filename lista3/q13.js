//QUESTAO 13 - MÉDIA DOS ALUNOS

console.log(`QUESTÃO 13 - LER AS MÉDIAS DE VÁRIOS ALUNOS,
ENCONTRAR A MAIOR MÉDIA, A MENOR E A MÉDIA ARITMÉTICA DA TURMA
E PARAR AO ENCONTRAR UMA MÉDIA NEGATIVA
`)

var prompt=require('prompt-sync')();
var tamanho1=prompt('Digite o número de alunos na turma: ');

var mediaArray = [];
var tamanho = Number(tamanho1)-1;

for(var i=0; i<=tamanho; i++) {
	mediaArray[i] = prompt('Digite a ' + (i+1) + 'ª média: ');

	function getSum(mediaArray){
		return mediaArray.reduce(function(sum, value) {
		  return sum + value;
		});
	  }
}
var mediaturma=(getSum(mediaArray.map(Number)))/(Number(tamanho1));
if (Math.min(...mediaArray)<0){
	console.log('Média negativa digitada. Programa encerrado.')
}else{
console.log(`
A maior média entre as ${tamanho1} digitadas é ${Math.max(...mediaArray)},
enquanto o menor é ${Math.min(...mediaArray)} e a média da turma é ${mediaturma}.`);  
}