//QUESTAO 15 - CADASTRO DE ALUNOS

console.log(`QUESTÃO 15 - CADASTRO DE ALUNOS
`);

var prompt=require('prompt-sync')();

var matricula=prompt('Digite a matrícula do aluno: ');
var nome=prompt('Digite o nome completo do aluno: ').toUpperCase();
var genero=prompt('Gênero [M/F]: ').toUpperCase();
var curso=prompt('Escolha o curso [BSI, EE, EM, EC ou AQ: ').toUpperCase();
var coefr=prompt('Digite o coeficiente de rendimento do aluno [0 a 10]: ');

switch(genero){
    case 'F': 
    var genfinal='FEMININO';
break;
    case 'M':
    var genfinal='MASCULINO';
break;}

switch(curso){
    case 'BSI': 
    var cursofinal='BACHARELADO EM SISTEMAS DE INFORMAÇÃO';
    break;
    case 'EE':
    var cursofinal='ENGENHARIA ELÉTRICA';
    break;
    case 'EM':
    var cursofinal='ENGENHARIA MECÂNICA;'
    break;
    case 'EC':
    var cursofinal='ENGENHARIA CIVIL';
    break;
    case 'AQ':
    var cursofinal='ARQUITETURA';
    break;
}

if (0<=Number(coefr) && Number(coefr)<3){
    var coefnome='PREOCUPANTE';
}else{
 if (3<=Number(coefr) && Number(coefr)<5){
    var coefnome='NECESSITA MELHORAS';
 }else{
        if (5<=Number(coefr) && Number(coefr)<7){
        var coefnome='REGULAR';}
        else{
            if (7<=Number(coefr) && Number(coefr)<9){
            var coefnome='BOM';}
        else{
            var coefnome='EXCELENTE'
        }}
    }
}

console.log(`NOME: ${nome}.
MATRÍCULA: ${matricula}.
GÊNERO: ${genfinal}.
CURSO: ${cursofinal}.
COEFICIENTE DE REDIMENTO ${Number(coefr).toFixed(2)}, CONSIDERADO ${coefnome}.`);
