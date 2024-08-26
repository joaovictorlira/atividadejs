const prompt = require("prompt-sync")();

function somaLog(soma) {
  console.log(`Resultado da soma ${soma}`);
}
function subLog(subtracao) {
  console.log(`Resultado da subtracao ${subtracao}`);
}
function multLog(multiplicacao) {
  console.log(`Resultado da multiplicacao ${multiplicacao}`);
}
function divLog(divisao) {
  console.log(`Resultado da divisao ${divisao}`);
}

let numero1 = prompt("Digite o primeiro numero: ");
let numero2 = prompt("Digite o segundo numero: ");
let escolhaDeOperacao = prompt(
  "Digite a operacao que você deseja que seja exibida: "
);

if (numero2 == 0) {
  console.log("Não é possivel ultilizar o numero zero");
  return;
}

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

if (escolhaDeOperacao === "soma") {
  somaLog(soma);
} else if (escolhaDeOperacao === "subtracao") {
  subLog(subtracao);
} else if (escolhaDeOperacao === "divisao") {
  divLog(divisao);
} else if (escolhaDeOperacao === "multiplicacao") {
  multLog(multiplicacao);
} else {
  console.log("ERROR, Operacao Inválida");
}
