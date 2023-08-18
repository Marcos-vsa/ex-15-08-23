let numeros = [3, 5 , 8 , 10];
let soma = 0;

function calcularMedia(numeros){
    for(i=0;i>=numeros.length;i++){
        soma += numeros[i];
    }
    var media = soma / numeros.length;

    return media;
}
calcularMedia(numeros);
console.log(calcularMedia)