//QUESTAO 02 - TABUADA DE 0 A 9

console.log(`QUESTÃO 02 - TABUADA DE 0 A 9
`);

var range = n => [...Array(n).keys()]
var times = a => b => a * b;
var plus = a => b => a + b;
var toRows = cs => rs => rs.map(r => cs.map(f => f(r)));

var colunas = range(10).map(times);
var linhas = range(10);
var tabela = toRows(colunas)(linhas);

console.table(tabela);