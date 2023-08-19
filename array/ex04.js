lista1 = [2,5,8,4,3,1];
lista2 = [6,9,7,5,1,6];

resultado = [];
i = 0;

lista1.forEach(element => {
    soma = element + lista2[i]
    resultado.push(soma)
    i++
});

console.log(resultado)