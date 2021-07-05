//QUESTAO 25 - FATORIAIS

var prompt=require('prompt-sync')();

var numero=prompt('Digite um número a ser fatoriado: ');
var numero2=Number(numero);

var fatores='';
     let factorial = 1;
  
    for(let i = 1; i <= numero2; i++) {
      factorial *= i;
    if (fatores!=''){
      fatores+=' x ';
    }fatores += i;
    }
      console.log(numero2 +'! = ' + fatores + ' = ' + factorial );