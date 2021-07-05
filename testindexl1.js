console.log(`ESCOLHA UMA QUESTÃO DA LISTA 1 (1 A 40)
`)

var prompt=require('readline-sync');

function callIndex1(){
var questao=prompt.question(`Digite o algarismo do item escolhido (1 a 40), ou 0 para retornar ao menu principal: 
`);
var questaon=Number(questao);
if (questaon==0){
    var mainmenu=require('./testmenu.js');
    delete require.cache[require.resolve(`./testmenu`)]
    console.log(mainmenu);
}
switch(questaon){
    case 1:
        var q01=require('./lista1/q01.js');
        console.log(q01);
        break;
    case 2:
        var q02=require('./lista1/q02.js');
        console.log(q02);
        break;
    case 3:
        var q03=require('./lista1/q03.js');
        console.log(q03);
        break;
    case 4:
        var q04=require('./lista1/q04.js');
        console.log(q04);
        break;
    case 5:
        var q05=require('./lista1/q05.js');
        console.log(q05);
        break;
    case 6:
        var q06=require('./lista1/q06.js');
        console.log(q06);
        break;
    case 7:
        var q07=require('./lista1/q07.js');
        console.log(q07);
        break;
    case 8:
        var q08=require('./lista1/q08.js');
        console.log(q08);
        break;
    case 9:
        var q09=require('./lista1/q09.js');
        console.log(q09);
        break;
    case 10:
        var q10=require('./lista1/q10.js');
        console.log(q10);
        break;
    case 11:
        var q11=require('./lista1/q11.js');
        console.log(q11);
        break;
    case 12:
        var q12=require('./lista1/q12.js');
        console.log(q12);
        break;
    case 13:
        var q13=require('./lista1/q13.js');
        console.log(q13);
        break;
    case 14:
        var q14=require('./lista1/q14.js');
        console.log(q14);
        break;
    case 15:
        var q15=require('./lista1/q15.js');
        console.log(q15);
        break;
    case 16:
        var q16=require('./lista1/q16.js');
        console.log(q16);
        break;
    case 17:
        var q17=require('./lista1/q17.js');
        console.log(q17);
        break;
    case 18:
        var q18=require('./lista1/q18.js');
        console.log(q18);
        break;
    case 19:
        var q19=require('./lista1/q19.js');
        console.log(q19);
        break;
    case 20:
        var q20=require('./lista1/q20.js');
        console.log(q20);
        break;
    case 21:
        var q21=require('./lista1/q21.js');
        console.log(q21);
        break;
    case 22:
        var q22=require('./lista1/q22.js');
        console.log(q22);
        break;
    case 23:
        var q23=require('./lista1/q23.js');
        console.log(q23);
        break;
    case 24:
        var q24=require('./lista1/q24.js');
        console.log(q24);
        break;
    case 25:
        var q25=require('./lista1/q25.js');
        console.log(q25);
        break;
    case 26:
        var q26=require('./lista1/q26.js');
        console.log(q26);
        break;
    case 27:
        var q27=require('./lista1/q27.js');
        console.log(q27);
        break;
    case 28:
        var q28=require('./lista1/q28.js');
        console.log(q28);
        break;
    case 29:
        var q29=require('./lista1/q29.js');
        console.log(q29);
        break;
    case 30:
        var q30=require('./lista1/q30.js');
        console.log(q30);
        break;
    case 31:
        var q31=require('./lista1/q31.js');
        console.log(q31);
        break;
    case 32:
        var q32=require('./lista1/q32.js');
        console.log(q32);
        break;
    case 33:
        var q33=require('./lista1/q33.js');
        console.log(q33);
        break;
    case 34:
        var q34=require('./lista1/q34.js');
        console.log(q34);
        break;
    case 35:
        var q35=require('./lista1/q35.js');
        console.log(q35);
        break;
    case 36:
        var q36=require('./lista1/q36.js');
        console.log(q36);
        break;
    case 37:
        var q37=require('./lista1/q37.js');
        console.log(q37);
        break;
    case 38:
        var q38=require('./lista1/q38.js');
        console.log(q38);
        break;
    case 39:
        var q39=require('./lista1/q39.js');
        console.log(q39);
        break;
    case 40:
        var q40=require('./lista1/q40.js');
        console.log(q40);
        break;        
}callIndex1();}callIndex1();
