function contarOcorrencias(str, letra) {
    let contador = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letra) {
            contador++;
        }
    }
    
    return contador;
}

const minhaString = "Hello my friend";
const letraProcurada = "e";

const ocorrencias = contarOcorrencias(minhaString, letraProcurada);
console.log(`A letra "${letraProcurada}" ocorre ${ocorrencias} vezes na string.`);
