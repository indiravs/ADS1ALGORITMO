console.log(`ESCOLHA UMA QUESTÃO DA LISTA 2 (1 A 25)
`)

var prompt=require('readline-sync');

function callIndex2(){
var questao=prompt.question(`Digite o algarismo do item escolhido (1 a 25), ou 0 para retornar ao menu principal: 
`);
var questaon=Number(questao);
if (questaon==0){
    var mainmenu=require('./testmenu.js');
    delete require.cache[require.resolve(`./testmenu`)]
    console.log(mainmenu);
}else if(questaon>25){
    console.log('Exercício inexistente. Por favor digite um número entre 1 e 25.')
    }
switch(questaon){
    case 1:
        var q01=require('./lista2/q01.js');
        console.log(q01);
        break;
    case 2:
        var q02=require('./lista2/q02.js');
        console.log(q02);
        break;
    case 3:
        var q03=require('./lista2/q03.js');
        console.log(q03);
        break;
    case 4:
        var q04=require('./lista2/q04-06.js');
        console.log(q04);
        break;
    case 5:
        var q05=require('./lista2/q04-06.js');
        console.log(q05);
        break;
    case 6:
        var q06=require('./lista2/q04-06.js');
        console.log(q06);
        break;
    case 7:
        var q07=require('./lista2/q07.js');
        console.log(q07);
        break;
    case 8:
        var q08=require('./lista2/q08.js');
        console.log(q08);
        break;
    case 9:
        var q09=require('./lista2/q09.js');
        console.log(q09);
        break;
    case 10:
        var q10=require('./lista2/q10-11.js');
        console.log(q10);
        break;
    case 11:
        var q11=require('./lista2/q10-11.js');
        console.log(q11);
        break;
    case 12:
        var q12=require('./lista2/q12.js');
        console.log(q12);
        break;
    case 13:
        var q13=require('./lista2/q13-14.js');
        console.log(q13);
        break;
    case 14:
        var q14=require('./lista2/q13-14.js');
        console.log(q14);
        break;
    case 15:
        var q15=require('./lista2/q15.js');
        console.log(q15);
        break;
    case 16:
        var q16=require('./lista2/q16.js');
        console.log(q16);
        break;
    case 17:
        var q17=require('./lista2/q17-18.js');
        console.log(q17);
        break;
    case 18:
        var q18=require('./lista2/q17-18.js');
        console.log(q18);
        break;
    case 19:
        var q19=require('./lista2/q19.js');
        console.log(q19);
        break;
    case 20:
        var q20=require('./lista2/q20.js');
        console.log(q20);
        break;
    case 21:
        var q21=require('./lista2/q21.js');
        console.log(q21);
        break;
    case 22:
        var q22=require('./lista2/q22.js');
        console.log(q22);
        break;
    case 23:
        var q23=require('./lista2/q23.js');
        console.log(q23);
        break;
    case 24:
        var q24=require('./lista2/q24.js');
        console.log(q24);
        break;
    case 25:
        var q25=require('./lista2/q25.js');
        console.log(q25);
}callIndex2();}callIndex2();