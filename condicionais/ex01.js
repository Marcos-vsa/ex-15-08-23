const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "));

if(numero>0){
    console.log("O número é positivo");
}else if (numero<0){
    console.log("O número é negativo");
}else{
    console.log("O número é zero ");
}
