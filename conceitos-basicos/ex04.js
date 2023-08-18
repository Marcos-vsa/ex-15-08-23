const numeros = [10, 20 , 30 , 40 , 50 , 60];

function calcularMedia(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;
    return media;
}

const resultado = calcularMedia(numeros);
console.log(resultado);