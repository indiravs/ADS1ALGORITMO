//QUESTAO 07 - NUMEROS DE 1000 A 1999 DIVIDOS POR 11 CUJO RESTO É CINCO

console.log(`QUESTÃO 07 - NÚMEROS DE 1000 A 1999 CUJO RESTO É 5
QUANDO DIVIDISO POR 11
`);

var primeiro=1000;
while(primeiro<=1999){
    if(primeiro%11===5){
        console.log(`${primeiro}. `);
    }primeiro++
}

