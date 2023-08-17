const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra para saber se é um palíndromo");
let palavraInvertida = "";
let ehPalindromo = "";

for (i=palavra.length - 1; i>=0;i--){
    palavraInvertida += palavra[i];
}
ehPalindromo = (palavra===palavraInvertida) ? "sim , é um palindromo": "não , não é palindromo"

console.log(`Palarvra invertida: ${palavraInvertida}` );
console.log(`É palindromo ${ehPalindromo}`);
