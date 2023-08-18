const prompt = require("prompt-sync")();

const numero = prompt("Digite um número: ");

function numPrimo(numero){
    for(i=2;i < numero; i++ ){
        if(numero % i=== 0){
            return(console.log(`O número ${numero} não primo.`));
        }
    }
    console.log(`O número ${numero} é primo.`);
}

numPrimo(numero);