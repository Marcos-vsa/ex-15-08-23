listaDeNumeros = [10,2,11,5,20,8]
maiorNumero = 0;

for(i=0; i<= listaDeNumeros.length; i++){
    if(listaDeNumeros[i] >= maiorNumero){
        maiorNumero = listaDeNumeros[i];
    }
}

console.log(maiorNumero)