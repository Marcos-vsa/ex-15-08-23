const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
const operacao = prompt("Qual operaçao você deseja realizar ?")
const adicao = n1+n2;
const subtracao = n1 - n2;
const multiplicacao = n1 * n2;
const divisao = n1 / n2;

switch(operacao){
    case "adicao":
        console.log(adicao);
        break;
    case "subtracao":
        console.log(subtracao);
        break;
    case "multiplicacao":
            console.log(multiplicacao);
            break;
    case "divisao":
        console.log(divisao);
        break;
    default :
    console.log("ERROR")
    break
}