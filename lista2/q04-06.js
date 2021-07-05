//QUESTAO 04, 05 E 06 - ALERTA DE RISCO

console.log(`QUESTÔES 04, 05 E 06 - ALERTA DE RISCO
RISCO BAIXO, MÉDIO, ALTO E GRAVE
`);

var prompt = require("prompt-sync")();

var risco = prompt("Digite o nível de risco (0 a 10): ");
if (Number(risco) < 0 || Number(risco) > 10) {
  console.log("Número digitado fora da escala de risco.");
} else {
  if (Number(risco) > 9 && Number(risco) <= 10) {
    console.log("Nível de risco considerado GRAVE.");
  } else if (Number(risco) > 6 && Number(risco) <= 9) {
    console.log("Nível de risco considerado ALTO.");
  } else {
    if (Number(risco) > 3 && Number(risco) <= 6) {
      console.log("Nível de risco considerado MÉDIO.");
    }
    console.log("Nível considerado BAIXO.");
  }
}
