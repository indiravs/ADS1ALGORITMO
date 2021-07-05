var prompt=require('readline-sync');

console.log(`

TRABALHO FINAL
--------------------------
MENU PRINCIPAL DE LISTAS
--------------------------
TRABALHO FINAL

`)
var lista=prompt.question(`Escolha uma das alternativas abaixo: 
1 para Lista 01 || 2 para Lista 02 || 3 para Lista 03 || 0 para encerrar o programa.

`);

function chamarLista(){

if (Number(lista)>3){
    console.log(`Lista inexistente. Por favor digite um número de 1 a 3 para selecionar uma lista, 
    ou 0 e depois aperte Enter para encerrar o programa.`)
}else if(Number(lista)==0){
    console.log('Programa encerrado.')
    }

    switch(Number(lista)){
    case 1:
        var lista1=require('./testindexl1.js');
        console.log(lista1);
        break;
    case 2:
        var lista2=require('./testindexl2.js');
        console.log(lista2);
    case 3:
        var lista3=require('./testindexl3.js');
        console.log(lista3);
chamarLista();
}   
}
chamarLista();
delete require.cache[require.resolve(`./testmenu`)]