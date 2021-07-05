//QUESTAO 20 - MINIMO NUMERO DE NOTAS

console.log(`QUESTÃO 20 - MÍNIMO NÚMERO DE NOTAS DE 100, 50, 10, 5 E 1 REAIS
PARA DETERMINADO VALOR
`);

var prompt=require('prompt-sync')();

var valor=prompt('Digite um valor para ser decomposto em notas de 100, 50, 10, 5 e 1 reais: ');
var valorn=Number(valor);

function countCurrency(valorn)
    {
        let notas = [ 100, 50, 10, 5, 1 ];
        let contador = Array(5).fill(0);
        for (let i = 0; i <= 5; i++) {
            if (valorn >= notas[i]) {
                contador[i] = Math.floor(valorn / notas[i]);
                valorn = valorn - contador[i] * notas[i];
            }
        }
       console.log(`A quantidade mínima de notas para esse valor é de: 
       `);
        for (let i = 0; i < 5; i++) {
            if (contador[i] != 0) {
                console.log(`${contador[i]} notas de ${notas[i]}`);
            }
        }
    }
    countCurrency(valorn);